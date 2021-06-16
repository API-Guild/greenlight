import { 
  faUndoAlt, faRedoAlt, faHistory, faSyncAlt, faShareAlt, faInfoCircle, faPause 
} from '@fortawesome/free-solid-svg-icons'
import { selectDiv1, selectDiv2 } from "../components/download/download.module.css"

// array of supported buttons, all of them are displayed by default
const buttonsArray = [
  {name: "Undo", icon: faUndoAlt, function: () => {console.log("undo!")}},
  {name: "Redo", icon: faRedoAlt, function: () => {console.log("redo!")}},
  {name: "Reset", icon: faHistory, function: () => {console.log("reset!")}},
  {name: "Refresh", icon: faSyncAlt, function: () => {console.log("refresh!")}},
  {name: "Pause", icon: faPause, function: () => {console.log("pause!")}},
  {name: "Details", icon: faInfoCircle, function: () => {console.log("details!")}},
  {name: "Share", icon: faShareAlt, function: () => {console.log("share!")}},  
];

// finds matches between props.buttons and the local buttonsArray
// to render <Button/> components in the <VizToolbar/> component
export const buttonList = (buttons) => {
  const newArray = [];

  if (buttons === undefined || !Array.isArray(buttons)) {
    return buttonsArray;
  }
  else if (Array.isArray(buttons)) {
    // make everything lowercase
    const propArray = buttons.map((name) => name.toLowerCase());
    // check if the local array includes the button name declared in props
    buttonsArray.forEach(button => {
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

// array of supported downloads, all of them are displayed by default
const downloadArray = [
  {name: "PDF", function: () => {console.log("PDF!")}},
  {name: "Image", function: () => {console.log("image!")}},
  {name: "Data", function: () => {console.log("data!")}},
  {name: "CrossTab", function: () => {console.log("crosstab!")}},
  {name: "PowerPoint", function: () => {console.log("powerpoint!")}},
  {name: "Workbook", function: () => {console.log("workbook!")}},
];

// finds matches between props.downloads and the local downloadArray
// to render <Download/> components in the <VizToolbar/> component
export const downloadList = (options) => {
  const optionsArray = [];

  if (options === undefined) {
    return downloadArray;
  }
  else if (Array.isArray(options) || !Array.isArray(options)) {
    // make everything lowercase
    const propArray = options.map((name) => name.toLowerCase());
    // check if the local array includes the button name declared in props
    downloadArray.forEach(download => {
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

  if (outline === undefined && color === undefined) {
    selectArrow = `is-primary`;
  }
  else if (outline === false) {
    if (color === 'primary' || color === 'link' || color === 'warning') {
      selectArrow = `is-${color} ${selectDiv2}`;
    }
    else if (color === undefined) {
      selectArrow = `is-primary ${selectDiv2}`;
    }
    else {
      selectArrow = `is-${color} ${selectDiv1}`;
    }
  }

  return selectArrow;
}
