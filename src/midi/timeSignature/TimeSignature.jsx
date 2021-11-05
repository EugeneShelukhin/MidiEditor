import "./TimeSignature.scss";
function TimeSignature(props) {
  let { beatCount, beatDuration } = props.timeSignature;
  beatDuration = Math.round(1 / beatDuration);

  return (
    <div className="time-signature">
      <div>{beatCount}</div>
      <div>{beatDuration}</div>
    </div>
  );
}

export default TimeSignature;
