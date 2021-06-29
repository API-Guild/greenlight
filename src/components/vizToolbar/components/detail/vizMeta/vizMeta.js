// These methods use promises that obtain metadata from embedded Tableau visualizations
// a viz, sheet or other Tableau object is passed as a parameter in the component that uses them

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
        throw new Error(`vizUrl cannot be obtained from provided viz`)
      }
    }
    catch(err) {
      reject(err);
    }
    resolve(url);
  });
}

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
    }
    catch(err) {
      reject(err);
    }
    resolve(wb);
  });
}

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

export const getSheetSize = (sheet) => {
  return new Promise((resolve, reject) => {
    let size;
    try {
      if (sheet === '' || !sheet) {
        throw new Error('invalid sheet provided, cannot get sheet size')
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

export const worksheetData = (sheet) => {
  return new Promise((resolve, reject) => {
    let dataTables = [];
    try {
      if (sheet === '' || !sheet) {
        throw new Error('invalid sheet provided, cannot get sheet data')
      }
      else {
        sheet.getDataSourcesAsync().then(
          tables => dataTables.push(tables),
          err => {throw new Error('dataTables.push(tables) could not be performed due to:', err)}
        )
      }
    }
    catch(err) {
      reject(err);
    }
    resolve(dataTables);
  });
}

export const getDashSheets = (dashboard) => {
  return new Promise((resolve, reject) => {
    let worksheets;
    try {
      if (dashboard.length === 0 || !dashboard) {
        throw new Error('')
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


