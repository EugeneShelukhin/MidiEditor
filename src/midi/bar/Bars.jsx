import "./Bars.scss";
import Bar from "./Bar";

function Bars() {
  return (
    <div className="bars">
      <Bar clef="bass" />
      <Bar />
      <Bar />
      <Bar />
      <Bar />
    </div>
  );
}

export default Bars;
