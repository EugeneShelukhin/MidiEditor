import "./NoteBase.scss";
import Note from "./Note";
import SharpFlatSign from "./SharpFlatSign";
import StokattoSign from "./StokattoSign";
import ExtraStaffLines from "./ExtraStaffLines";

function NoteBase(props) {
  let { octava, tone } = props;
  let lineHeight = 5;
  let startingPoint = 35;

  let notePosition = parseInt(octava) * 7 + parseInt(tone) - 1;

  let marginTop = startingPoint - lineHeight * notePosition;
  marginTop += "px";
  return (
    <div className={"note-base"} style={{ marginTop }}>
      <SharpFlatSign />
      <Note duration={props.duration} />
      <StokattoSign />
      <ExtraStaffLines octava={octava} tone={tone} />
    </div>
  );
}
export default NoteBase;
