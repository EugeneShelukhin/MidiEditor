import React from "react";
import SvgVertLine from "./SvgHelpers/SvgVertLine";
import NoteEllipses from "./NoteEllipses";
import { getMinMaxYPosition, vertLinePositionX } from "./notePositionHelper";
import NoteTails from "./NoteTails";
import ExtraStaffLines from "./ExtraStaffLines";

class NoteSVGComponent extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();

    let { minLineY, maxLineY } = getMinMaxYPosition(props.accord);
    this.state = { minLineY, maxLineY };
  }
  totalWidth = 37;
  totalHeight = 200;

  componentWillReceiveProps(nextProps) {
    let { minLineY, maxLineY } = getMinMaxYPosition(nextProps.accord);
    if (minLineY !== this.state.minLineY || maxLineY !== this.state.maxLineY) {
      this.setState({ minLineY, maxLineY });
    }
  }
  render() {
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
            lineX={vertLinePositionX}
            duration={this.props.duration}
            accord={this.props.accord}
          />

          <SvgVertLine
            x1={vertLinePositionX}
            y1={this.state.minLineY - minlineHeight}
            y2={this.state.maxLineY}
            duration={this.props.duration}
            width={2.5}
          />
          <NoteTails
            duration={this.props.duration}
            x={vertLinePositionX + 2}
            y={this.state.minLineY - minlineHeight}
          />
          <ExtraStaffLines
            min={this.state.minLineY}
            max={this.state.maxLineY}
            x={vertLinePositionX}
          />
        </svg>
      </div>
    );
  }
}
export default NoteSVGComponent;
