import "./NotesContainer.scss";
import Accord from "./Accord";

function NotesContainer(props) {
  return (
    <div className="notes-container">
      {props.data &&
        props.data.map((n) => (
          <Accord duration={n.duration} accord={n.accord} />
        ))}
    </div>
  );
}
export default NotesContainer;
