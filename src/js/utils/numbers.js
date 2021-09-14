/**
 * @param {number} full from which calculates percentage
 * @param {number} part which is a part of full
 * @return {number} percentage part includes in full
 */
function getPercentage(full, part) {
  return (part / full) * 100;
}

function bytesToMb(bytes) {
  return bytes / 1048576;
}

function mbToBytes(mb) {
  return mb * 1048576;
}

export {mbToBytes, bytesToMb, getPercentage};
