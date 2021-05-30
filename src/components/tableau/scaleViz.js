/*
  CREDITS:
  Thanks to Bryant Howell for his work documenting these methods at:
  https://tableauandbehold.com/2021/04/21/responsive-design-and-embedded-tableau-vizes-responsive_scaling_tableau-js/
  
  and thanks to John Hegele for his work with TabScale: 
  https://gitlab.com/jhegele/tabscale
*/

// Real ratios are (phone:0.5635), (tablet:0.75), (desktop:1.33)
// Tablet displays better scaled down, cutting sizes to half (1536:2048 to 768:1024)
const ratioBreakpoints = [ 
  { 'tableauDeviceName': 'desktop', 'minRatio': 1.1, 'vizSizeDefaults': {'width': 1366, 'height': 768} },
  { 'tableauDeviceName': 'tablet',  'minRatio':  0.66, 'vizSizeDefaults': {'width': 768, 'height': 1024} },
  { 'tableauDeviceName': 'phone', 'minRatio':  0.0, 'vizSizeDefaults': {'width': 1080, 'height': 1920} },
  { 'tableauDeviceName': 'web-edit', 'minRatio': 1.33, 'vizSizeDefaults': {'width': 1366, 'height': 768} },
  { 'tableauDeviceName': 'ask-data', 'minRatio': 1.33, 'vizSizeDefaults': {'width': 1366, 'height': 768} }
];

// To be assigned to the viz Initialization function and its Options object 
// Used by the scaleDiv() function when the ratio changes and the viz needs to reload with a different display option
let postResizeVizInitializationFunction;
let postResizeVizOptionsObject;

// The iframe adjustment function adds or removes a class to the iframe
const iframeWorksheetAdjustmentClassName = 'iframe-with-worksheet';

// Specifies the parent <div> that determines the space available for the Tableau viz
const nameOfOuterDivContainingTableauViz = 'outer-main-div';

// Pixels to subtract from the OuterDivContainingTableauViz providing slight margins
// Used within the scaleDiv() function below
const additionalWidthMargin = 30;
const additionalHeightMargin = 60;

// Delays the firing of a resize event until the browser really is done resizing
let vizResizeTimeoutFunctionId;

/*
* Helper Functions
*/
// helper to remove the 'px' value from returned CSS properties to do calculations
const removePx = cssValue => {
  return cssValue.split('px')[0]
}

// helper to add the 'px' ending back for CSS properties that need it
const addPx = cssValue => {
  // Remove any existing 'px' so that you can sanitize any value without worrying
  const strippedPx = cssValue.toString().split('px')[0];
  return strippedPx + "px";
}
/*
* End Helper Functions
*/

// You can't know sheet type (worksheet or dashboard) until the onFirstInteractive event fires
// This function lives separately to adjust the sizes of the iframe and surrounding div
const adjustForWorksheetOrDashboard = e => {
  // Worksheets have a white 4px border, which looks bad when the viz background is not white
  // vizDiv gets the following: "overflow: hidden;", "height: -10px;" and "width: -10px;"
  // iframe gets a new class (iframe-with-worksheet)
  const viz = e.getViz();
  const wb = viz.getWorkbook();
  const activeSheet = wb.getActiveSheet();
  const sheetType = activeSheet.getSheetType();
  const vizDiv = viz.getParentElement();
  const iframe = vizDiv.querySelectorAll('iframe')[0];

  if (sheetType === 'worksheet') {
      vizDiv.style.overflow = 'hidden';
      let oHeight = vizDiv.style.height;
      let oWidth = vizDiv.style.width;
      if (oHeight === ""){
          oHeight = addPx(vizDiv.offsetHeight);
      }
      if (oWidth === ""){
          oWidth = addPx(vizDiv.offsetWidth);
      }

      // Remove 'px' from ending to do some math
      const oHeightInt = removePx(oHeight);
      const oWidthInt = removePx(oWidth);

      const nHeight = (oHeightInt - 10);
      const nWidth = (oWidthInt - 10);

      // Styles need 'px' at the end
      vizDiv.style.height = addPx(nHeight);
      vizDiv.style.width = addPx(nWidth);

      // add the iframe-with-worksheet class to the iframe
      iframe.classList.add(iframeWorksheetAdjustmentClassName);
  }
  else {
      if (iframe.classList.contains(iframeWorksheetAdjustmentClassName)){
          iframe.classList.remove(iframeWorksheetAdjustmentClassName);
      }
  }
}

// Uses breakpoints to determine device type
const whichDevice = availableSpaceRatio => {
  for (let i = 0; i < ratioBreakpoints.length; i++){
      if ( availableSpaceRatio >= ratioBreakpoints[i].minRatio) {
          return ratioBreakpoints[i].tableauDeviceName;
      }
  }
}

// The visible space available for the Tableau viz will depend on other elements of the page.
const getPageSpaceWidthHeight = () => {
  // Visible browser width & height
  const browserWidth = document.documentElement.clientWidth;
  const browserHeight = document.documentElement.clientHeight;
  // get available space from parent <div>
  const outerContainerDiv = document.getElementById(nameOfOuterDivContainingTableauViz);

  const oStyles = window.getComputedStyle(outerContainerDiv);
  const computedPaddingTop = removePx(oStyles.getPropertyValue('padding-top'));
  const computedMarginTop = removePx(oStyles.getPropertyValue('margin-top'));
  const computedPaddingLeft = removePx(oStyles.getPropertyValue('padding-left'));
  const computedMarginLeft = removePx(oStyles.getPropertyValue('margin-left'));
  // removes left margin and padding for width
  const totalVisibleWidth = outerContainerDiv.clientWidth - computedPaddingLeft - computedMarginLeft ;

  // parent <div> height varies based on the viz content that is loaded so total browser height is used
  const totalVisibleHeight = browserHeight - computedPaddingTop - computedMarginTop;

  const finalWidth = totalVisibleWidth;
  const finalHeight = totalVisibleHeight;
  const ratio = finalWidth / finalHeight;
  return { 'width' : finalWidth, 'height' : finalHeight, 'ratio' : ratio };
}

// the first principle for the scaling algorithm is that the iframe and containing div should have the same proportions
// callback function to use for the onFirstVizSizeKnown event in the Viz constructor options object
const resizeVizContainerDivBase = VizResizeEvent => {
  const thisViz = VizResizeEvent.getViz();
  const vizDiv = thisViz.getParentElement();
  const iframe = vizDiv.querySelectorAll('iframe')[0];
  // Get the state of the toolbar and tabbar, for correct adjustment of the iframe size
  const isToolbarHidden = thisViz.getIsToolbarHidden();
  const areTabsHidden = thisViz.getAreTabsHidden();
  let sheetSize;
  let maxSize;
  let widthPx;
  let heightPx;

  // Finally we get the sheetSize object https://help.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#SheetSiz
  if (VizResizeEvent.getVizSize) {
    sheetSize = VizResizeEvent.getVizSize().sheetSize;
  }
  // If it is a tab-switch event, you have to get the viz object itself
  else {
    sheetSize = VizResizeEvent.getViz().getVizSize().sheetSize;
  }

  /* 
    There are three possible states: 'automatic', 'range', and 'fixed'
    But the JS API reports these as: AUTOMATIC, EXACTLY, RANGE, ATLEAST, and ATMOST.

    The iframe generated by the new Viz constructor will always be the height and width passed in the options object
    The challenge is making sure that the iframe is the actual size of the rendered content within, so that you don't 
    end up with scrollbars in the iframe.

    If the sheet is set to automatic, it should have the same size as the iframe.
    This actually happens because a width and height are passed to the constructor in the options object
    If they aren't, you'll probably just get loading errors.
    After this, we'll set the DIV to have the same width and height as the iframe
  */

  // AUTOMATIC vizzes are sized directly by the <div> via props - other types will have a cutoff or scrollbar
  if (sheetSize.behavior === 'automatic') {
    widthPx = addPx(iframe.clientWidth);
    heightPx = addPx(iframe.clientHeight);
  }

  // EXACTLY vizzes should have a maxSize and minSize that match
  else if (sheetSize.behavior === 'exactly') {
    widthPx = addPx(iframe.clientWidth);
    heightPx = addPx(iframe.clientHeight);
    widthPx = addPx(sheetSize.maxSize.width);
    heightPx = addPx(sheetSize.maxSize.height);
    // Now set iframe to the maxWidth size if it exists, but whether this is the best case scenario I'm not sure,
    // because you really want the iframe to be the exact RENDERED height, and it's unclear if that's the case
    iframe.style.width = widthPx;
    iframe.style.height = heightPx;
  }

  // RANGE, ATLEAST & ATMOST
  else {
    if (sheetSize.maxSize) {
      maxSize = sheetSize.maxSize;
      // Weird edge case for the tablet and phone layouts when set to "fit width"
      if (maxSize.width === 2147483647) {
        maxSize.width = iframe.clientWidth;
      }
    }
    else if (sheetSize.minSize) {
      maxSize = { 'width' : null, 'height' : null };
      if (sheetSize.minSize.height >= iframe.clientHeight) {
        maxSize.height = sheetSize.minSize.height;
      }
      else {
        maxSize.height = iframe.clientHeight;
      }
      if (sheetSize.minSize.width >= iframe.clientWidth) {
        maxSize.width = sheetSize.minSize.width;
      }
      else {
        maxSize.width = iframe.clientWidth;
      }
    }

      // Adjust for the toolbar height
      // if (isToolbarHidden === false) { 
      //   iframeHeight += 27
      // }
      // if (areTabsHidden === false) { 
      //   iframeHeight += 23  
      // }
      
      widthPx = addPx(maxSize.width);
      heightPx = addPx(maxSize.height);
      // The iframe is set to the maxWidth size if it exists, but whether this is the best case scenario I'm not sure,
      // because you really want the iframe to be the exact RENDERED height, and it's unclear if that's the case
      iframe.style.width = widthPx;
      iframe.style.height = heightPx;
  }

  vizDiv.style.width = widthPx;
  vizDiv.style.height = heightPx;
}

const resizeVizContainerDiv = VizResizeEvent => {
  const thisViz = VizResizeEvent.getViz();
  const vizDiv = thisViz.getParentElement();

  resizeVizContainerDivBase(VizResizeEvent)
  // Scale it to match the viewport, with multipleLayouts set to true
  scaleDiv(vizDiv, true)

  // Set the resizing event after the first time it's been scaled, with multipleLayouts true
  window.addEventListener('resize', () => { scaleDiv(vizDiv, true)})
}

const resizeVizContainerDivWebEdit = VizResizeEvent => {
  const thisViz = VizResizeEvent.getViz();
  const vizDiv = thisViz.getParentElement();

  resizeVizContainerDivBase(VizResizeEvent);
  // Scale it to match the viewport, with multipleLayouts set to false
  scaleDiv(vizDiv, false);

  // Set the resizing event after the first time it's been scaled, with multipleLayouts false
  window.addEventListener('resize', () => { scaleDiv(vizDiv, false)})
}

// called on resize events (or the initial load) to scale the content Div to fit the visible space
const scaleDiv = (divToScale, multipleLayouts) => {
  const currentPageSpace = getPageSpaceWidthHeight();
  let deviceLayoutToUse;
  // Logic for regular vizes with Device Designer or Automatic sizing.
  // Want to check to see if also need a viz reload based on a change of proportions
  if (multipleLayouts === true){
    // Put on slight delay so this only happens if the page is still for a bit
    window.addEventListener("resize", function(){
        // Clears any previous attempt to run this stuff
        clearTimeout(vizResizeTimeoutFunctionId);
        vizResizeTimeoutFunctionId = setTimeout( function () {
            const newDeviceLayoutToUse = whichDevice(currentPageSpace.ratio);
            if (newDeviceLayoutToUse !== deviceLayoutToUse){
                postResizeVizOptionsObject.device = newDeviceLayoutToUse;
                // Set the global so the next check won't trigger a reload
                deviceLayoutToUse = newDeviceLayoutToUse;
                // Now get the defaults to use from the ratioBreakpoints object and set those values in the options object
                let vizWidthHeight;
                for(let i = 0, len = ratioBreakpoints.length; i < len; i++){
                    if ( ratioBreakpoints[i]['tableauDeviceName'] === deviceLayoutToUse ){
                        vizWidthHeight = ratioBreakpoints[i]['vizSizeDefaults'];
                    }
                }
                postResizeVizOptionsObject.width = vizWidthHeight.width;
                postResizeVizOptionsObject.height = vizWidthHeight.height;

                // This needs to be modular, this function is specific to our code
                postResizeVizInitializationFunction();
            }
        },
        300);
    });
  }

  const vizDiv = divToScale;
  const iframe = vizDiv.querySelectorAll('iframe')[0];

  // Returns simple object with width and height properties
  const pageSpace = getPageSpaceWidthHeight();
  /*
  * The basics of the algorithm is figure out the ratio of the width and height of the div
  * compared to the width and height of the available visible space in the page
  * with the result being no part of the div pushing into the scrollable area.
  * One quirk is that the browser page layout engine still considers a scaled viz to take up its unscaled dimensions.
  */

  /*
  * A viz could come through with any particular proportions (even if you've set out guidelines, it will happen).
  * So we calculate the width and the height logic, and scale based on whichever one is larger difference
  */

  // Visible Browser Width and Height (not calculated from the page elements, but the physical browser space)
  const browserWidth = document.documentElement.clientWidth;
  const browserHeight = document.documentElement.clientHeight;

  /*
  * Adjustments for other elements on the page:
  * Most web pages have structural elements like top bars and toolbars that actual restrict the space available for your viz div.
  * When you are calculating width and height, you need to look for the properties that result in the actual
  * visible space. For example, both top margin and padding might be subtracted out of your scaling for height
  * or left margin and padding for the width. Or you might look at the size of the other elements themselves.
  * This section will be the most customized to your own situation.
  */

  // Width Logic
  // additionWidthMargin just assumes for some type of padding / margin on both side rather than exact fit
  // const additionalWidthMargin = 30;
  const effectiveWidth = pageSpace.width - additionalWidthMargin;

  // Height Logic
  // Additional margin accounts for lower boundary / padding/margin
  // const additionalHeightMargin = 60;
  const effectiveHeight = pageSpace.height - additionalHeightMargin;

  // Is the viz Width larger than the viewport?
  const vizScaleToWindowWidth = iframe.clientWidth / effectiveWidth;

  // Is the viz Height larger than the viewport?
  const vizScaleToWindowHeight = iframe.clientHeight / effectiveHeight;

  // Use the smaller scale factor
  let vizScaleToWindow = vizScaleToWindowHeight;
  if (vizScaleToWindowWidth > vizScaleToWindowHeight){
      vizScaleToWindow = vizScaleToWindowWidth;
  }

  const flipScale = 1 / vizScaleToWindow;

  // When scaling down, the scaling should happen to the left because the margins run out (auto) and the right side is the boundary
  //if (flipScale < 0.95) {

      /*
      * We scale it first based on the available space, and the proportion it is in
      */
      divToScale.style.transform = "scale(" + flipScale + ")";
      divToScale.style.transformOrigin = 'left top';

      /*
      * Then find the actual rendered space, and determine how space that leaves to the overall
      * available page space. Divide the extra by two,
      * then add the translate directive to the scale, which moves it along the x-axis
      */
      const clientRect = divToScale.getBoundingClientRect();
      const finalVizWidth = clientRect.width;
      const leftAdjust = (effectiveWidth - finalVizWidth) / 2;
      const leftAdjustPx = addPx(Math.floor(leftAdjust));
      divToScale.style.transform = "scale(" + flipScale + ") translate(" + leftAdjustPx + ", 0px)";
      //divToScale.style.transformOrigin = 'center top';
  //}
  // When scaling up, it makes sense to scale from the middle, because the viz gets recentered by the auto margins
  //else{
  //    divToScale.style.transform = "scale(" + flipScale + ")";
  //    divToScale.style.transformOrigin = 'left top';
  //}
}

module.exports = {
  adjustForWorksheetOrDashboard,
}
