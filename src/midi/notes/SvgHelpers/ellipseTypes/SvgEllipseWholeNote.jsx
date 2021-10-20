const widthX = 6.2;
function SvgEllipseWholeNote(props) {
  let { x, y, isRight } = props;
  if (isRight) {
    x = x + widthX * 2;
  }
  x = x + 1;

  return (
    <g>
      <ellipse
        cx={x}
        cy={y}
        rx={widthX}
        ry="5"
        fill="none"
        stroke="black"
        strokeWidth="1.5"
      />
      <g transform={`rotate(-30,${x},${y})`}>
        <ellipse
          cx={x}
          cy={y}
          rx={0.75 * widthX}
          ry="5.1"
          fill="none"
          stroke="black"
          strokeWidth="1.5"
        />
        <ellipse
          cx={x}
          cy={y}
          rx={0.65 * widthX}
          ry="5.1"
          fill="none"
          stroke="black"
          strokeWidth="1.5"
        />
      </g>
    </g>
  );
}

export default SvgEllipseWholeNote;
