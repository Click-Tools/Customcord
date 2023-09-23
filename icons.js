import sharp from 'sharp';
import config from './config.js'
const outputDirectory = 'Icons/';

// Define the output image sizes and names
const imageSizes = [
  { width: 60, height: 60, name: 'EnmityIcon60x60@2x.png' },
  { width: 76, height: 76, name: 'EnmityIcon76x76@2x~ipad.png' },
  { width: 40, height: 40, name: 'EnmityIcon-Icon-20_Normal@2x.png' },
  { width: 120, height: 120, name: 'EnmityIcon-Icon-60_Normal@2x.png' },
  { width: 80, height: 80, name: 'EnmityIcon-Icon-Small_Normal@2x.png' },
  { width: 80, height: 80, name: 'EnmityIcon-Icon-Small-40_Normal@2x.png' },
];

// Process the input image and save different sized copies
async function processImage() {
  for (const size of imageSizes) {
    await sharp(config.logoPath)
      .resize(size.width, size.height)
      .toFile(`Icons/${size.name}`);
    console.log(`Created: ${outputDirectory}${size.name}`);
  }
}

processImage()
  .then(() => {
    console.log('All images processed successfully.');
  })
  .catch((err) => {
    console.error('An error occurred:', err);
  });