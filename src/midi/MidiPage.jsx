import "./MidiPage.scss";
import data, { test } from "./data";
import Bars from "./bar/Bars";
import Title from "./Title";

function MidiPage() {
  return (
    <div>
      <Title />
      <div>
        <Bars data={data()} />
      </div>
      <div>NoTracks = {test()}</div>
      <div>pageNo</div>
    </div>
  );
}

export default MidiPage;
