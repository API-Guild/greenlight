/*
  CREDITS:
  Thanks to Bryant Howell for his work documenting these methods at:
  https://tableauandbehold.com/2021/04/21/responsive-design-and-embedded-tableau-vizes-responsive_scaling_tableau-js/
  
  and thanks to John Hegele for his work with TabScale: 
  https://gitlab.com/jhegele/tabscale
*/

// exports Tableau component prop to be used on this script
import { vizUrl } from './tableau';

let vizObj;
// Unique ID for the parent <div> that determines the space available for the Tableau viz
const outerDivId = 'outerDiv-' + Math.random().toString(36).substr(2, 10);
// Unique ID for the embedding <div>
const vizDivId = "vizDiv-" + Math.random().toString(36).substr(2, 10);

const breakpoints = [
  {device: 'desktop', minWidth: 1024, maxWidth: null},
  {device: 'tablet', minWidth: 769, maxWidth: 1023},
  {device: 'phone', minWidth: null, maxWidth: 768},
]

const browserSize = () => {
  const browserWidth = document.documentElement.clientWidth;
  const browserHeight = document.documentElement.clientHeight;
  return { browserWidth, browserHeight };
}

// Options object to embed visualizations
let vizOptions = {
  device: "default",
  onFirstVizSizeKnown: (event) => {
    resizeVizContainerDiv(event)
  },
  onFirstInteractive: (event) => {
    adjustForWorksheetOrDashboard(event)
  }
};
