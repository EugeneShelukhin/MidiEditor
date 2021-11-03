function parse(binMidi) {
  if (!checkIsStartFromMThd(binMidi)) {
    alert("file must start from MThd");
  }

  let tracks = divideOnTracks(binMidi);
  console.log(tracks);
  return getNumberOfTracks(binMidi);
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

function divideOnTracks(binMidi) {
  //hex 4d 54 72 6b
  let mtrk = [77, 84, 114, 107];
  var matchIndexes = findMatches(binMidi, mtrk);
  matchIndexes.push(binMidi.length - 1);
  let result = [];
  matchIndexes.reduce((prev, next, ind) => {
    result.push(binMidi.slice(prev, next + 1));
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

function findMatches(mainArr, pattern) {
  let patternInd = 0;
  let indexes = [];
  mainArr.forEach((current, index) => {
    if (pattern[patternInd] == current) {
      patternInd++;
      if (patternInd === pattern.length) {
        indexes.push([index - (pattern.length - 1)]);
        patternInd = 0;
      }
    } else {
      patternInd = 0;
    }
  });
  return indexes;
}

export default parse;
