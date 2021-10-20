import SvgEllipse from "./SvgHelpers/ellipseTypes/SvgEllipse";
import SvgEllipseWholeNote from "./SvgHelpers/ellipseTypes/SvgEllipseWholeNote";
import SvgEllipseHalfNote from "./SvgHelpers/ellipseTypes/SvgEllipseHalfNote";

const toneHeight = 6;
const do0Position = 146;

function NoteEllipses(props) {
  let { lineX, duration, accord } = props;
  let leftEllipseX = lineX - 3;

  props.setMinMaxY(...getMinMaxYPosition(props.accord)); //TODO on props changed!

  return props.accord.map((a) => (
    <>
      {duration === 1 ? (
        <SvgEllipseWholeNote
          x={leftEllipseX}
          y={getYPosition(a.octava, a.tone)}
        />
      ) : (
        ""
      )}
      {duration === 2 ? (
        <SvgEllipseHalfNote
          x={leftEllipseX}
          y={getYPosition(a.octava, a.tone)}
        />
      ) : (
        ""
      )}
      {duration !== 1 && duration !== 2 ? (
        <SvgEllipse x={leftEllipseX} y={getYPosition(a.octava, a.tone)} />
      ) : (
        ""
      )}
    </>
  ));
}

function getYPosition(octava, tone) {
  let notePosition = parseInt(octava) * 7 + parseInt(tone) - 1;
  let top = do0Position - toneHeight * notePosition;
  return top;
}

function getMinMaxYPosition(accord) {
  let min = null;
  let max = null;
  for (let a of accord) {
    let pos = getYPosition(a.octava, a.tone);
    if (min === null || pos < min) {
      min = pos;
    }
    if (max === null || pos > max) {
      max = pos;
    }
  }
  return [min, max];
}
export default NoteEllipses;
