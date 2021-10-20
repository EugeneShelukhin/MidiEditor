import React from "react";
import SvgLine from "./SvgHelpers/SvgVertLine";
import NoteEllipses from "./NoteEllipses";
import NoteTails from "./NoteTails";

class NoteSVGComponent extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = { minLineY: 0, maxLineY: 0 };
  }
  totalWidth = 24;
  totalHeight = 200;
  render() {
    let lineX = 9;
    let minlineHeight = 32;
    return (
      <div
        style={{
          width: this.totalWidth,
          height: this.totalHeight,
          marginTop: "-75px",
        }}
      >
        <svg viewBox={`0 0 ${this.totalWidth} ${this.totalHeight}`}>
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
          {this.props.duration !== 1 ? (
            <SvgLine
              x1={lineX}
              y1={this.state.minLineY - minlineHeight}
              y2={this.state.maxLineY}
              width={2.5}
            />
          ) : (
            ""
          )}

          <NoteTails
            duration={this.props.duration}
            x={lineX + 2}
            y={this.state.minLineY - minlineHeight}
          />
        </svg>
      </div>
    );
  }
}
export default NoteSVGComponent;
