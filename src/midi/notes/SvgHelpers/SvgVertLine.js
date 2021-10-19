function SvgVertLine(props) {
  let { x1, y1, y2, width } = props;
  return <path d={`M ${x1} ${y1} V ${y2} H ${x1 + width} V ${y1} Z`} />;
}
export default SvgVertLine;
