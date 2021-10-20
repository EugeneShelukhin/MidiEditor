const widthX = 4.5;

function SvgEllipseHalfNote(props) {
  let { x, y, isRight } = props;
  if (isRight) {
    x = x + widthX * 2;
  }
  return (
    <>
      <ellipse
        cx={x}
        cy={y}
        rx={widthX}
        ry="5.7"
        fill="none"
        stroke="black"
        strokeWidth="1.5"
        transform={`rotate(45,${x},${y})`}
      />
      <ellipse
        cx={x}
        cy={y}
        rx={widthX - 0.25 * widthX}
        ry="5.7"
        fill="none"
        stroke="black"
        strokeWidth="1.5"
        transform={`rotate(45,${x},${y})`}
      />
    </>
  );
}

export default SvgEllipseHalfNote;
