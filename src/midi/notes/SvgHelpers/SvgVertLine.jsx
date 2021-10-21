function SvgVertLine(props) {
  let { x1, y1, y2, width } = props;

  if (props.duration === 1) {
    return "";
  }
  return (
    <path
      d={`M ${x1} ${y1} V ${y2 - width * 2} L ${x1 + width} ${y2} V ${y1} Z`}
    />
  );
}
export default SvgVertLine;
