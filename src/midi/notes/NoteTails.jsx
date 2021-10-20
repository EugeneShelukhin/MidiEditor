import EighthTail from "./SvgHelpers/tails/EighthTail";
import SixteenthTail from "./SvgHelpers/tails/SixteenthTail";

function NoteTails(props) {
  let { duration, x, y } = props;
  if (duration === 8) return <EighthTail x={x} y={y} />;
  if (duration === 16) return <SixteenthTail x={x} y={y} />;
  return "";
}

export default NoteTails;
