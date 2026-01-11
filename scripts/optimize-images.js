const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration for image optimization
const config = {
  // Hero images to optimize
  heroImages: [
    'harvey-portrait-transparente.png',
    'HC_SOLO.png',
    'TORITO PORTADA.png',
    'CASCO.png',
    'NÚMERO 1.png'
  ],

  // Sizes for responsive images
  sizes: [
    { name: 'mobile', width: 480, quality: 80 },
    { name: 'tablet', width: 768, quality: 85 },
    { name: 'desktop', width: 1200, quality: 90 }
  ],

  // WebP quality setting
  webpQuality: 85,

  // Paths
  inputDir: path.join(__dirname, '../public/images/inicio'),
  outputDir: path.join(__dirname, '../public/images/inicio/optimized')
};

// Create output directory if it doesn't exist
if (!fs.existsSync(config.outputDir)) {
  fs.mkdirSync(config.outputDir, { recursive: true });
  console.log('✅ Created output directory:', config.outputDir);
}

async function optimizeImage(imageName) {
  const inputPath = path.join(config.inputDir, imageName);
  const baseName = path.parse(imageName).name;

  console.log(`\n🖼️  Processing: ${imageName}`);

  try {
    // Get original file size
    const originalStats = fs.statSync(inputPath);
    const originalSizeKB = (originalStats.size / 1024).toFixed(2);
    console.log(`   Original size: ${originalSizeKB} KB`);

    // Load the image
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Generate WebP versions at different sizes
    for (const size of config.sizes) {
      const outputFileName = `${baseName}-${size.name}.webp`;
      const outputPath = path.join(config.outputDir, outputFileName);

      await image
        .clone()
        .resize(size.width, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: size.quality })
        .toFile(outputPath);

      const outputStats = fs.statSync(outputPath);
      const outputSizeKB = (outputStats.size / 1024).toFixed(2);
      const savings = ((1 - outputStats.size / originalStats.size) * 100).toFixed(1);

      console.log(`   ✓ ${size.name.padEnd(8)} (${size.width}px): ${outputSizeKB} KB (${savings}% smaller)`);
    }

    // Also create a full-size WebP version
    const fullSizeOutput = path.join(config.outputDir, `${baseName}.webp`);
    await image
      .clone()
      .webp({ quality: config.webpQuality })
      .toFile(fullSizeOutput);

    const fullSizeStats = fs.statSync(fullSizeOutput);
    const fullSizeKB = (fullSizeStats.size / 1024).toFixed(2);
    const fullSizeSavings = ((1 - fullSizeStats.size / originalStats.size) * 100).toFixed(1);

    console.log(`   ✓ full-size (${metadata.width}px): ${fullSizeKB} KB (${fullSizeSavings}% smaller)`);

  } catch (error) {
    console.error(`   ❌ Error processing ${imageName}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('🚀 Starting image optimization...\n');
  console.log('━'.repeat(60));

  for (const imageName of config.heroImages) {
    await optimizeImage(imageName);
  }

  console.log('\n' + '━'.repeat(60));
  console.log('✅ Image optimization complete!');
  console.log(`📁 Optimized images saved to: ${config.outputDir}`);
}

// Run the optimization
optimizeAllImages().catch(console.error);
