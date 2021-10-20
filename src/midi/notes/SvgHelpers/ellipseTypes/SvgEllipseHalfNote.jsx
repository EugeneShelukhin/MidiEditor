function SvgEllipseHalfNote(props) {
  let { x, y } = props;
  return (
    <>
      <ellipse
        cx={x}
        cy={y}
        rx="4.5"
        ry="5.7"
        fill="none"
        stroke="black"
        stroke-width="1.5"
        transform={`rotate(45,${x},${y})`}
      />
      <ellipse
        cx={x}
        cy={y}
        rx="3"
        ry="5.7"
        fill="none"
        stroke="black"
        stroke-width="1.5"
        transform={`rotate(45,${x},${y})`}
      />
    </>
  );
}

export default SvgEllipseHalfNote;
