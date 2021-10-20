import "./Bar.scss";
import Clef from "../clefs/Clef";
import TimeSignature from "../timeSignature/TimeSignature";
import SharpFlatPanel from "../sharpFlatPanel/SharpFlatPanel";
import NoteSVGComponent from "../notes/NoteSVGComponent";
import WholeNote from "../notes/NoteTypes/WholeNote";
import HalfNote from "../notes/NoteTypes/HalfNote";
import QuarterNote from "../notes/NoteTypes/QuarterNote";
import EighthNote from "../notes/NoteTypes/EighthNote";
import SixteenthNote from "../notes/NoteTypes/SixteenthNote";

function Bar(props) {
  return (
    <div className="bar">
      <div className="vertical-line"></div>
      <Clef type={props.clef} />
      <TimeSignature beatCount="2" beatLength="4" />
      <SharpFlatPanel />
      {props.data &&
        props.data.map((n, i) => (
          <NoteSVGComponent duration={n.duration} accord={n.accord} key={i} />
        ))}

      <WholeNote />
      <EighthNote />
      <SixteenthNote />
      <QuarterNote />
      <HalfNote />
    </div>
  );
}

export default Bar;
