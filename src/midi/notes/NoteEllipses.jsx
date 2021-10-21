import SvgEllipse from "./SvgHelpers/ellipseTypes/SvgEllipse";
import SvgEllipseWholeNote from "./SvgHelpers/ellipseTypes/SvgEllipseWholeNote";
import SvgEllipseHalfNote from "./SvgHelpers/ellipseTypes/SvgEllipseHalfNote";
import { getAbsolutTone, getYPosition } from "./notePositionHelper";

function NoteEllipses(props) {
  let { lineX, duration, accord } = props;
  let leftEllipseX = lineX - 3;

  return accord.map((n, i) => (
    <g key={i}>
      {duration === 1 ? (
        <SvgEllipseWholeNote
          x={leftEllipseX}
          y={getYPosition(n.octava, n.tone)}
          isRight={isRight(n, accord)}
          key={i}
        />
      ) : (
        ""
      )}
      {duration === 0.5 ? (
        <SvgEllipseHalfNote
          x={leftEllipseX}
          y={getYPosition(n.octava, n.tone)}
          isRight={isRight(n, accord)}
          key={i}
        />
      ) : (
        ""
      )}
      {duration !== 1 && duration !== 0.5 ? (
        <SvgEllipse
          x={leftEllipseX}
          y={getYPosition(n.octava, n.tone)}
          isRight={isRight(n, accord)}
        />
      ) : (
        ""
      )}
    </g>
  ));
}

function isRight(note, array) {
  if (array.length < 2) {
    return false;
  }
  let current = getAbsolutTone(note.octava, note.tone);
  return array.some((x) => current === getAbsolutTone(x.octava, x.tone) + 1);
}
export default NoteEllipses;
