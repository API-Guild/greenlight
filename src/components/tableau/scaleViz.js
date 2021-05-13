/*
  CREDITS:
  Thanks to Bryant Howell for his work documenting these methods at https://tableauandbehold.com
  https://tableauandbehold.com/2021/04/21/responsive-design-and-embedded-tableau-vizes-responsive_scaling_tableau-js/
  
  and thanks to John Hegele for his work with TabScale: https://gitlab.com/jhegele/tabscale
*/

// Real ratios are {phone:0.5635}, {tablet:0.75}, {desktop:1.33}
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
