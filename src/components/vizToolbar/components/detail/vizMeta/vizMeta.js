// These methods use promises that obtain metadata from embedded Tableau visualizations
// a viz, sheet or other Tableau object is passed as a parameter in the component that uses them

// returns a URL for a provided sheet
export const getVizUrl = (viz) => {
  return new Promise((resolve, reject) => {
    let url;
    try {
      if (typeof viz !== 'object' || !viz) {
        throw new Error('invalid viz provided, cannot get workbook URL');
      }
      else {
        url = viz.getUrl();
      }
      if (!url) {
        throw new Error(`vizUrl cannot be obtained from provided viz`);
      }
    }
    catch(err) {
      reject(err);
    }
    resolve(url);
  });
}

// returns a workbook class object for a provided sheet
export const getVizWb = (viz) => {
  return new Promise((resolve, reject) => {
    let wb;
    try {
      if (typeof viz !== 'object' || !viz) {
        throw new Error('invalid viz provided, cannot get workbook metadata');
      }
      else {
        wb = viz.getWorkbook();
      }
      if (!wb) {
        throw new Error(`Workbook cannot be obtained from provided viz`);
      }
    }
    catch(err) {
      reject(err);
    }
    resolve(wb);
  });
}

// returns the sheet type ('Dashboard', 'Worksheet', 'Story')
export const getSheetType = (sheet) => {
  return new Promise((resolve, reject) => {
    let type;
    let formattedType;
    try {
      if (sheet === '' || !sheet) {
        throw new Error('invalid sheet provided, cannot get sheet type');
      }
      else {
        type = sheet.getSheetType();
        formattedType = type.charAt(0).toUpperCase() + type.slice(1);
      }
    }
    catch(err) {
      reject(err);
    }
    resolve(formattedType);
  });
}

// returns the formatted name of a provided sheet
export const getSheetName = (sheet) => {
  return new Promise((resolve, reject) => {
    let name;
    let formattedName;
    try {
      if (sheet === '' || !sheet) {
        throw new Error('invalid sheet provided, cannot get sheet name');
      }
      else {
        name = sheet.getName();
        formattedName = name.charAt(0).toUpperCase() + name.slice(1);
      }
    }
    catch(err) {
      reject(err);
    }
    resolve(formattedName);
  })
}

// returns the size object for a provided sheet
export const getSheetSize = (sheet) => {
  return new Promise((resolve, reject) => {
    let size;
    try {
      if (sheet === '' || !sheet) {
        throw new Error('invalid sheet provided, cannot get sheet size');
      }
      else {
        size = sheet.getSize();
        size.behavior = size.behavior.charAt(0).toUpperCase() + size.behavior.slice(1);
      }
    }
    catch(err) {
      reject(err);
    }
    resolve(size);
  });
}

// returns datasources for a provided sheet
export const worksheetData = (sheet) => {
  return new Promise((resolve, reject) => {
    try {
      if (sheet === '' || !sheet) {
        throw new Error('invalid sheet provided, cannot get sheet data');
      }
      else {
        sheet.getDataSourcesAsync().then(
          tables => resolve(tables),
          err => {throw new Error('dataTables.push(tables) could not be performed due to:', err);}
        )
      }
    }
    catch(err) {
      reject(err);
    }
  });
}

// returns worksheets displayed on a provided dashboard class object
export const getDashSheets = (dashboard) => {
  return new Promise((resolve, reject) => {
    let worksheets;
    try {
      if (dashboard.length === 0 || !dashboard) {
        throw new Error('cannot obtain worksheets from invalid dashboard');
      }
      else {
        worksheets = dashboard.getWorksheets();
      }
    }
    catch(err) {
      reject(err);
    }
    resolve(worksheets);
  });
}

// returns a StoryPointInfo class from provided Sheet class
export const getStory = (sheet) => {
  return new Promise((resolve, reject) => {
    try {
      if (!sheet) {
        throw new Error('cannot obtain storypoints from invalid sheet');
      }
      else {
        resolve(sheet.getStoryPointsInfo());
      }
    }
    catch(err) {
      reject(err);
    }
  });
}

// returns the active story point from a provided Sheet class
export const getActiveStory = (sheet) => {
  return new Promise((resolve, reject) => {
    try {
      if (!sheet) {
        throw new Error('cannot obtain storypoint from invalid sheet');
      }
      else {
        resolve(sheet.getActiveStoryPoint());
      }
    }
    catch(err) {
      reject(err);
    }
  });
}

// returns the visualization embedded on an active Story Sheet
export const getStorySheet = (storypoint) => {
  return new Promise((resolve, reject) => {
    try {
      if (!storypoint) {
        throw new Error('cannot obtain current sheet from invalid story');
      }
      else {
        resolve(storypoint.getContainedSheet());
      }
    }
    catch(err) {
      reject(err);
    }
  });
}

