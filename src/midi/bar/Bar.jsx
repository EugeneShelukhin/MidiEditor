import "./Bar.scss";
import Clef from "../clefs/Clef";
import TimeSignature from "../timeSignature/TimeSignature";
import SharpFlatPanel from "../sharpFlatPanel/SharpFlatPanel";
import NoteSVGComponent from "../notes/NoteSVGComponent";
import Staff from "../staff/Staff";

function Bar(props) {
  return (
    <div className="bar">
      <div className="vertical-line"></div>
      <Staff />
      <Clef type={props.clef} />
      <TimeSignature beatCount="2" beatLength="4" />
      <SharpFlatPanel />
      {props.data &&
        props.data.map((n, i) => (
          <NoteSVGComponent duration={n.duration} accord={n.accord} key={i} />
        ))}
    </div>
  );
}

export default Bar;
