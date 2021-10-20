import SvgEllipse from "./SvgHelpers/ellipseTypes/SvgEllipse";
import SvgEllipseWholeNote from "./SvgHelpers/ellipseTypes/SvgEllipseWholeNote";
import SvgEllipseHalfNote from "./SvgHelpers/ellipseTypes/SvgEllipseHalfNote";

const toneHeight = 6;
const do0Position = 146;

function NoteEllipses(props) {
  let { lineX, duration, accord } = props;
  let leftEllipseX = lineX - 3;

  return props.accord.map((n, i, arr) => (
    <g key={i}>
      {duration === 1 ? (
        <SvgEllipseWholeNote
          x={leftEllipseX}
          y={getYPosition(n.octava, n.tone)}
          isRight={isRight(n, props.accord)}
          key={i}
        />
      ) : (
        ""
      )}
      {duration === 2 ? (
        <SvgEllipseHalfNote
          x={leftEllipseX}
          y={getYPosition(n.octava, n.tone)}
          isRight={isRight(n, props.accord)}
          key={i}
        />
      ) : (
        ""
      )}
      {duration !== 1 && duration !== 2 ? (
        <SvgEllipse
          x={leftEllipseX}
          y={getYPosition(n.octava, n.tone)}
          isRight={isRight(n, props.accord)}
        />
      ) : (
        ""
      )}
    </g>
  ));
}

export function getYPosition(octava, tone) {
  return do0Position - toneHeight * getAbsolutTone(octava, tone);
}

function getAbsolutTone(octava, tone) {
  return parseInt(octava) * 7 + parseInt(tone) - 1;
}

function isRight(note, array) {
  if (array.length < 2) {
    return false;
  }
  let current = getAbsolutTone(note.octava, note.tone);
  return array.some((x) => current === getAbsolutTone(x.octava, x.tone) + 1);
}

export default NoteEllipses;
