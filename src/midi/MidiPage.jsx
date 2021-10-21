import "./MidiPage.scss";
import data from "./data";
import Bars from "./bar/Bars";
import Title from "./Title";
function MidiPage() {
  return (
    <div>
      <Title />
      <div>
        <Bars data={data()} />
      </div>
      <div>pageNo</div>
    </div>
  );
}

export default MidiPage;
