import "./TimeSignature.scss";
function TimeSignature(props) {
  return (
    <div className="time-signature">
      <div>{props.beatCount}</div>
      <div>{props.beatLength}</div>
    </div>
  );
}

export default TimeSignature;
