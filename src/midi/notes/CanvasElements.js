const radiusX = 4;
const radiusY = 5;

export function drawOval(ctx, centerX, centerY) {
  ctx.beginPath();

  ctx.ellipse(
    centerX,
    centerY,
    radiusX,
    radiusY,
    Math.PI / 3,
    0,
    Math.PI * 2,
    false
  );

  ctx.fill();
}
