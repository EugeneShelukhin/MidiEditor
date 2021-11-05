import {
  toneHeight,
  lowExtraLineMargin,
  highExtraLineMargin,
} from "./notePositionHelper";
import SvgHorizontLine from "./SvgHelpers/SvgHorizontLine";

function ExtraStaffLines(props) {
  let { min, max, x } = props;
  x = x - 1;
  let lineHeight = toneHeight * 2;
  let lines = [];
  if (min <= highExtraLineMargin) {
    let current = highExtraLineMargin;
    while (current >= min) {
      lines.push(current);
      current -= lineHeight;
    }
  }

  if (max >= lowExtraLineMargin) {
    let current = lowExtraLineMargin;
    while (current <= max) {
      lines.push(current);
      current += lineHeight;
    }
  }
  if (lines.length > 0) {
    return (
      <g>
        {lines.map((y) => (
          <SvgHorizontLine x={x} y={y} width={20} thickness={1} key={y} />
        ))}
      </g>
    );
  }
  return "";
}
export default ExtraStaffLines;
