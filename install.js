const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Setting up your Figmafolio project...');

// Create fonts directory
const fontsDir = path.join(__dirname, 'public', 'fonts');
if (!fs.existsSync(fontsDir)) {
  console.log('Creating fonts directory...');
  fs.mkdirSync(fontsDir, { recursive: true });
}

// Install dependencies
console.log('Installing dependencies...');
exec('npm install', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error installing dependencies: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
  }
  console.log(stdout);
  
  console.log('\n✅ Dependencies installed successfully!');
  console.log('\nNext steps:');
  console.log('1. Add the "Special Gothic Expanded One" font to the public/fonts directory');
  console.log('   or modify src/app/globals.css to use a different font');
  console.log('2. Run "npm run dev" to start the development server');
  console.log('3. Open http://localhost:3000 in your browser');
}); 