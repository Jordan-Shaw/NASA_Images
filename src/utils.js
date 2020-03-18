exports.validateImages = imageData => {
  const num = imageData.length;
  return 0 < num
    ? { imageData: imageData, length: num, valid: true }
    : { imageData: undefined, length: 0, valid: false };
};
