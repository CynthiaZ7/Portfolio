const svg = document.getElementById("svg-canvas");

window.addEventListener("resize", resizeSvg);

function resizeSvg(){
    let bbox = svg.getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${bbox.width} ${bbox.height}`);
}

function resizeSvg(){
    let bbox = svg.getBoundingClientRect();
    svg.setAttribute("viewBox", `0 0 ${bbox.width} ${bbox.height}`);
    
    for(let circle of svg.children){
        circle.setAttribute('r',  Math.min(bbox.width, bbox.height) * 0.1);
    }
}

const svg = document.getElementById('basesvg');
const circleBtn = document.getElementById('Circlebutton');
const ellipseBtn = document.getElementById('Ellipsebutton');
const rectBtn = document.getElementById('Rectanglebutton');
const colorBtn = document.getElementById('ChangesColourbutton');
const shapes = [];

function randomColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
}

function randomInt(min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
}

function clearSvg() {
    while (svg.firstChild) {
      svg.removeChild(svg.firstChild);
    }
  }

function createCircle() {
clearSvg();
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', randomInt(660, 660));
  circle.setAttribute('cy', randomInt(150, 400));
  circle.setAttribute('r', randomInt(60, 100));
  circle.setAttribute('fill', 'none');
  circle.setAttribute('stroke', 'lightpink');
  circle.setAttribute('stroke-width', '5');
  svg.appendChild(circle);
  shapes.push(circle);
}

function createEllipse() {
clearSvg();
  const ellipse = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
  ellipse.setAttribute('cx', randomInt(450, 550));
  ellipse.setAttribute('cy', randomInt(250, 350));
  ellipse.setAttribute('rx', randomInt(10, 500));
  ellipse.setAttribute('ry', randomInt(10, 150));
  ellipse.setAttribute('fill', 'none');
  ellipse.setAttribute('stroke', 'plum');
  ellipse.setAttribute('stroke-width', '5');
  svg.appendChild(ellipse);
  shapes.push(ellipse);
}

function createRect() {
  clearSvg();
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  const size = randomInt(10, 100);
  rect.setAttribute('x', randomInt(620, 620));
  rect.setAttribute('y', randomInt(200, 200));
  rect.setAttribute('width', size);
  rect.setAttribute('height', size);
  rect.setAttribute('fill', 'none');
  rect.setAttribute('stroke','deepskyblue');
  rect.setAttribute('stroke-width', '5');
  svg.appendChild(rect);
  shapes.push(rect);
}

function changeColor() {
  shapes.forEach(shape => {
    shape.setAttribute('fill', randomColor());
  });
}

circleBtn.addEventListener('click', createCircle);
ellipseBtn.addEventListener('click', createEllipse);
rectBtn.addEventListener('click', createRect);
colorBtn.addEventListener('click', changeColor);
