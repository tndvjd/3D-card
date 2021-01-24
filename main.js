const card = document.querySelector(`.card`);
const container = document.querySelector(`.container`);
const title = document.querySelector(`.title`)
const sneaker = document.querySelector(`.sneaker img`)
const purchase = document.querySelector(`.purchase`)
const description = document.querySelector(`.info h3`)
const sizes = document.querySelector(`.sizes`)

container.addEventListener('mousemove', e => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

container.addEventListener('mouseenter', e => {
  card.style.transition = `none`;
  title.style.transform = `translateZ(150px)`;
  sneaker.style.transform = `translateZ(200px) rotateZ(-45deg)`;
  purchase.style.transform = `translateZ(100px)`;
  description.style.transform = `translateZ(125px)`;
  sizes.style.transform = `translateZ(100px)`;
})

container.addEventListener('mouseleave', e => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`
  card.style.transition = `all 0.5s ease`;
  title.style.transform = `translateZ(0px)`;
  sneaker.style.transform = `translateZ(0px) rotateZ(0deg)`;
  purchase.style.transform = `translateZ(0x)`;
  description.style.transform = `translateZ(0px)`;
  sizes.style.transform = `translateZ(0px)`;
})
