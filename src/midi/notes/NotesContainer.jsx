import "./NotesContainer.scss";
import NoteBase from "./NoteBase";

function NotesContainer(props) {
  return (
    <div className="notes-container">
      {props.data &&
        props.data.map((n) => (
          <NoteBase duration={n.duration} octava={n.octava} tone={n.tone} />
        ))}
    </div>
  );
}
export default NotesContainer;
