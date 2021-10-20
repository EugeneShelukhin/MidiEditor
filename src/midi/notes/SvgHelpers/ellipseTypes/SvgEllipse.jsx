function SvgEllipse(props) {
  let { x, y } = props;
  return (
    <ellipse
      cx={x}
      cy={y}
      rx="5"
      ry="6.2"
      fill="black"
      transform={`rotate(45,${x},${y})`}
    />
  );
}

export default SvgEllipse;
