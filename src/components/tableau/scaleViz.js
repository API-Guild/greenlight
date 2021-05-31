/*
  CREDITS:
  Thanks to Bryant Howell for his work documenting these methods at:
  https://tableauandbehold.com/2021/04/21/responsive-design-and-embedded-tableau-vizes-responsive_scaling_tableau-js/
  
  and thanks to John Hegele for his work with TabScale: 
  https://gitlab.com/jhegele/tabscale
*/

import { useBreakpoints, useCurrentWidth } from 'react-breakpoints-hook';

export function useScaleViz() {
  let width = useCurrentWidth();

  // null values indicate window width
  const { mobile, tablet, desktop, widescreen, fullhd } = useBreakpoints({
    mobile: {device: 'phone', min: 0, max: 768},
    tablet: {device: 'tablet', min: 769, max: 1023},
    desktop: {device: 'desktop', min: 1024, max: 1215},
    widescreen: {device: 'default', min: 1216, max: 1407},
    fullhd: {device: 'default', min: 1408, max: null},
  });

  return width;
}
