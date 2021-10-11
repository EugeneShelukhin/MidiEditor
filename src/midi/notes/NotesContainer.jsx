import "./NotesContainer.scss";
import NoteBase from "./NoteBase";

function NotesContainer() {
  let octava = 1;
  return (
    <div className="notes-container">
      <NoteBase duration="1" octava={octava} tone="1" />
      <NoteBase duration="2" octava={octava} tone="2" />
      <NoteBase duration="4" octava={octava} tone="3" />
      <NoteBase duration="8" octava={octava} tone="4" />
      <NoteBase duration="16" octava={octava} tone="5" />
      <NoteBase duration="16" octava={octava} tone="6" />
      <NoteBase duration="16" octava={octava} tone="7" />
    </div>
  );
}
export default NotesContainer;
