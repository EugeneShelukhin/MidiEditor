import "./MidiLine.scss";
import Bars from "./bar/Bars";
import Staff from "./staff/Staff";

function MidiLine(props) {
  return (
    <div className="midi-line">
      <Staff />
      <div className="items">
        <Bars data={props.data} />
      </div>
    </div>
  );
}

export default MidiLine;
