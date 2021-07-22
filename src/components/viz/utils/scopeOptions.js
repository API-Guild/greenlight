// defines embed options with highest priority given to local props,
// then global props and if none are declared it uses default values
const scopeOptions = (locals, globals, defaults) => {
  // used to cycle through supported options via bracket notation
  const optionsList = [
    'layout', 
    'hideTabs', 
    'hideToolbar', 
    'fixedLayout',
  ];

  let embedOptions = {};

  // check for props, if none declared return early with default values
  if (!locals) {
    if (!globals) {
      console.log('no locals or globals declared!')
      return defaults;
    }
  } else {
    for (let i = 0; i < optionsList.length; i++) {
      let property = optionsList[i];
      // check local prop
      if (!locals.hasOwnProperty(property) || locals[property] === undefined) {
        // if local prop not declared check global prop
        if (!globals.hasOwnProperty(property) || globals[property] === undefined) {
          console.log('no local or global prop for: ', property, defaults[property])
          // if global prop not declared use default value
          embedOptions[property] = defaults[property];
        } else {
          console.log('global prop for: ', property, globals[property])
          // use global prop
          embedOptions[property] = globals[property];
        }
      } else {
        console.log('local prop for: ', property, locals[property])
        // use local prop
        embedOptions[property] = locals[property];
      }
    }
  }

  // check that the returned layout has desktop, tablet and phone properties
  const layoutCheck = embedOptions.layout;
  const undefinedSizes = {width: undefined, height: undefined};

  if (layoutCheck.desktop === undefined) {
    layoutCheck.desktop = undefinedSizes;
  }
  if (layoutCheck.tablet === undefined) {
    layoutCheck.tablet = undefinedSizes;
  }
  if (layoutCheck.phone === undefined) {
    layoutCheck.phone = undefinedSizes;
  }

  return embedOptions;
}

export default scopeOptions;
