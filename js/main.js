
class Player {
    constructor() {
        this.width = 20;
        this.height = 10;
        this.positionX = 0;
        this.positionY = 0;
        this.domElement = null;

        this.createDomElement();
    }
    createDomElement() {
        // step1: create the element
        this.domElement = document.createElement("div");

        // step2: add content or modify (ex. innerHTML...)
        this.domElement.id = "player";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        //step3: append to the dom: `parentElm.appendChild()`
        const board = document.getElementById("board");
        board.appendChild(this.domElement);
    }
    moveRight() {
        this.positionX++;
        this.domElement.style.left = this.positionX + "vw";
    }
    moveLeft() {
        this.positionX--;
        this.domElement.style.left = this.positionX + "vw";
    }
}



class Obstacle {
    constructor(){
        this.width = 30;
        this.height = 15;
        this.positionX = 50 - this.width / 2 ;
        this.positionY = 100;
        this.domElement = null;

        this.createDomElement();
    }
    createDomElement() {
        // step1: create the element
        this.domElement = document.createElement("div");

        // step2: add content or modify (ex. innerHTML...)
        this.domElement.className = "obstacle";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";

        //step3: append to the dom: `parentElm.appendChild()`
        const board = document.getElementById("board");
        board.appendChild(this.domElement);
    }
    moveDown(){
        this.positionY--;
        this.domElement.style.bottom = this.positionY + "vh";
    }
}



const player = new Player();

const obstacleArr = []; // will store instances of the class Obstacle

setInterval(() => {
    const newObstacle = new Obstacle();
    obstacleArr.push(newObstacle);
}, 4000);


setInterval(() => {
    obstacleArr.forEach((obstacleInstance) => {
        obstacleInstance.moveDown();
    });
}, 100);



document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
        player.moveLeft();
    } else if (e.code === 'ArrowRight') {
        player.moveRight();
    }
});

