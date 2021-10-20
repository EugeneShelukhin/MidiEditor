const widthX = 5;

function SvgEllipse(props) {
  let { x, y, isRight } = props;

  if (isRight) {
    x = x + widthX * 2;
  }
  return (
    <ellipse
      cx={x}
      cy={y}
      rx={widthX}
      ry="6.2"
      fill="black"
      transform={`rotate(45,${x},${y})`}
    />
  );
}

export default SvgEllipse;
