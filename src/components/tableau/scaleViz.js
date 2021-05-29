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
const removePx = (cssValue) => {
  return cssValue.split('px')[0]
}

// helper to add the 'px' ending back for CSS properties that need it
const addPx = (cssValue) => {
  // Remove any existing 'px' so that you can sanitize any value without worrying
  var strippedPx = cssValue.toString().split('px')[0];
  return strippedPx + "px";
}
/*
* End Helper Functions
*/

// You can't know sheet type (worksheet or dashboard) until the onFirstInteractive event fires
// This function lives separately to adjust the sizes of the iframe and surrounding div
const adjustForWorksheetOrDashboard = (e) => {
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
const whichDevice = (availableSpaceRatio) => {
  for (let i = 0; i < ratioBreakpoints.length; i++){
      if ( availableSpaceRatio >= ratioBreakpoints[i].minRatio) {
          return ratioBreakpoints[i].tableauDeviceName;
      }
  }
}
