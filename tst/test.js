const fs = require('fs');
const LogoGenerator = require('../src/LogoGenerator');
const mockInput = require('./test-utils/mockInput');

describe('LogoGenerator', () => {
  let logoGenerator;

  beforeEach(() => {
    logoGenerator = new LogoGenerator();
    // Provide mock input for testing
    mockInput(['ABC', 'blue', 'circle', 'red']);
  });

  it('should set user input correctly', () => {
    expect(logoGenerator.text).toBe('ABC');
    expect(logoGenerator.textColor).toBe('blue');
    expect(logoGenerator.shape).toBe('circle');
    expect(logoGenerator.shapeColor).toBe('red');
  });

  it('should generate the correct SVG code', () => {
    const expectedSVG = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="red" />
  <text x="50%" y="50%" font-size="48" text-anchor="middle" fill="blue">ABC</text>
</svg>
`;

    logoGenerator.generateSVG();

    const generatedSVG = fs.readFileSync('logo.svg', 'utf8');
    expect(generatedSVG).toBe(expectedSVG);
  });
});
