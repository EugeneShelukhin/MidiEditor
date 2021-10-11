import WholeNote from "./NoteTypes/WholeNote";
import HalfNote from "./NoteTypes/HalfNote";
import QuarterNote from "./NoteTypes/QuarterNote";
import EighthNote from "./NoteTypes/EighthNote";
import SixTeenthNote from "./NoteTypes/SixteenthNote";

function Note(props) {
  let { duration } = props;

  if (duration == 1) {
    return <WholeNote />;
  }
  if (duration == 2) {
    return <HalfNote />;
  }
  if (duration == 4) {
    return <QuarterNote />;
  }
  if (duration == 8) {
    return <EighthNote />;
  }
  if (duration == 16) {
    return <SixTeenthNote />;
  }

  return <span>no such note duration</span>;
}
export default Note;
