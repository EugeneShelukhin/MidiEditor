import "./Bars.scss";
import Bar from "./Bar";

function Bars(props) {
  let barsData = [];

  let barDuration = 1;
  let currentDuration = 0;
  let current = [];
  for (let note of props.data) {
    if (currentDuration < barDuration) {
      currentDuration += note.duration;
      current.push(note);
    } else {
      barsData.push(current.slice());
      current = [];
      current.push(note);
      currentDuration = note.duration;
    }
  }
  if (current.length > 0) {
    barsData.push(current.slice());
    current = [];
    currentDuration = 0;
  }

  console.log(barsData);
  return (
    <div className="bars">
      {barsData.map((d) => (
        <Bar data={d} />
      ))}
    </div>
  );
}

export default Bars;
