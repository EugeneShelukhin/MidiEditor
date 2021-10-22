import "./Bars.scss";
import Bar from "./Bar";

function Bars(props) {
  let barsData = divideDataForBars(props.data);
  return (
    <div className="bars">
      {barsData.map((d, i) => (
        <Bar data={d.data} barInfo={d.barInfo} key={i} />
      ))}
    </div>
  );
}

function divideDataForBars(data) {
  let barsData = [];

  let currentDuration = 0;
  let current = [];

  //default bar info
  let currentBarInfo = {
    clef: "treble",
    timeSignature: { beatCount: 4, beatDuration: 0.25 },
    sharps: [],
    flats: [],
  };

  let barDuration =
    currentBarInfo.timeSignature.beatCount *
    currentBarInfo.timeSignature.beatDuration;
  for (let d of data) {
    if (d.barInfo) {
      currentBarInfo = d.barInfo;
      barDuration =
        currentBarInfo.timeSignature.beatCount *
        currentBarInfo.timeSignature.beatDuration;
      continue;
    }
    if (currentDuration + d.duration > barDuration) {
      barsData.push({ barInfo: currentBarInfo, data: current.slice() });
      current = [];
      currentDuration = 0;
    }
    current.push(d);
    currentDuration += d.duration;
  }
  if (current.length > 0) {
    barsData.push({ barInfo: currentBarInfo, data: current.slice() });
    current = [];
    currentDuration = 0;
  }
  return barsData;
}

export default Bars;
