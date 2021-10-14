import "./Accord.scss";
import Note from "./Note";
import SharpFlatSign from "./SharpFlatSign";
import StokattoSign from "./StokattoSign";
import ExtraStaffLines from "./ExtraStaffLines";

function Accord(props) {
  let lineHeight = 5;
  let startingPoint = 35;

  return (
    <div className={"accord"}>
      {props.accord.map((a) => {
        let notePosition = parseInt(a.octava) * 7 + parseInt(a.tone) - 1;

        let top = startingPoint - lineHeight * notePosition;
        top += "px";
        return (
          <div style={{ top }}>
            <SharpFlatSign />
            <Note duration={props.duration} />
          </div>
        );
      })}

      <StokattoSign />
      <ExtraStaffLines
        octava={props.accord[0].octava}
        tone={props.accord[0].tone}
      />
    </div>
  );
}
export default Accord;
