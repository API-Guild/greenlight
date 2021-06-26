export const getVizUrl = (viz) => {
  return new Promise((resolve, reject) => {
    let url;
    try {
      url = viz.getUrl();
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
      wb = viz.getWorkbook();
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
        throw new Error('invalid sheet provided, cannot get sheet type!');
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


