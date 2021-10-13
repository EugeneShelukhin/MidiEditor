import "./Bars.scss";
import Bar from "./Bar";

function Bars(props) {
  return (
    <div className="bars">
      <Bar clef="bass" />
      <Bar data={props.data} />
      <Bar />
      <Bar />
      <Bar />
    </div>
  );
}

export default Bars;
