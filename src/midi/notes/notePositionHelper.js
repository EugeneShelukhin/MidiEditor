export const vertLinePositionX = 12;
export const toneHeight = 6;
export const do0Position = 146;
export const la1Position = 75;

export function getAbsolutTone(octava, tone) {
  return parseInt(octava) * 7 + parseInt(tone) - 1;
}

export function getYPosition(octava, tone) {
  return do0Position - toneHeight * getAbsolutTone(octava, tone);
}

export function getMinMaxYPosition(accord) {
  let minLineY = null;
  let maxLineY = null;
  for (let a of accord) {
    let pos = getYPosition(a.octava, a.tone);
    if (minLineY === null || pos < minLineY) {
      minLineY = pos;
    }
    if (maxLineY === null || pos > maxLineY) {
      maxLineY = pos;
    }
  }
  return { minLineY, maxLineY };
}
