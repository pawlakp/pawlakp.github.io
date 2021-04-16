const memoryGame = {
    gracz:1, 
    tileCount : 16, 
    tileOnRow : 4, 
    divBoard : null, 
    divPktp1:1,
    divPktp2:1,
    pkt1:0,
    pkt2:0,
    tiles : [], 
    tilesChecked : [], 
    tilesImg : [ 
        "images/element1.png",
        "images/element2.png",
        "images/element3.png",
        "images/element4.png",
        "images/element5.png",
        "images/element6.png",
        "images/element7.png",
        "images/element8.png",
    ],
    canGet : true, 
    tilePairs : 0, 

    tileClick(e) {
        if (this.canGet) {
         
            if (!this.tilesChecked[0] || (this.tilesChecked[0].dataset.index !== e.target.dataset.index)) {
                this.tilesChecked.push(e.target);
                e.target.style.backgroundImage = `url(${this.tilesImg[e.target.dataset.cardType]})`;
            }

            if (this.tilesChecked.length === 2) {

               

                this.canGet = false;
                if (this.tilesChecked[0].dataset.cardType === this.tilesChecked[1].dataset.cardType) {
                    setTimeout(() => this.deleteTiles(), 500);
                    setTimeout(() => this.zmiana(), 500);
                } else {
                    setTimeout(() => this.resetTiles(), 500);
                    setTimeout(() => this.zmiana(), 500);
                }

            }
        }
    },

    zmiana(){
         if(this.gracz==2){
                    this.gracz=1;

                    document.getElementById("player1").style.color="red";
                    document.getElementById("player2").style.color="white";

                }else{
                    this.gracz++;
                    
                    document.getElementById("player2").style.color="red";
                    document.getElementById("player1").style.color="white";

                }

    },

    deleteTiles() {

        this.tilesChecked.forEach(el => {
            const emptyDiv = document.createElement("div");
            el.after(emptyDiv);
            el.remove();
        });

        this.canGet = true;
        this.tilesChecked = [];

        this.tilePairs++;

         if(this.gracz==1){
            this.pkt1++;
            document.getElementById("pktp1").innerText=this.pkt1;
        }else{
            this.pkt2++;
            document.getElementById("pktp2").innerText=this.pkt2;
        }


        if (this.tilePairs >= this.tileCount / 2) {
            if(this.pkt1>this.pkt2){alert("Wygrywa gracz 1");}
            else{
                alert("Wygrywa gracz 2");
            }
            
        }
    },

    resetTiles() {
        this.tilesChecked.forEach(el => el.style.backgroundImage = "");
        this.tilesChecked = [];
        this.canGet = true;
    },


    startGame() {
          document.getElementById("pomoc").remove();
      
        this.divBoard = document.querySelector(".game-board");
        this.divBoard.innerHTML = "";

        this.divPktp1=document.getElementById("pktp1");
        this.divPktp1.innerHTML="0";
        this.divPktp2=document.getElementById("pktp2");
        this.divPktp2.innerHTML="0";

        document.getElementById("player1").style.color="red";
        document.getElementById("player2").style.color="white";
        document.getElementById("player2").innerText="Gracz2";

       
        this.tiles = [];
        this.tilesChecked = [];
        this.gracz=1;
        this.canGet = true;
        this.tilePairs = 0;

        for (let i=0; i<this.tileCount; i++) {
            this.tiles.push(Math.floor(i/2));
        }

        for (let i=this.tileCount-1; i>0; i--) {
            const swap = Math.floor(Math.random()*i);
            const tmp = this.tiles[i];
            this.tiles[i] = this.tiles[swap];
            this.tiles[swap] = tmp;
        }

        for (let i=0; i<this.tileCount; i++) {
            const tile = document.createElement("div");
            tile.classList.add("game-tile");
            this.divBoard.appendChild(tile);

            tile.dataset.cardType = this.tiles[i];
            tile.dataset.index = i;

            tile.addEventListener("click", e => this.tileClick(e));
        }
    }
}

const memoryGameBOT = {
    gracz:1, 
    tileCount : 16, 
    tileOnRow : 4, 
    divBoard : null, 
    divPktp1:1,
    divPktp2:1,
    pkt1:0,
    pkt2:0,
    tiles : [], 
    tilesChecked : [], 
    tilesImg : [ 
        "images/element1.png",
        "images/element2.png",
        "images/element3.png",
        "images/element4.png",
        "images/element5.png",
        "images/element6.png",
        "images/element7.png",
        "images/element8.png",
    ],
    canGet : true, 
    tilePairs : 0, 

    tileClick(e) {
        if (this.canGet) {
            
            if (!this.tilesChecked[0] || (this.tilesChecked[0].dataset.index !== e.target.dataset.index)) {
                this.tilesChecked.push(e.target)
                e.target.style.backgroundImage = `url(${this.tilesImg[e.target.dataset.cardType]})`;
            }

            if (this.tilesChecked.length === 2) {

               

                this.canGet = false;
                if (this.tilesChecked[0].dataset.cardType === this.tilesChecked[1].dataset.cardType) {
                    setTimeout(() => this.deleteTiles(), 500);
                    setTimeout(() => this.zmiana(), 500);
                } else {
                    setTimeout(() => this.resetTiles(), 500);
                    setTimeout(() => this.zmiana(), 500);
                }

            }
        }
    },

    zmiana(){

         if(this.gracz==2){
                    this.gracz=1;

                    document.getElementById("player1").style.color="red";
                    document.getElementById("player2").style.color="white";

                }else{
                    this.gracz++;
                    
                    document.getElementById("player2").style.color="red";
                    document.getElementById("player1").style.color="white";
                    setTimeout(() => this.ruchBot(), 500);
                }   

    },
    
    ruchBot(){
        i=0;
        var ruch1=Math.floor(Math.random()*16);
        var ruch2=Math.floor(Math.random()*16);
        var test=false;
        var test1=false;
        var wybor1;
        var wybor2;
        do{
           
            if(ruch2==ruch1){ 
                    ruch2=Math.floor(Math.random()*15);
                    ruch1=Math.floor(Math.random()*15);
                }else{
                    if(document.getElementsByClassName("game-tile")[ruch1] !=undefined && document.getElementsByClassName("game-tile")[ruch2] !=undefined){
                       
                        wybor1=document.getElementsByClassName("game-tile")[ruch1];
                        wybor2=document.getElementsByClassName("game-tile")[ruch2];
                        i++;
                    }
                    else{
                        i++;
                        this.zmiana()    
                    }
                
                    }
            
        }while(i<1)

        
        if(wybor1.dataset.cardType==wybor2.dataset.cardType){
            this.pkt2++;
            document.getElementById("pktp2").innerText=this.pkt2;
            document.getElementsByClassName("game-tile")[ruch1].remove()
            document.getElementsByClassName("game-tile")[ruch2].remove()
        }


        this.zmiana();


    },

    deleteTiles() {

        this.tilesChecked.forEach(el => {
            const emptyDiv = document.createElement("div");
            el.after(emptyDiv);
            el.remove();
        });

        this.canGet = true;
        this.tilesChecked = [];

        this.tilePairs++;

         if(this.gracz==1){
            this.pkt1++;
            document.getElementById("pktp1").innerText=this.pkt1;
        }else{
            this.pkt2++;
            document.getElementById("pktp2").innerText=this.pkt2;
        }


        if (this.tilePairs >= this.tileCount / 2) {
            alert("Udało ci się odgadnąć wszystkie obrazki");
        }
    },

    resetTiles() {
        this.tilesChecked.forEach(el => el.style.backgroundImage = "");
        this.tilesChecked = [];
        this.canGet = true;
    },


    startGame() {
        this.divBoard = document.querySelector(".game-board");
        this.divBoard.innerHTML = "";

        this.divPktp1=document.getElementById("pktp1");
        this.divPktp1.innerHTML="0";
        this.divPktp2=document.getElementById("pktp2");
        this.divPktp2.innerHTML="0";

        document.getElementById("player1").style.color="red";
        document.getElementById("player2").style.color="white";
        document.getElementById("player2").innerText="Gracz2";

        
        this.tiles = [];
        this.tilesChecked = [];
        this.gracz=1;
        this.canGet = true;
        this.tilePairs = 0;

        
        for (let i=0; i<this.tileCount; i++) {
            this.tiles.push(Math.floor(i/2));
        }

        
        for (let i=this.tileCount-1; i>0; i--) {
            const swap = Math.floor(Math.random()*i);
            const tmp = this.tiles[i];
            this.tiles[i] = this.tiles[swap];
            this.tiles[swap] = tmp;
        }

        for (let i=0; i<this.tileCount; i++) {
            const tile = document.createElement("div");
            tile.classList.add("game-tile");
            this.divBoard.appendChild(tile);

            tile.dataset.cardType = this.tiles[i];
            tile.dataset.index = i;

            tile.addEventListener("click", e => this.tileClick(e));
        }
    }
}

function loadGame(){
   var divSquare = $('#pomoc');
   divSquare.html('O działa');
}

function loadKim(){
    var divGameBoard= $('.game-board');
    divGameBoard.empty();
}