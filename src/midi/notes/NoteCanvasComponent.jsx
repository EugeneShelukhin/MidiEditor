import React from "react";
import { drawOval } from "./CanvasElements";

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
    ctx.moveTo(10, 0);
    ctx.lineTo(10, 44);
    ctx.lineWidth = 3;
    ctx.stroke();

    let centerX = 6;
    let centerY = 44;
    drawOval(ctx, centerX, centerY);
    drawOval(ctx, 14, 39);
    drawOval(ctx, centerX, 29);
  }
  render() {
    return <canvas ref={this.canvasRef} width={20} height={100} />;
  }
}
export default CanvasComponent;
