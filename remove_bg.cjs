const Jimp = require('jimp');

async function removeBlackBackground() {
  console.log('Reading public/logo.png...');
  const image = await Jimp.read('public/logo.png');
  
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  console.log(`Image resolution: ${width}x${height}`);
  
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      const hex = image.getPixelColor(x, y);
      const rgba = Jimp.intToRGBA(hex);
      const { r, g, b } = rgba;
      
      const maxVal = Math.max(r, g, b);
      const minVal = Math.min(r, g, b);
      const colorDiff = maxVal - minVal;
      
      // Complete removal of dark/black background pixels
      if (maxVal < 55) {
        rgba.a = 0;
      } else if (maxVal < 90 && colorDiff < 25) {
        // Smooth anti-aliasing transition for dark background border edges
        const alpha = Math.floor(((maxVal - 55) / 35) * 255);
        rgba.a = Math.max(0, Math.min(255, alpha));
      }
      
      image.setPixelColor(Jimp.rgbaToInt(rgba.r, rgba.g, rgba.b, rgba.a), x, y);
    }
  }
  
  await image.writeAsync('public/logo.png');
  console.log('Success: Re-saved public/logo.png as a pure transparent PNG with zero black background!');
}

removeBlackBackground().catch(err => {
  console.error('Failed to remove background:', err);
  process.exit(1);
});
