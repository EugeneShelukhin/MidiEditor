import React from "react";

class CanvasComponent extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(8, 10);
    ctx.lineTo(8, 43);
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    let radius = 4;
    let centerX = 5;
    let centerY = 44;
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(12, 39, radius, 0, 2 * Math.PI, false);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(5, 29, radius, 0, 2 * Math.PI, false);
    ctx.fill();
  }
  render() {
    return <canvas ref={this.canvasRef} width={20} height={200} />;
  }
}
export default CanvasComponent;
