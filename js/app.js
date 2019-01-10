function GameOfLife(boardWidth, boardHeight, cellsColor) {
    this.width = boardWidth;
    this.height = boardHeight;
    this.board = document.querySelector("#board");

    this.createDivs = function(){
        var numbersOfDivs = this.width * this.height;

        for (var i = 0; i < numbersOfDivs; i++) {
            var newDiv = document.createElement("div");
            this.board.appendChild(newDiv);

        }
    };

    this.createBoard = function () {

        this.createDivs();
        var divWidth = Math.ceil(parseFloat((getComputedStyle(document.querySelector("#board div")))["width"]));
        var divHeight = Math.ceil(parseFloat((getComputedStyle(document.querySelector("#board div")))["height"]));
        this.widthB = divWidth * this.width;
        this.heightB = divHeight * this.height;
        this.board.style.width = this.widthB + "px";
        this.board.style.height = this.heightB + "px";

        this.cell = [];
        var allDivs = document.querySelectorAll("#board div");

        for (var i = 0; i < allDivs.length; i++) {
            this.cell.push(allDivs[i]);
        }
    };

    this.moveMouse = function () {
        for (var i = 0; i < this.cell.length; i++) {
            this.cell[i].addEventListener("mouseover", function () {
                this.classList.toggle("live");
            });
        }
        this.colorCells();
    };

    this.colorCells = function () {
        for (var i = 0; i < this.cell.length; i++) {
            if (this.cell[i].className === "live"){
                this.cell[i].style.backgroundColor = cellsColor;
            };
            if (this.cell[i].className !== "live"){
                this.cell[i].style.backgroundColor = "white";
            };
        };
    };

    this.getIndeks = function (coorX, coorY) {
        var indeks = coorX + coorY * this.width;
        return this.cell[indeks];
    };

    this.setCellState = function (x, y, state) {
        var job = this.getIndeks(x, y);
        if (state === "live") {
            job.classList.add("live");
        } else {
            job.classList.remove("live");
        }
    };

    this.firstGlider = function () {
            // var arrX =[];
            // var arrY = [];
        var numbersOfLives = (this.width + this.height) * 6;
        for (var i = 0; i < numbersOfLives; i++) {
            var a = Math.floor(Math.random() * (this.width));
            var b = Math.floor(Math.random() * (this.height));
            this.setCellState(a, b, "live");
                // arrX.push(a);
                // arrY.push(b);
            };
            // console.log(arrX);
            // console.log(arrY);
        this.colorCells();
    };

    this.computeCellNextState = function (x, y) {
        var liveNeighbour = 0;

        if (x === 0 && y === 0) { // lewy górny róg
            if (this.getIndeks(x + 1, y + 1).className === "live") {
                liveNeighbour++;
            }
            if (this.getIndeks(x + 1, y).className === "live") {
                liveNeighbour++;
            }
            if (this.getIndeks(x, y + 1).className === "live") {
                liveNeighbour++;
            }
        } else if (x === this.width - 1 && y === 0) { // prawy górny róg
            if (this.getIndeks(x - 1, y).className === "live") {
                liveNeighbour++;
            }
            if (this.getIndeks(x - 1, y + 1).className === "live") {
                liveNeighbour++;
            }
            if (this.getIndeks(x, y + 1).className === "live") {
                liveNeighbour++;
            }
            } else if (x === 0 && y === this.height - 1) { //lewy dolny róg
            if (this.getIndeks(x, y - 1).className === "live") {
                liveNeighbour++;
            }
            if (this.getIndeks(x + 1, y).className === "live") {
                liveNeighbour++;
            }
            if (this.getIndeks(x + 1, y - 1).className === "live") {
                liveNeighbour++;
            }
        } else if (x === this.width - 1 && y === this.height - 1) { //prawy dolny róg
            if (this.getIndeks(x, y - 1).className === "live") {
                liveNeighbour++;
            }
            if (this.getIndeks(x - 1, y).className === "live") {
                liveNeighbour++;
            }
            if (this.getIndeks(x - 1, y - 1).className === "live") {
                liveNeighbour++;
            }
        } else if (x > 0 && x < this.width - 1 && y === 0) { //środek góra
            if (this.getIndeks(x - 1, y).className === "live") {
                liveNeighbour++;
            }
            if (this.getIndeks(x - 1, y + 1).className === "live") {
                liveNeighbour++;
            }

            if (this.getIndeks(x + 1, y + 1).className === "live") {
                liveNeighbour++;
            }

            if (this.getIndeks(x + 1, y).className === "live") {
                liveNeighbour++;
            }

            if (this.getIndeks(x, y + 1).className === "live") {
                liveNeighbour++;
            }
        } else if (x > 0 && x < this.width - 1 && y === this.height - 1) {//środek dół
            if (this.getIndeks(x - 1, y).className === "live") {
                liveNeighbour++;
            }

            if (this.getIndeks(x - 1, y - 1).className === "live") {
                liveNeighbour++;
            }

            if (this.getIndeks(x, y - 1).className === "live") {
                liveNeighbour++;
            }
            if (this.getIndeks(x + 1, y - 1).className === "live") {
                liveNeighbour++;
            }

            if (this.getIndeks(x + 1, y).className === "live") {
                liveNeighbour++;
            }
        } else if (x === 0 && y > 0 && y < this.height - 1) {//środek bok lewy
            if (this.getIndeks(x, y - 1).className === "live") {
                liveNeighbour++;
            }
            if (this.getIndeks(x + 1, y - 1).className === "live") {
                liveNeighbour++;
            }

            if (this.getIndeks(x + 1, y).className === "live") {
                liveNeighbour++;
            }

            if (this.getIndeks(x, y + 1).className === "live") {
                liveNeighbour++;
            }

            if (this.getIndeks(x + 1, y + 1).className === "live") {
                liveNeighbour++;
            }
        } else if (x === this.width - 1 && y > 0 && y < this.height - 1) {//środek bok prawy
            if (this.getIndeks(x, y - 1).className === "live") {
                liveNeighbour++;
            }

            if (this.getIndeks(x - 1, y - 1).className === "live") {
                liveNeighbour++;
            }

            if (this.getIndeks(x - 1, y).className === "live") {
                liveNeighbour++;
            }

            if (this.getIndeks(x, y + 1).className === "live") {
                liveNeighbour++;
            }

            if (this.getIndeks(x - 1, y + 1).className === "live") {
                liveNeighbour++;
            }
        } else {
            if (this.getIndeks(x - 1, y - 1).className === "live") {
                liveNeighbour++;
            }
            if (this.getIndeks(x - 1, y).className === "live") {
                liveNeighbour++;
            }

            if (this.getIndeks(x - 1, y + 1).className === "live") {
                liveNeighbour++;
            }

            if (this.getIndeks(x, y - 1).className === "live") {
                liveNeighbour++;
            }

            if (this.getIndeks(x, y + 1).className === "live") {
                liveNeighbour++;
            }

            if (this.getIndeks(x + 1, y + 1).className === "live") {
                liveNeighbour++;
            }

            if (this.getIndeks(x + 1, y - 1).className === "live") {
                liveNeighbour++;
            }

            if (this.getIndeks(x + 1, y).className === "live") {
                liveNeighbour++;
            }
        };

            // console.log(liveNeighbour);
        if ((this.getIndeks(x, y).className === "live" && liveNeighbour >= 2 && liveNeighbour <= 3) ||
            (this.getIndeks(x, y).className !== "live" && liveNeighbour === 3)) {
            // this.getIndeks(x, y).classList.toggle("live");
            // console.log(this.getIndeks(x,y));
            // console.log("1");
            return 1;
            }

            // console.log(this.getIndeks(x,y));
            // console.log("0");
            return 0;
    };


    this.computeNextGeneration = function () {
        this.livePlan = [];
        for (var i = 0; i < this.height; i++) {
            for (var j = 0; j < this.width; j++) {
                this.livePlan.push(this.computeCellNextState(j, i));
            }
        }
            // console.log(this.livePlan);
        return this.livePlan;
    };

    this.printNextGeneration = function () {
        for (var i = 0; i < this.livePlan.length; i++) {
            if (this.livePlan[i] === 0) {
                this.cell[i].classList.remove("live");
            } else if (this.livePlan[i] === 1) {
                this.cell[i].classList.add("live");
            }
        }
        this.colorCells();
    };

    var self = this;
    this.startAnimation = function () {
        this.idSetInterval = setInterval(function () {
            self.moveMouse();
            self.computeNextGeneration();
            self.printNextGeneration();
                // self.colorCells();
        }, 150);
    };

    this.stopGame = function () {
        clearInterval(this.idSetInterval);
    };

    this.sizeOfDivs = function (pixels, inputWidth, inputHeight){
        for (var i=0; i < this.cell.length; i++){
            var divWidth2 = pixels;
            var divHeight2 = pixels;
            this.cell[i].style.height = divHeight2 + "px";
            this.cell[i].style.width = divWidth2 + "px";
        }
        var boardWidth = divWidth2 * inputWidth;
        var boardHeight = divHeight2 * inputHeight;
        this.board.style.width = boardWidth + "px";
        this.board.style.height = boardHeight + "px";
    }

};

var flex_cont = document.querySelector(".flex-container");
var first_page = document.querySelector("#first-page");
var inputSetHeight = parseInt(document.querySelector("#set-height").value);
var inputSetWidth = parseInt(document.querySelector("#set-width").value);
var color = document.querySelector("#set-color").value;
var game = new GameOfLife(inputSetWidth, inputSetHeight, color);



var start = document.querySelector(".start");
start.addEventListener("click", function () {
    var inputHeight = parseInt(document.querySelector("#set-height").value);
    var inputWidth = parseInt(document.querySelector("#set-width").value);
    var inputColor = document.querySelector("#set-color").value;

    game = new GameOfLife(inputWidth, inputHeight, inputColor);
    if (inputWidth >=10 && inputWidth <=100 && inputHeight >=10 && inputHeight <= 100 && typeof inputWidth === "number"
    && typeof inputHeight === "number"){
        first_page.style.display = "none";
        flex_cont.style.display = "flex";
        game.board.style.display = "block";
        if (inputHeight > 40 && inputHeight < 70){
            game.createBoard();
            game.sizeOfDivs(7, inputWidth, inputHeight);
            game.firstGlider();

        } else if (inputHeight >= 70){
            game.createBoard();
            game.sizeOfDivs(5, inputWidth, inputHeight);
            game.firstGlider();

        } else {
            game.createBoard();
            game.firstGlider();
        }

    }
});


//
// game.computeNextGeneration();
// game.printNextGeneration();
// console.log(game.computeCellNextState(1, 2));
// console.log(game.cell);
// game.startAnimation();



var play = document.querySelector("#play");

play.addEventListener("click", function(){
    game.startAnimation();

});

var pause = document.querySelector("#pause");
pause.addEventListener("click", function(){
    game.stopGame();

});

var refresh = document.querySelector("#refresh");
refresh.addEventListener("click", function () {
    flex_cont.style.display = "none";
    first_page.style.display = "flex";
    window.location.reload();
});

