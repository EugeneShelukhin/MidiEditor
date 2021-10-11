import "./Bar.scss";
import Clef from "../clefs/Clef";
import TimeSignature from "../timeSignature/TimeSignature";

function Bar(props) {
  return (
    <div className="bar">
      <div className="vertical-line"></div>
      <Clef type={props.clef} />
      <TimeSignature beatCount="2" beatLength="4" />
    </div>
  );
}

export default Bar;
