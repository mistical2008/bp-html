/**
 * @description Promised timeout
 * @param {Number} ms milliseconds
 */
const delay = async ms => new Promise(r => setTimeout(r, ms));

export {delay}
