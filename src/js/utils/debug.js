function printFormData(formData) {
  for (let field of formData.entries()) {
    console.log(field);
  }
}

/**
* @description logs current file loaded while NODE_ENV === 'development'
* @param {string} optional file purpose description. logged to console.
*/
function devLogEntryLoaded(filePurpose = 'Entry') {
  if (process.env.NODE_ENV === "development") {
    console.log(`${filePurpose} loaded: `, __filename);
  }
}

export {printFormData, devLogEntryLoaded};
