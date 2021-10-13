import "./MidiPage.scss";
import Line from "./MidiLine";
import data from "./data";

function MidiPage() {
  return (
    <div>
      <Line data={data()} />
      <Line />
      <Line />
      <Line />
      <Line />
    </div>
  );
}

export default MidiPage;
