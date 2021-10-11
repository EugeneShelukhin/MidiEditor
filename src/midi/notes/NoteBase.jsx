import "./NoteBase.scss";
import Note from "./Note";
import SharpFlatSign from "./SharpFlatSign";
import StokattoSign from "./StokattoSign";

function NoteBase(props) {
  let { octava, tone } = props;

  let marginTop = 35;
  marginTop -= 35 * octava;
  marginTop -= 5 * (tone - 1);
  marginTop += "px";
  return (
    <div className={"note-base"} style={{ marginTop }}>
      <SharpFlatSign />
      <Note duration={props.duration} />
      <StokattoSign />
    </div>
  );
}
export default NoteBase;
