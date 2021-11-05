export const vertLinePositionX = 12;
export const toneHeight = 6;
export const lowExtraLineMargin = 146;
export const highExtraLineMargin = 75;
const d0Margin = 356;

export function getAbsolutTone(octava, tone) {
  return parseInt(octava) * 7 + parseInt(tone) - 1;
}

export function getYPosition(octava, tone) {
  return d0Margin - toneHeight * getAbsolutTone(octava, tone);
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
