import parser from "../midiParser/parser";

export function test() {
  let base64Midi =
    "TVRoZAAAAAYAAQADAYBNVHJrAAAAEwD/WAQEAhgIAP9RAwhSrgD/LwBNVHJrAAAAYwD/AxhFbGVjdHJpYyBQaWFubyAoQ2xhc3NpYykAwAAAkDwyYIA8AACQPjJggD4AAJBAMmCAQAAAkEEyYIBBAACQQzJggEMAAJBFMmCARQAAkEcyYIBHAACQSDJggEgAAP8vAE1UcmsAAACSAP8DDkVsZWN0cmljIFBpYW5vAMEAhgCRSjJggUoAAJFMMmCBTAAAkU0yYIFNAACRTzJggU8AAJFRMmCBUQAAkVMyYIFTAACRVDJggVQAAJFWMmCBVgAAkTsyYIE7AACROTJggTkAAJE3MmCBNwAAkTUyYIE1AACRNDJggTQAAJEyMmCBMgAAkTAyYIEwAAD/LwA=";
  let midiArray = Buffer.from(base64Midi, "base64");

  return parser(midiArray);
}

function GetData() {
  let notes = test()[0]; //TODO
  let data = notes.map((x) => ({
    duration: x.delta,
    accord: [
      {
        octava: Math.floor(x.note / 12),
        tone: getNoteValue(x.note),
        sign: getSign(x.note),
      },
    ],
  }));
  console.log("data", data);
  return data;
}

function getNoteValue(note) {
  let val = note % 12;
  if (val <= 5) {
    return Math.ceil(val / 2) + 1;
  } else {
    return Math.ceil((val - 5) / 2) + 4;
  }
}

function getSign(note) {
  if (isSharp(note)) {
    return "sharp";
  }
  return null;
}
function isSharp(note) {
  let sharps = [2, 4, 7, 9, 11];
  return sharps.indexOf(note % 12) !== -1;
}

function GetDataDemo() {
  return [
    {
      barInfo: {
        clef: "treble",
        timeSignature: { beatCount: 4, beatDuration: 0.25 },
        sharps: [4, 1],
        flats: [],
      },
    },
    { duration: 1, accord: [{ octava: 0, tone: 1 }] },
    { duration: 1, accord: [{ octava: 0, tone: 2 }] },
    { duration: 1, accord: [{ octava: 0, tone: 3 }] },

    { duration: 0.5, accord: [{ octava: -1, tone: 2 }] },
    { duration: 0.5, accord: [{ octava: -1, tone: 4 }] },
    { duration: 0.5, accord: [{ octava: -1, tone: 5 }] },
    { duration: 0.5, accord: [{ octava: -1, tone: 3 }] },
    { duration: 0.5, accord: [{ octava: -1, tone: 6 }] },
    { duration: 0.5, accord: [{ octava: -1, tone: 7 }] },

    { duration: 0.25, accord: [{ octava: 0, tone: 6 }] },
    { duration: 0.25, accord: [{ octava: 0, tone: 5 }] },
    { duration: 0.25, accord: [{ octava: 0, tone: 4 }] },
    { duration: 0.25, accord: [{ octava: 0, tone: 3 }] },
    { duration: 0.25, accord: [{ octava: 0, tone: 2 }] },
    { duration: 0.25, accord: [{ octava: 0, tone: 1 }] },

    { duration: 0.125, accord: [{ octava: 1, tone: 1 }] },
    { duration: 0.125, accord: [{ octava: 1, tone: 2 }] },
    { duration: 0.125, accord: [{ octava: 1, tone: 3 }] },
    { duration: 0.125, accord: [{ octava: 1, tone: 4 }] },
    { duration: 0.125, accord: [{ octava: 1, tone: 5 }] },
    { duration: 0.125, accord: [{ octava: 1, tone: 6 }] },
    { duration: 0.125, accord: [{ octava: 1, tone: 7 }] },

    {
      barInfo: {
        clef: "bass",
        timeSignature: { beatCount: 4, beatDuration: 0.25 },
        sharps: [4, 1],
        flats: [],
      },
    },

    { duration: 0.0625, accord: [{ octava: 2, tone: 7 }] },
    { duration: 0.0625, accord: [{ octava: 2, tone: 6 }] },
    { duration: 0.0625, accord: [{ octava: 2, tone: 5 }] },
    { duration: 0.0625, accord: [{ octava: 2, tone: 4 }] },
    { duration: 0.0625, accord: [{ octava: 2, tone: 3 }] },
    { duration: 0.0625, accord: [{ octava: 2, tone: 2 }] },
    { duration: 0.0625, accord: [{ octava: 2, tone: 1 }] },
    {
      duration: 1,
      accord: [
        { octava: 0, tone: 7 },
        { octava: 0, tone: 5 },
        { octava: 0, tone: 4 },
      ],
    },
    {
      duration: 0.5,
      accord: [
        { octava: -1, tone: 1 },
        { octava: -1, tone: 2 },
        { octava: -1, tone: 7 },
      ],
    },
    {
      duration: 0.25,
      accord: [
        { octava: 0, tone: 7 },
        { octava: 0, tone: 5 },
        { octava: 0, tone: 4 },
      ],
    },
    {
      duration: 0.125,
      accord: [
        { octava: 0, tone: 7 },
        { octava: 0, tone: 5 },
        { octava: 0, tone: 4 },
      ],
    },
    {
      duration: 0.0625,
      accord: [
        { octava: 0, tone: 7 },
        { octava: 0, tone: 5 },
        { octava: 0, tone: 4 },
      ],
    },
  ];
}
export default GetData;
