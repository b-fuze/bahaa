var DartMonkeyPrice = 200;
const DartMonkey = function(x, y, Pos){
  this.x = x; this.y = y; this.Pos = Pos;
  this.draw = function(){
      context.drawImage(DartMonkeySrc, x, y, 50, 50);
  };
  DartMonkeyPrice = 200*Difficulty.Prices;
};



function ClickedOnDartMonkey(){
  document.body.style.cursor = "none";
  
  TowerIsClicked = true;
  TowerSelected = DartMonkeySrc;
  
  window.addEventListener("mousemove", function(e){
    hoverX = e.pageX;
    hoverY = e.pageY;
    //console.log(hoverX, hoverY);
  });
  
  window.addEventListener ("click", function(e) {
    if(TowerIsClicked){
      TowerPos = Math.floor(e.pageY / SquareSize) * row + Math.floor(e.pageX / SquareSize);
      if(MapSelected[TowerPos] == 1){
        if(!PosTaken){
          TowerIsClicked = false;
          Towers.push(new DartMonkey(e.pageX-25, e.pageY-25, TowerPos));
          Money -= DartMonkeyPrice;
          document.body.style.cursor = "default";
        }
      }
    }
  });
}


