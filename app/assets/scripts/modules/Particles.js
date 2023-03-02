export default function Particles() {
  let canvas, ctx;
  let dots = [];
  let rows = 20;
  let cols = 40;
  let dotSize = 6;
  let speed = 0.05;
  let noiseStrength = 10;

  function init() {
    canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.zIndex = -1;
    document.body.appendChild(canvas);

    ctx = canvas.getContext("2d");

    resizeCanvas();
    createDots();

    window.addEventListener("resize", resizeCanvas);
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createDots();
  }

  function createDots() {
    dots = [];
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let x = i / (rows - 1) * canvas.width;
        let y = j / (cols - 1) * canvas.height;
        let noiseVal = noise(x / noiseStrength, y / noiseStrength);
        dots.push({
          x: x,
          y: y,
          dx: Math.cos(noiseVal * Math.PI * 2) * dotSize,
          dy: Math.sin(noiseVal * Math.PI * 2) * dotSize,
        });
      }
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < dots.length; i++) {
      let dot = dots[i];
      dot.x += dot.dx;
      dot.y += dot.dy;

      if (dot.x < 0) {
        dot.x += canvas.width;
      } else if (dot.x > canvas.width) {
        dot.x -= canvas.width;
      }

      if (dot.y < 0) {
        dot.y += canvas.height;
      } else if (dot.y > canvas.height) {
        dot.y -= canvas.height;
      }

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
      ctx.fill();
    }

    setTimeout(() => {
      requestAnimationFrame(draw);
    }, 1000 / 60);
  }

  function noise(x, y) {
    let value = 0;
    let amplitude = 1;
    let frequency = 0.1;

    for (let i = 0; i < 4; i++) {
      value += amplitude * perlinNoise(x * frequency, y * frequency);
      amplitude *= 0.5;
      frequency *= 2;
    }

    return value;
  }

  function perlinNoise(x, y) {
    let xi = Math.floor(x) & 255;
    let yi = Math.floor(y) & 255;
    let xf = x - Math.floor(x);
    let yf = y - Math.floor(y);
    let u = fade(xf);
    let v = fade(yf);
    let aa, ab, ba, bb;
    aa = p[p[xi] + yi];
    ab = p[p[xi] + yi + 1];
    ba = p[p[xi + 1] + yi];
    bb
