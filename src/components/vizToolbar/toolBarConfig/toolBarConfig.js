import { 
  selectDivLight, 
  selectDivDark, 
  selectDivPrimary, 
  selectDivWarning, 
  selectDivInfo, 
  selectDivSuccess, 
  selectDivDanger, 
  selectDivLink 
} from "../vizToolbar.module.scss"

// finds matches between props.buttons and defaultButtons to render
// <Button/> components in <VizToolbar/> based on user selection
export const buttonList = (buttons, defaultButtons) => {
  const newArray = [];

  if (buttons === undefined || !Array.isArray(buttons)) {
    return defaultButtons;
  }
  else if (Array.isArray(buttons)) {
    // make everything lowercase
    const propArray = buttons.map((name) => name.toLowerCase());
    // check if the buttons array includes the button name declared in props
    defaultButtons.forEach(button => {
      if (propArray.includes(button.name.toLowerCase())) {
        newArray.push(button) 
      }
    })
  }
  else {
    console.error('Error: buttons prop must be an array!');
  }
  return newArray;
}

// finds matches between props.downloads and defaultDownloads to render
// <Download/> components in <VizToolbar/> based on user selection
export const downloadList = (options, defaultDownloads) => {
  const optionsArray = [];

  if (options === undefined || !Array.isArray(options)) {
    return defaultDownloads;
  }
  else if (Array.isArray(options)) {
    // make everything lowercase
    const propArray = options.map((name) => name.toLowerCase());
    // check if the options array includes the download name declared in props
    defaultDownloads.forEach(download => {
      if (propArray.includes(download.name.toLowerCase())) {
        optionsArray.push(download) 
      }
    })
  }
  else {
    console.error('Error: downloads prop must be an array!');
  }
  return optionsArray;
}

// sets colors for <VizToolBar> buttons and controls
// default = "is-primary"
export const colorSet = (color) => {
  let colorClass = 'is-primary';

  if (typeof color === 'string') {
    const colorSplit = color.split('-');
    if (colorSplit.length === 2) {
      colorClass = `is-${colorSplit[0]}`;
    }
    else {
      colorClass = `is-${color}`;
    }
  }
  return colorClass;
}

// sets outline for <VizToolBar> buttons and controls
// default = "is-outlined"
export const outlineSet = (outline) => {
  if (outline || outline === undefined) {
    return "is-outlined";
  }
  else {
    return '';
  }
}

// sets rounded for <VizToolBar> buttons and controls
// default = "is-rounded"
export const roundedSet = (rounded) => {
  if (rounded || rounded === undefined) {
    return "is-rounded";
  }
  else {
    return '';
  }
}

// sets background color for the download select control
export const selectBgSet = (color, outline) => {
  let selectBg = '';

  if (outline === undefined && (color === 'primary' || color === 'link' || color === undefined)) {
    return selectBg;
  }
  else if (outline === false && color === undefined) {
    selectBg = `has-background-primary`;
  }
  else if (outline === false && (color === 'primary' || color === 'link' || color === undefined)) {
    selectBg = `has-background-${color}`;
  }
  else if (outline === false && (color !== 'primary' || color !== 'link' || color !== undefined)) {
    selectBg = `has-background-${color}`;
  }

  return selectBg;
}

// sets text color for the download select control
export const selectTextSet = (color, outline) => {
  let selectText = '';

  if (outline === undefined && (color === 'primary' || color === 'link' || color === undefined)) {
    return selectText;
  }
  else if (outline === false) {
    if (color === 'warning' || color === 'primary' || color === 'link' || color === undefined) {
      selectText = `has-text-black`;
    }
    else {
      selectText = `has-text-white`;
    }
  }

  return selectText;
}

// sets arrow border color on select control
export const selectArrowSet = (color, outline) => {
  let selectArrow = `is-${color}`;

  if (outline === undefined || outline === true) {
    if (color === undefined || color === 'primary') {
      selectArrow = `is-primary ${selectDivPrimary}`;
    }
    else if (color === 'warning') {
      selectArrow = `is-${color} ${selectDivWarning}`;
    }
    else if (color === 'info') {
      selectArrow = `is-${color} ${selectDivInfo}`;
    }
    else if (color === 'success') {
      selectArrow = `is-${color} ${selectDivSuccess}`;
    }
    else if (color === 'danger') {
      selectArrow = `is-${color} ${selectDivDanger}`;
    }
    else if (color === 'link') {
      selectArrow = `is-${color} ${selectDivLink}`;
    }
  }
  else if (outline === false) {
    if (color === 'primary' || color === 'link' || color === 'warning') {
      selectArrow = `is-${color} ${selectDivDark}`;
    }
    else if (color === undefined) {
      selectArrow = `is-primary ${selectDivDark}`;
    }
    else {
      selectArrow = `is-${color} ${selectDivLight}`;
    }
  }

  return selectArrow;
}
