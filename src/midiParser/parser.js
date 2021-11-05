var division = 0;
function parse(binMidi) {
  if (!checkIsStartFromMThd(binMidi)) {
    alert("file must starts from MThd");
  }
  division = getDivision(binMidi);
  let tracks = divideOnTracks(binMidi);
  let events = tracks.map((x) => getEventsArray(x));
  let notes = events.map((x) => getNotesArray(x)).filter((x) => x.length > 0);
  return notes;
}

function checkIsStartFromMThd(binMidi) {
  //hex 4d 54 68 64
  let mthd = [77, 84, 104, 100];
  return (
    binMidi[0] == mthd[0] &&
    binMidi[1] == mthd[1] &&
    binMidi[2] == mthd[2] &&
    binMidi[3] == mthd[3]
  );
}

function getNumberOfTracks(binMidi) {
  return binMidi[11];
}

function getDivision(binMidi) {
  return binMidi[13] | (binMidi[12] << 8);
}

function divideOnTracks(binMidi) {
  //hex 4d 54 72 6b
  let mtrk = [77, 84, 114, 107];
  var matchIndexes = findMatches(binMidi, mtrk);
  matchIndexes.push(binMidi.length);
  let result = [];
  matchIndexes.reduce((prev, next, ind) => {
    result.push(binMidi.slice(prev, next));
    return next;
  });

  result = result.map((x) => removeStartOfTrack(removeEndOfTrack(x)));
  return result;
}

function removeEndOfTrack(intArray) {
  //hex 0xFF 0x2F 0x00
  let endOfTrack = [255, 47, 0];
  return intArray.slice(0, intArray.length - endOfTrack.length);
}
function removeStartOfTrack(intArray) {
  //hex 0x4d 0x54 0x72 0x6b
  let mtrk = [77, 84, 114, 107]; //+ 4 bytes denotes size
  return intArray.slice(8);
}

function findMatches(inputArr, pattern) {
  let patternInd = 0;
  let indexes = [];
  inputArr.forEach((current, index) => {
    if (pattern[patternInd] == current) {
      patternInd++;
      if (patternInd === pattern.length) {
        indexes.push(index - (pattern.length - 1));
        patternInd = 0;
      }
    } else {
      patternInd = 0;
    }
  });
  return indexes;
}

function getEventsArray(inputArr) {
  let result = [];
  let accum = [];
  for (let i = 0; i < inputArr.length; i++) {
    let current = inputArr[i];
    if (isStatusByte(current)) {
      let channel = getChannel(current);
      let command = getCoommand(current);
      let timeDelta = getTimeDelta(accum);
      accum = [];
      result.push({
        command,
        channel,
        timeDelta,
        data: accum,
      });
    } else {
      accum.push(current);
    }
  }
  result.map((x) => (x.data = mapDataBlock(x.command, x.data)));

  return result;
}

function isStatusByte(byte) {
  return byte & 0b10000000;
}
function getChannel(byte) {
  return byte & 0b00001111;
}
function getTimeDelta(accum) {
  return accum.splice(accum.length - 1, 1)[0]; //hope that time is a single byte
}

function getCoommand(byte) {
  let code = byte & 0b11110000;
  switch (code) {
    case 0x80:
      return Comands.NoteReleased;
    case 0x90:
      return Comands.NotePressed;
    case 0xc0:
      return Comands.ChangeInstrument;
  }
  return byte;
}

const Comands = Object.freeze({
  NotePressed: Symbol("NotePressed"),
  NoteReleased: Symbol("NoteReleased"),
  ChangeInstrument: Symbol("ChangeInstrument"),
});

function mapDataBlock(command, data) {
  switch (command) {
    case Comands.NotePressed:
      return {
        note: data[0],
        velocity: data[1],
      };
    case Comands.NoteReleased:
      return {
        note: data[0],
        velocity: data[1],
      };
    default:
      return data;
  }
}

function getNotesArray(events) {
  let notes = [];

  for (let event of events) {
    switch (event.command) {
      case Comands.NotePressed:
        notes.push({ note: event.data.note });
        break;
      case Comands.NoteReleased:
        for (let i = notes.length - 1; i >= 0; i--) {
          if (notes[i].note === event.data.note) {
            notes[i].delta = 1 / Math.round(division / event.timeDelta);
            break;
          }
        }
        break;
      case Comands.ChangeInstrument:
        //todo
        break;
      default:
        //todo
        break;
    }
  }

  return notes;
}

export default parse;
