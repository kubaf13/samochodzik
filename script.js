const car = document.getElementById("car")
const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.getElementById("left");
const right = document.getElementById("right");
const upCar = 90
const downCar = 270
const leftCar = 0
const rightCar = 180

// samochód ma:
// spalać benzynę ma bak 50 l
// po wjechaniu na stację ma tankować do momentu wyjechania ze stacji
// po wjechaniu na pole x od 0 - 100 i y 0 - 100

let myCar = {
  tank: 50,
  positionX: 100,
  positionY: 100,
}

function tankFull() {
  if ((myCar.positionY < 100 && myCar.positionY > 0) && (myCar.positionX < 100 && myCar.positionX > 0)) {
    myCar.tank = 50;
  }
}
const carReposition = (positionChangeX, positionChangeY, rotation) => {

  myCar.positionY += positionChangeY;
  myCar.positionX += positionChangeX;
  car.style.top = `${myCar.positionY}px`;
  car.style.left = `${myCar.positionX}px`;
  car.style.transform = `rotate(${rotation}deg)`;
  let fuelRatio = 5 / 100; //spalanie samochodu
  myCar.tank -= (Math.abs(positionChangeY) + Math.abs(positionChangeX)) * fuelRatio;
  tankFull()
  tank.innerHTML = myCar.tank;

}
carReposition(0, 0, leftCar);
const keyboard = (e) => {
  if (e.code == 'ArrowRight') carReposition(10, 0, rightCar)
  else if (e.code == 'ArrowLeft') carReposition(-10, 0, leftCar)
  else if (e.code == 'ArrowDown') carReposition(0, 10, downCar)
  else if (e.code == 'ArrowUp') carReposition(0, -10, upCar)
};

up.addEventListener("click", () => {
  carReposition(0, -10, upCar)
});
down.addEventListener("click", () => {
  carReposition(0, 10, downCar)
});
left.addEventListener("click", () => {
  carReposition(-10, 0, leftCar)
});
right.addEventListener("click", () => {
  carReposition(10, 0, rightCar)
});
document.addEventListener("keydown", (e) => {
  keyboard(e)
});