
// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");
// const confettis = [], gravity = 5, speedX = 5;

// function Confetti () {
//   this.color = `hsl(${Math.random() * 360}, 50%, 50%)`;
//   this.radius = 10;
//   this.positionX = Math.random() * canvas.width;
//   this.positionY = Math.random() * canvas.height;
// }


// const generateConfetti = (ctx, amount) => {
//   confetti = [];
//   for (let i = 0; i < amount; i++) {
//     confettis.push(new Confetti());
//   }
// }

// const drawConfetti = (ctx) => {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   confettis.forEach((confetti) => {
//     ctx.save();
//     ctx.translate(confetti.positionX, confetti.positionY);
//     ctx.beginPath();
//     ctx.fillStyle = confetti.color;
//     ctx.arc(0, 0, confetti.radius, 0, Math.PI * 2, true);
//     ctx.fill();
//     ctx.closePath();
//     ctx.restore();
    
//     confetti.positionY += gravity;
//   });
// }

// const makeConfetti = (amount) => {
//   canvas.height = window.innerHeight;
//   canvas.width = window.innerWidth;
 
//   generateConfetti(ctx, amount);

//   setInterval(() => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawConfetti(ctx);
//   }, 50);
// }

this.canvas = document.querySelector("#canvas");
this.ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Confetti {
  constructor(x,y, gravity) {
    this.gravity = gravity,
    this.x = x;
    this.y = y;
    this.radius = 10;
    this.color = (`hsl(${Math.random() * 360}, 50%, 50%)`);
    this.drawStar = function () {
      ctx.save();
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.translate(this.x, this.y);
      for (let i = 0; i < 9; i++) {
        ctx.rotate(Math.PI / 5);
        if (i % 2 === 0) {
          ctx.lineTo((this.radius/0.525731) * 0.200811, 0);
        } else {
          ctx.lineTo(this.radius, 0);
        }
      }
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    };
  }
  update(){
    this.y += this.gravity;
    if(this.y > canvas.height){
      this.y = 0;
    }
  };
  draw() {
    this.drawStar();
  };
};

let confetti = [], amount = 200;
for(let i = 0; i < amount; i++){
  confetti.push(new Confetti(Math.random()*canvas.width,canvas.height*Math.random(),1));
}

const animate = (amount) =>{
  for(let i = 0; i < amount; i++){
    confetti[i].update();
    confetti[i].draw();
  }
}

const button = document.querySelector(".button");

button.addEventListener("click", () => {
  setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    animate(amount);
  }, 0)
})
