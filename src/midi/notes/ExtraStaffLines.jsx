import "./ExtraStaffLines.scss";

function ExtraStaffLines(props) {
  let { octava, tone } = props;
  let lineHeight = 5;

  let notePosition = parseInt(octava) * 7 + parseInt(tone) - 1;
  let la1Position = 12;
  let do0Postion = 0;

  let do0StartingPoint = 57;

  if (notePosition >= la1Position) {
    let count = Math.floor((notePosition - la1Position) / 2) + 1;
    let marginTop =
      do0StartingPoint - lineHeight * (la1Position + (count - 1) * 2);
    return (
      <div className="extra-staff-lines" style={{ marginTop }}>
        {[...Array(count)].map((_, i) => (
          <div key={i} />
        ))}
      </div>
    );
  }

  if (notePosition <= do0Postion) {
    let count = Math.floor((do0Postion - notePosition) / 2) + 1;
    let marginTop = do0StartingPoint;
    return (
      <div className="extra-staff-lines" style={{ marginTop }}>
        {[...Array(count)].map((_, i) => (
          <div key={i} />
        ))}
      </div>
    );
  }

  return <></>;
}
export default ExtraStaffLines;
