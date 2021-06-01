/*
  CREDITS:
  Bryant Howell for his work documenting embedded Tableau responsiveness and scaling techniques at:
  https://tableauandbehold.com/2021/04/21/responsive-design-and-embedded-tableau-vizes-responsive_scaling_tableau-js/
  
  John Hegele for his work with TabScale: 
  https://gitlab.com/jhegele/tabscale

  Vitalie Maldur for inspiration on resize events:
  https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c
*/

const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

const scaleViz = () => {
  let width;
  let resizeTimeout;
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(width = getWidth(), 150);

  // null values indicate window width
  const breakpoints = [
    {layout: 'mobile', device: 'phone', min: 0, max: 767},
    {layout: 'tablet', device: 'tablet', min: 768, max: 1024},
    {layout: 'desktop', device: 'desktop', min: 1025, max: 1216},
    {layout: 'widescreen', device: 'desktop', min: 1217, max: 1440},
    {layout: 'fullhd', device: 'default', min: 1441, max: null},
  ];

  let layout;
  let device;

  for (let i = 0; i < breakpoints.length; i++) {
    if (width >= breakpoints[i].min && (!breakpoints[i].max || width <= breakpoints[i].max)) {
      device = breakpoints[i].device;
      layout = breakpoints[i].layout;
      break;
    }
    else {
      device = 'default';
      layout = 'unknown';
    }
  }

  return ({
    width: width,
    device: device,
    layout: layout,
  });
}

export default scaleViz;
