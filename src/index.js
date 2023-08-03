const LogoGenerator = require('./LogoGenerator');

async function runLogoGenerator() {
  const logoGenerator = new LogoGenerator();
  await logoGenerator.promptUser();
  logoGenerator.generateSVG();
  console.log('Generated logo.svg');
}

runLogoGenerator();
