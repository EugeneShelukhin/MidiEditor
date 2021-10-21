function SvgHorizontLine(props) {
  let { x, y, width, thickness } = props;
  x = x - width / 2;
  y = y - thickness / 2;
  if (props.duration === 1) {
    return "";
  }
  return (
    <path
      d={`M ${x} ${y} 
      H ${x + width} 
      V ${y + thickness}
      H ${x} 
      Z`}
    />
  );
}
export default SvgHorizontLine;
