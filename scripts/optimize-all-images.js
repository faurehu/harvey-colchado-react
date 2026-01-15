const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration for comprehensive image optimization
const config = {
  // Image groups to optimize
  imageGroups: [
    {
      name: 'Casos Emblemáticos',
      inputDir: path.join(__dirname, '../public/images/inicio'),
      outputDir: path.join(__dirname, '../public/images/inicio/optimized'),
      images: [
        'caso-emblematico-1.png',
        'caso-emblematico-2.png',
        'caso-emblematico-3.png',
        'caso-emblematico-4.png'
      ]
    },
    {
      name: 'Biografía',
      inputDir: path.join(__dirname, '../public/images/biografia'),
      outputDir: path.join(__dirname, '../public/images/biografia/optimized'),
      images: [
        'bio1.png',
        'bio2.png',
        'bio3.png',
        'bio4.png',
        'bio5.png',
        'bio6.jpg',
        'bio7.jpg',
        'bio8.jpg'
      ]
    },
    {
      name: 'Propuestas Carousel',
      inputDir: path.join(__dirname, '../public/images/propuestas/carrusell'),
      outputDir: path.join(__dirname, '../public/images/propuestas/carrusell/optimized'),
      images: [
        'carrusel_1.png',
        'carrusel_2.png',
        'carrusel_3.png',
        'carrusel_7.png',
        'carrusel_8.png',
        'carrusel_9.png',
        'carrusel_10.png'
      ]
    },
    {
      name: 'Propuestas Background',
      inputDir: path.join(__dirname, '../public/images/propuestas'),
      outputDir: path.join(__dirname, '../public/images/propuestas/optimized'),
      images: [
        'propuestas_fondo.png'
      ]
    }
  ],

  // Sizes for responsive images
  sizes: [
    { name: 'mobile', width: 480, quality: 80 },
    { name: 'tablet', width: 768, quality: 85 },
    { name: 'desktop', width: 1200, quality: 90 }
  ],

  // WebP quality setting
  webpQuality: 85
};

async function optimizeImage(imageName, inputDir, outputDir) {
  const inputPath = path.join(inputDir, imageName);
  const baseName = path.parse(imageName).name;
  const ext = path.parse(imageName).ext;

  // Skip if file doesn't exist
  if (!fs.existsSync(inputPath)) {
    console.log(`   ⚠️  File not found: ${imageName}`);
    return;
  }

  console.log(`\n🖼️  Processing: ${imageName}`);

  try {
    // Get original file size
    const originalStats = fs.statSync(inputPath);
    const originalSizeKB = (originalStats.size / 1024).toFixed(2);
    const originalSizeMB = (originalStats.size / 1024 / 1024).toFixed(2);
    console.log(`   Original size: ${originalSizeMB} MB (${originalSizeKB} KB)`);

    // Load the image
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    let totalSavings = 0;

    // Generate WebP versions at different sizes
    for (const size of config.sizes) {
      const outputFileName = `${baseName}-${size.name}.webp`;
      const outputPath = path.join(outputDir, outputFileName);

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
      totalSavings += parseFloat(savings);

      console.log(`   ✓ ${size.name.padEnd(8)} (${size.width}px): ${outputSizeKB} KB (${savings}% smaller)`);
    }

    // Also create a full-size WebP version
    const fullSizeOutput = path.join(outputDir, `${baseName}.webp`);
    await image
      .clone()
      .webp({ quality: config.webpQuality })
      .toFile(fullSizeOutput);

    const fullSizeStats = fs.statSync(fullSizeOutput);
    const fullSizeKB = (fullSizeStats.size / 1024).toFixed(2);
    const fullSizeMB = (fullSizeStats.size / 1024 / 1024).toFixed(2);
    const fullSizeSavings = ((1 - fullSizeStats.size / originalStats.size) * 100).toFixed(1);

    console.log(`   ✓ full-size (${metadata.width}px): ${fullSizeMB} MB / ${fullSizeKB} KB (${fullSizeSavings}% smaller)`);

    return {
      original: originalStats.size,
      optimized: fullSizeStats.size,
      savings: fullSizeSavings
    };

  } catch (error) {
    console.error(`   ❌ Error processing ${imageName}:`, error.message);
    return null;
  }
}

async function optimizeImageGroup(group) {
  console.log('\n' + '═'.repeat(70));
  console.log(`📂 ${group.name.toUpperCase()}`);
  console.log('═'.repeat(70));

  // Create output directory if it doesn't exist
  if (!fs.existsSync(group.outputDir)) {
    fs.mkdirSync(group.outputDir, { recursive: true });
    console.log(`✅ Created output directory: ${group.outputDir}`);
  }

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let processedCount = 0;

  for (const imageName of group.images) {
    const result = await optimizeImage(imageName, group.inputDir, group.outputDir);
    if (result) {
      totalOriginalSize += result.original;
      totalOptimizedSize += result.optimized;
      processedCount++;
    }
  }

  // Summary for this group
  if (processedCount > 0) {
    const totalOriginalMB = (totalOriginalSize / 1024 / 1024).toFixed(2);
    const totalOptimizedMB = (totalOptimizedSize / 1024 / 1024).toFixed(2);
    const totalSavings = ((1 - totalOptimizedSize / totalOriginalSize) * 100).toFixed(1);

    console.log('\n' + '─'.repeat(70));
    console.log(`📊 ${group.name} Summary:`);
    console.log(`   Images processed: ${processedCount}`);
    console.log(`   Original total: ${totalOriginalMB} MB`);
    console.log(`   Optimized total: ${totalOptimizedMB} MB`);
    console.log(`   Total savings: ${totalSavings}%`);
    console.log('─'.repeat(70));
  }

  return {
    totalOriginalSize,
    totalOptimizedSize,
    processedCount
  };
}

async function optimizeAllImages() {
  console.log('🚀 Starting comprehensive image optimization...\n');

  const startTime = Date.now();
  let grandTotalOriginal = 0;
  let grandTotalOptimized = 0;
  let grandTotalProcessed = 0;

  for (const group of config.imageGroups) {
    const result = await optimizeImageGroup(group);
    grandTotalOriginal += result.totalOriginalSize;
    grandTotalOptimized += result.totalOptimizedSize;
    grandTotalProcessed += result.processedCount;
  }

  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);

  // Grand summary
  console.log('\n' + '═'.repeat(70));
  console.log('🎉 OPTIMIZATION COMPLETE!');
  console.log('═'.repeat(70));

  const grandOriginalMB = (grandTotalOriginal / 1024 / 1024).toFixed(2);
  const grandOptimizedMB = (grandTotalOptimized / 1024 / 1024).toFixed(2);
  const grandSavings = ((1 - grandTotalOptimized / grandTotalOriginal) * 100).toFixed(1);
  const savedMB = (grandOriginalMB - grandOptimizedMB).toFixed(2);

  console.log(`📊 Total images processed: ${grandTotalProcessed}`);
  console.log(`📦 Original total size: ${grandOriginalMB} MB`);
  console.log(`📦 Optimized total size: ${grandOptimizedMB} MB`);
  console.log(`💾 Total space saved: ${savedMB} MB`);
  console.log(`📉 Overall savings: ${grandSavings}%`);
  console.log(`⏱️  Processing time: ${duration} seconds`);
  console.log('═'.repeat(70));
  console.log('\n✅ All images optimized successfully!');
}

// Run the optimization
optimizeAllImages().catch(console.error);
