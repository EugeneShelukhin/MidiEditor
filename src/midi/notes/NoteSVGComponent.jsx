import React from "react";
import SvgLine from "./SvgHelpers/SvgVertLine";
import EighthTail from "./SvgHelpers/EighthTail";
import NoteEllipses from "./NoteEllipses";
//import SixteenthTail from "./SvgHelpers/SixteenthTail";
class NoteSVGComponent extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = { minLineY: 0, maxLineY: 0 };
  }

  render() {
    let totalWidth = 24;
    let totalHeight = 200;

    let lineX = 9;
    return (
      <div
        style={{
          width: totalWidth,
          height: totalHeight,
          marginTop: "-75px",
        }}
      >
        <svg viewBox={`0 0 ${totalWidth} ${totalHeight}`}>
          <NoteEllipses
            lineX={lineX}
            duration={this.props.duration}
            accord={this.props.accord}
            setMinMaxY={(min, max) => {
              if (min !== this.state.minLineY || max !== this.state.maxLineY) {
                this.setState({
                  minLineY: min,
                  maxLineY: max,
                });
              }
            }}
          />
          <SvgLine
            x1={lineX}
            y1={this.state.minLineY - 40}
            y2={this.state.maxLineY}
            width={2.5}
          />
          <EighthTail x={lineX + 2} y={this.state.minLineY - 40} />
        </svg>
      </div>
    );
  }
}
export default NoteSVGComponent;
