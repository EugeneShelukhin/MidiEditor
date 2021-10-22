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
      {props.isBarinfoChanged ? (
        <>
          <Clef type={props.barInfo.clef} />
          <TimeSignature timeSignature={props.barInfo.timeSignature} />
          <SharpFlatPanel />
        </>
      ) : (
        ""
      )}
      {props.data &&
        props.data.map((n, i) => (
          <NoteSVGComponent duration={n.duration} accord={n.accord} key={i} />
        ))}
    </div>
  );
}

export default Bar;
