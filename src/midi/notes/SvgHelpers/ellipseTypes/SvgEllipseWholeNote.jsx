function SvgEllipseWholeNote(props) {
  let { x, y } = props;
  return (
    <>
      <ellipse
        cx={x + 1}
        cy={y}
        rx="6"
        ry="5"
        fill="none"
        stroke="black"
        stroke-width="1.5"
      />
      <ellipse
        cx={x + 1}
        cy={y}
        rx="6"
        ry="3.8"
        fill="none"
        stroke="black"
        stroke-width="1.5"
      />
    </>
  );
}

export default SvgEllipseWholeNote;
