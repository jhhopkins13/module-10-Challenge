import { Svg, Path, Circle, Rect, Text } from 'svg-builder';

class LogoGenerator {
  constructor(text, textColor, shape, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shape = shape;
    this.shapeColor = shapeColor;
  }

  generateLogo() {
    const svg = new Svg(300, 200);

    if (this.shape === 'circle') {
      // Draw a circle 
      const circle = new Circle(150, 100, 50).attr('fill', this.shapeColor);
      svg.append(circle);
    } else if (this.shape === 'triangle') {
     // Draw a triangle
      const path = new Path().moveTo(100, 150).lineTo(200, 150).lineTo(150, 50).close().attr('fill', this.shapeColor);
      svg.append(path);
    } else if (this.shape === 'square') {
      // Draw a square
      const rect = new Rect(100, 50, 100, 100).attr('fill', this.shapeColor);
      svg.append(rect);
    }

    const text = new Svg.Text(this.text).attr('x', 150).attr('y', 130).attr('fill', this.textColor);
    svg.append(text);

    return svg.toString();
  }
}

module.exports = LogoGenerator;
