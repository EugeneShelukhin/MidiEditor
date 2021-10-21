import { toneHeight, do0Position, la1Position } from "./notePositionHelper";
import SvgHorizontLine from "./SvgHelpers/SvgHorizontLine";

function ExtraStaffLines(props) {
  let { min, max, x } = props;
  x = x - 1;
  let lineHeight = toneHeight * 2;
  let lines = [];
  if (min <= la1Position) {
    let current = la1Position;
    while (current >= min) {
      lines.push(current);
      current -= lineHeight;
    }
  }

  if (max >= do0Position) {
    let current = do0Position;
    while (current <= max) {
      lines.push(current);
      current += lineHeight;
    }
  }
  if (lines.length > 0) {
    return (
      <g>
        {lines.map((y) => (
          <SvgHorizontLine x={x} y={y} width={20} thickness={2} key={y} />
        ))}
      </g>
    );
  }
  return "";
}
export default ExtraStaffLines;
