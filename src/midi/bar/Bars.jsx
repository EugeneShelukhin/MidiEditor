import "./Bars.scss";
import Bar from "./Bar";

function Bars(props) {
  let barsData = divideDataForBars(props.data);
  return (
    <div className="bars">
      {barsData.map((d, i) => (
        <Bar
          data={d.data}
          barInfo={d.barInfo}
          isBarinfoChanged={d.isBarinfoChanged}
          key={i}
        />
      ))}
    </div>
  );
}

function divideDataForBars(data) {
  let barsData = [];

  let currentDuration = 0;
  let barDuration = 1;
  let current = [];

  let isBarinfoChanged = true;
  let _currentBarInfo = {
    clef: "treble",
    timeSignature: { beatCount: 4, beatDuration: 0.25 },
    sharps: [],
    flats: [],
  };
  const setCurrentBarInfo = (barInfo) => {
    _currentBarInfo = barInfo;
    isBarinfoChanged = true;
    barDuration =
      _currentBarInfo.timeSignature.beatCount *
      _currentBarInfo.timeSignature.beatDuration;
  };

  for (let d of data) {
    if (d.barInfo) {
      setCurrentBarInfo(d.barInfo);
      continue;
    }
    if (currentDuration + d.duration > barDuration) {
      barsData.push({
        barInfo: _currentBarInfo,
        data: current.slice(),
        isBarinfoChanged,
      });
      current = [];
      currentDuration = 0;
      isBarinfoChanged = false;
    }
    current.push(d);
    currentDuration += d.duration;
  }
  if (current.length > 0) {
    barsData.push({
      barInfo: _currentBarInfo,
      data: current.slice(),
      isBarinfoChanged,
    });
    current = [];
    currentDuration = 0;
    isBarinfoChanged = false;
  }
  return barsData;
}

export default Bars;
