const LogoGenerator = require('../src/logoGenerator');

describe('LogoGenerator', () => {
  describe('generateLogo', () => {
    it('should generate the SVG content for a circle logo with provided input', () => {
      const text = 'ABC';
      const textColor = '#FF0000'; // Red
      const shape = 'circle';
      const shapeColor = '#00FF00'; // Green
      const logoGenerator = new LogoGenerator(text, textColor, shape, shapeColor);

      const svgContent = logoGenerator.generateLogo();

      expect(svgContent).toContain('<circle');
      expect(svgContent).toContain('fill="#FF0000"');
      expect(svgContent).toContain('fill="#00FF00"');
      expect(svgContent).toContain('>ABC<');
    });

    it('should generate the SVG content for a triangle logo with provided input', () => {
     
      const text = 'XYZ';
      const textColor = '#0000FF'; // Blue
      const shape = 'triangle';
      const shapeColor = '#FFFF00'; // Yellow
      const logoGenerator = new LogoGenerator(text, textColor, shape, shapeColor);

      const svgContent = logoGenerator.generateLogo();

      expect(svgContent).toContain('<path');
      expect(svgContent).toContain('fill="#0000FF"');
      expect(svgContent).toContain('fill="#FFFF00"');
      expect(svgContent).toContain('>XYZ<');
    });

    it('should generate the SVG content for a square logo with provided input', () => {
    
      const text = 'Hello';
      const textColor = '#000000'; // Black
      const shape = 'square';
      const shapeColor = '#FFFFFF'; // White
      const logoGenerator = new LogoGenerator(text, textColor, shape, shapeColor);

      const svgContent = logoGenerator.generateLogo();

      expect(svgContent).toContain('<rect');
      expect(svgContent).toContain('fill="#000000"');
      expect(svgContent).toContain('fill="#FFFFFF"');
      expect(svgContent).toContain('>Hello<');
    });
  });
});
