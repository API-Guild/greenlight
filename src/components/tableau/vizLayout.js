/*
  ACKNOWLEDGEMENTS:
  Bryant Howell for his work documenting embedded Tableau responsiveness and scaling techniques at:
  https://tableauandbehold.com/2021/04/21/responsive-design-and-embedded-tableau-vizes-responsive_scaling_tableau-js/
  
  John Hegele for his work with TabScale: 
  https://gitlab.com/jhegele/tabscale

  Vitalie Maldur for inspiration on resize events:
  https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c
*/

const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

const vizLayout = () => {
  let width;
  let resizeTimeout;
  clearTimeout(resizeTimeout)
  resizeTimeout = setTimeout(width = getWidth(), 300);

  // breakpoints as defined by Tableau desktop's device layout designer & chrome's devtools
  // null values indicate window width
  const breakpoints = [
    {layout: 'mobile-s', device: 'phone', min: 0, max: 424},
    {layout: 'mobile-m', device: 'phone', min: 425, max: 767},
    {layout: 'mobile-l', device: 'phone', min: 768, max: 1023},
    {layout: 'tablet', device: 'tablet', min: 1024, max: 1279},
    {layout: 'desktop-s', device: 'desktop', min: 1280, max: 1365},
    {layout: 'desktop-m', device: 'desktop', min: 1366, max: 1919},
    {layout: 'desktop-l', device: 'desktop', min: 1920, max: 2279},
    {layout: 'widescreen', device: 'desktop', min: 2280, max: 2560},
    {layout: 'fullhd', device: 'desktop', min: 2561, max: null},
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

export default vizLayout;
