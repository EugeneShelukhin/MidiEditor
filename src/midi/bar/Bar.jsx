import "./Bar.scss";
import Clef from "../clefs/Clef";
import TimeSignature from "../timeSignature/TimeSignature";
import SharpFlatPanel from "../sharpFlatPanel/SharpFlatPanel";
import NotesContainer from "../notes/NotesContainer";

function Bar(props) {
  return (
    <div className="bar">
      <div className="vertical-line"></div>
      <Clef type={props.clef} />
      <TimeSignature beatCount="2" beatLength="4" />
      <SharpFlatPanel />
      <NotesContainer data={props.data} />
    </div>
  );
}

export default Bar;
