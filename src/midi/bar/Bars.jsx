import "./Bars.scss";
import Bar from "./Bar";
import CanvasComponent from "./CanvasComponent";

function Bars(props) {
  return (
    <div className="bars">
      <Bar clef="bass" />
      <Bar data={props.data} />
      <CanvasComponent />
      <Bar />
      <Bar />
    </div>
  );
}

export default Bars;
