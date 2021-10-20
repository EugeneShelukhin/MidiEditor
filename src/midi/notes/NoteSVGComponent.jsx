import React from "react";
import SvgLine from "./SvgHelpers/SvgVertLine";
import NoteEllipses, { getYPosition } from "./NoteEllipses";
import NoteTails from "./NoteTails";

class NoteSVGComponent extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();

    let { minLineY, maxLineY } = this.getMinMaxYPosition(props.accord);
    this.state = { minLineY, maxLineY };
  }
  totalWidth = 27;
  totalHeight = 200;

  componentWillReceiveProps(nextProps) {
    let { minLineY, maxLineY } = this.getMinMaxYPosition(nextProps.accord);
    if (minLineY !== this.state.minLineY || maxLineY !== this.state.maxLineY) {
      this.setState({ minLineY, maxLineY });
    }
  }
  render() {
    let lineX = 9;
    let minlineHeight = 32;
    return (
      <div
        style={{
          width: this.totalWidth,
          height: this.totalHeight,
          marginTop: "-75px",
          marginLeft: "5px",
        }}
      >
        <svg viewBox={`0 0 ${this.totalWidth} ${this.totalHeight}`}>
          <NoteEllipses
            lineX={lineX}
            duration={this.props.duration}
            accord={this.props.accord}
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

  getMinMaxYPosition = (accord) => {
    let minLineY = null;
    let maxLineY = null;
    for (let a of accord) {
      let pos = getYPosition(a.octava, a.tone);
      if (minLineY === null || pos < minLineY) {
        minLineY = pos;
      }
      if (maxLineY === null || pos > maxLineY) {
        maxLineY = pos;
      }
    }
    return { minLineY, maxLineY };
  };
}
export default NoteSVGComponent;
