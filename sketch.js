var guitarGroup,trumpetGroup,drumGroup,bassGroup,EguitarGroup,harpGroup,pianoGroup,saxophoneGroup,guitarGroup,voilinGroup;
var trumpet,drum,bass,Eguitar,harp,piano,saxophone,guitar,voilin;
var trumpetI,drumI,bassI,EguitarI,harpI,pianoI,saxophoneI,guitarI,voilinI;
var gamestate=0;
var survival=0;
var score = 0;
function preload(){
  trumpetI=loadImage("images/thumpet.png");
  drumI=loadImage("images/drum.png");
  bassI=loadImage("images/bass.png");
  EguitarI=loadImage("images/E guitar.png");
  harpI=loadImage("images/harp.png");
  pianoI=loadImage("images/piano.png");
  saxophoneI=loadImage("images/saxophone.png");
  guitarI=loadImage("images/guitar.png");
  voilinI=loadImage("images/violin.png");
}
function setup(){
  createCanvas(displayWidth-65,displayHeight-135);
  
  guitar = createSprite(displayWidth-230, displayHeight-350);
  guitar.addImage(guitarI);
  guitar.scale=0.75;

  trumpet = createSprite(displayWidth-230, displayHeight-630);
  trumpet.addImage(trumpetI);
  trumpet.scale=0.75;

  drum = createSprite(displayWidth-230, displayHeight-910);
  drum.addImage(drumI);
  drum.scale=0.75;

  bass = createSprite(displayWidth-920, displayHeight-350);
  bass.addImage(bassI);
  bass.scale=0.75;

  Eguitar = createSprite(displayWidth-1500, displayHeight-350);
  Eguitar.addImage(EguitarI);
  Eguitar.scale=0.75;

  harp = createSprite(displayWidth-920, displayHeight-630);
  harp.addImage(harpI);
  harp.scale=0.75;

  piano = createSprite(displayWidth-1500, displayHeight-630);
  piano.addImage(pianoI);
  piano.scale=0.75;

  saxophone = createSprite(displayWidth-920, displayHeight-910);
  saxophone.addImage(saxophoneI);
  saxophone.scale=0.75;

  voilin = createSprite(displayWidth-1500, displayHeight-910);
  voilin.addImage(voilinI);
  voilin.scale=0.75;

  guitarGroup= new Group();
  trumpetGroup = new Group();
  drumGroup= new Group();
  bassGroup = new Group();
  EguitarGroup= new Group();
  harpGroup = new Group();
  pianoGroup= new Group();
  saxophoneGroup = new Group();
  voilinGroup= new Group();
}
function draw() {
  if(score%2===0&&score>0){
    survival+=1;
    console.log(trumpet);
  }
  background("white");
  text("score:"+score, 0, 15);
  text("survival:"+survival, 0,25);
  
   if (mousePressedOver(guitar)&&gamestate===0){
    voilin.destroy();
    saxophone.destroy();
    piano.destroy();
    harp.destroy();
    Eguitar.destroy();
    bass.destroy();
    drum.destroy();
    trumpet.destroy();
    gamestate=1;
   }
   if (mousePressedOver(trumpet)){
    voilin.destroy();
    saxophone.destroy();
    piano.destroy();
    harp.destroy();
    Eguitar.destroy();
    bass.destroy();
    drum.destroy();
    guitar.destroy();
    gamestate=2;
   }
   if (mousePressedOver(drum)){
    voilin.destroy();
    saxophone.destroy();
    piano.destroy();
    harp.destroy();
    Eguitar.destroy();
    bass.destroy();
    guitar.destroy();
    trumpet.destroy();
    gamestate=3;
   }
   if (mousePressedOver(bass)){
    voilin.destroy();
    saxophone.destroy();
    piano.destroy();
    harp.destroy();
    Eguitar.destroy();
    guitar.destroy();
    drum.destroy();
    trumpet.destroy();
    gamestate=4;
   }
   if (mousePressedOver(Eguitar)){
    voilin.destroy();
    saxophone.destroy();
    piano.destroy();
    harp.destroy();
    guitar.destroy();
    bass.destroy();
    drum.destroy();
    trumpet.destroy();
    gamestate=5;
   }
   if (mousePressedOver(harp)){
    voilin.destroy();
    saxophone.destroy();
    piano.destroy();
    guitar.destroy();
    Eguitar.destroy();
    bass.destroy();
    drum.destroy();
    trumpet.destroy();
    gamestate=6;
   }
   if (mousePressedOver(piano)){
    voilin.destroy();
    saxophone.destroy();
    guitar.destroy();
    harp.destroy();
    Eguitar.destroy();
    bass.destroy();
    drum.destroy();
    trumpet.destroy();
    gamestate=7;
   }
   if (mousePressedOver(voilin)){
    guitar.destroy();
    saxophone.destroy();
    piano.destroy();
    harp.destroy();
    Eguitar.destroy();
    bass.destroy();
    drum.destroy();
    trumpet.destroy();
    gamestate=8;
   }
   if (mousePressedOver(saxophone)){
    voilin.destroy();
    guitar.destroy();
    piano.destroy();
    harp.destroy();
    Eguitar.destroy();
    bass.destroy();
    drum.destroy();
    trumpet.destroy();
    gamestate=9;
   }
    if (gamestate===1){
      guitar.x=mouseX;
      guitar.y=mouseY;
      violin1();
      saxophone1();
      piano1();
      harp1();
      Eguitar1();
      bass1();
      drum1();
      trumpet1();
      guitar1();
      if(guitar.isTouching(guitarGroup)){
        score = score +1
        guitarGroup.destroyEach();
      }
      if(guitar.isTouching(voilinGroup)){
        gamestate=100;
      }
      if(guitar.isTouching(saxophoneGroup)){
        gamestate=100;
      }
      if(guitar.isTouching(pianoGroup)){
        gamestate=100;
      }
      if(guitar.isTouching(harpGroup)){
        gamestate=100;
      }
      if(guitar.isTouching(bassGroup)){
        gamestate=100;
      }
      if(guitar.isTouching(drumGroup)){
        gamestate=100;
      }
      if(guitar.isTouching(trumpetGroup)){
        gamestate=100;
      }
      if(guitar.isTouching(pianoGroup)){
        gamestate=100;
      }if(guitar.isTouching(EguitarGroup)){
        gamestate=100;
      }

    }
    if (gamestate===2){
      trumpet.x=mouseX;
      trumpet.y=mouseY;
      violin1();
      saxophone1();
      piano1();
      harp1();
      Eguitar1();
      bass1();
      drum1();
      guitar1();
      trumpet1();
      if(trumpet.isTouching(trumpetGroup)){
        score = score +1
        trumpetGroup.destroyEach();
      }
      if(trumpet.isTouching(voilinGroup)){
        gamestate=100;
      }
      if(trumpet.isTouching(saxophoneGroup)){
        gamestate=100;
      }
      if(trumpet.isTouching(pianoGroup)){
        gamestate=100;
      }
      if(trumpet.isTouching(harpGroup)){
        gamestate=100;
      }
      if(trumpet.isTouching(bassGroup)){
        gamestate=100;
      }
      if(trumpet.isTouching(drumGroup)){
        gamestate=100;
      }
      if(trumpet.isTouching(guitarGroup)){
        gamestate=100;
      }
      if(trumpet.isTouching(pianoGroup)){
        gamestate=100;
      }
      if(trumpet.isTouching(EguitarGroup)){
        gamestate=100;
      }
    }if (gamestate===3){
      drum.x=mouseX;
      drum.y=mouseY;
      violin1();
      saxophone1();
      piano1();
      harp1();
      Eguitar1();
      bass1();
      trumpet1();
      guitar1();
      drum1();
      if(drum.isTouching(drumGroup)){
        score = score +1
        drumGroup.destroyEach();
      }
      if(drum.isTouching(voilinGroup)){
        gamestate=100;
      }
      if(drum.isTouching(saxophoneGroup)){
        gamestate=100;
      }
      if(drum.isTouching(pianoGroup)){
        gamestate=100;
      }
      if(drum.isTouching(harpGroup)){
        gamestate=100;
      }
      if(drum.isTouching(bassGroup)){
        gamestate=100;
      }
      if(drum.isTouching(guitarGroup)){
        gamestate=100;
      }
      if(drum.isTouching(trumpetGroup)){
        gamestate=100;
      }
      if(drum.isTouching(pianoGroup)){
        gamestate=100;
      }
      if(drum.isTouching(EguitarGroup)){
        gamestate=100;
      }
    }if (gamestate===4){
      bass.x=mouseX;
      bass.y=mouseY;
      violin1();
      saxophone1();
      piano1();
      harp1();
      Eguitar1();
      trumpet1();
      drum1();
      guitar1();
      bass1();
      if(bass.isTouching(bassGroup)){
        score = score +1
        bassGroup.destroyEach();
      }
      if(bass.isTouching(voilinGroup)){
        gamestate=100;
      }
      if(bass.isTouching(saxophoneGroup)){
        gamestate=100;
      }
      if(bass.isTouching(pianoGroup)){
        gamestate=100;
      }
      if(bass.isTouching(harpGroup)){
        gamestate=100;
      }
      if(bass.isTouching(drumGroup)){
        gamestate=100;
      }
      if(bass.isTouching(guitarGroup)){
        gamestate=100;
      }
      if(bass.isTouching(trumpetGroup)){
        gamestate=100;
      }
      if(bass.isTouching(pianoGroup)){
        gamestate=100;
      }
      if(drum.isTouching(EguitarGroup)){
        gamestate=100;
      }
    }if (gamestate===5){
      Eguitar.x=mouseX;
      Eguitar.y=mouseY;
      violin1();
      saxophone1();
      piano1();
      harp1();
      Eguitar1();
      trumpet1();
      bass1();
      drum1();
      guitar1();
      if(Eguitar.isTouching(EguitarGroup)){
        score = score +1
        drumGroup.destroyEach();
      }
      if(Eguitar.isTouching(voilinGroup)){
        gamestate=100;
      }
      if(Eguitar.isTouching(saxophoneGroup)){
        gamestate=100;
      }
      if(Eguitar.isTouching(pianoGroup)){
        gamestate=100;
      }
      if(Eguitar.isTouching(harpGroup)){
        gamestate=100;
      }
      if(Eguitar.isTouching(bassGroup)){
        gamestate=100;
      }
      if(Eguitar.isTouching(guitarGroup)){
        gamestate=100;
      }
      if(Eguitar.isTouching(trumpetGroup)){
        gamestate=100;
      }
      if(Eguitar.isTouching(pianoGroup)){
        gamestate=100;
      }
      if(Eguitar.isTouching(drumGroup)){
        gamestate=100;
      }
    }if (gamestate===6){
      harp.x=mouseX;
      harp.y=mouseY;
      violin1();
      saxophone1();
      piano1();
      harp1();
      Eguitar1();
      bass1();
      drum1();
      guitar1();
      trumpet1();
      if(harp.isTouching(harpGroup)){
        score = score +1
        harpGroup.destroyEach();
      }
      if(harp.isTouching(voilinGroup)){
        gamestate=100;
      }
      if(harp.isTouching(saxophoneGroup)){
        gamestate=100;
      }
      if(harp.isTouching(pianoGroup)){
        gamestate=100;
      }
      if(harp.isTouching(harpGroup)){
        gamestate=100;
      }
      if(harp.isTouching(bassGroup)){
        gamestate=100;
      }
      if(harp.isTouching(guitarGroup)){
        gamestate=100;
      }
      if(harp.isTouching(trumpetGroup)){
        gamestate=100;
      }
      if(harp.isTouching(pianoGroup)){
        gamestate=100;
      }
      if(harp.isTouching(EguitarGroup)){
        gamestate=100;
      }
    }if (gamestate===7){
      piano.x=mouseX;
      piano.y=mouseY;
      violin1();
      saxophone1();
      piano1();
      harp1();
      Eguitar1();
      bass1();
      drum1();
      guitar1();
      trumpet1();
      if(piano.isTouching(pianoGroup)){
        score = score +1
        drumGroup.destroyEach();
      }
      if(piano.isTouching(voilinGroup)){
        gamestate=100;
      }
      if(piano.isTouching(saxophoneGroup)){
        gamestate=100;
      }
      if(piano.isTouching(drumGroup)){
        gamestate=100;
      }
      if(piano.isTouching(harpGroup)){
        gamestate=100;
      }
      if(piano.isTouching(bassGroup)){
        gamestate=100;
      }
      if(piano.isTouching(guitarGroup)){
        gamestate=100;
      }
      if(piano.isTouching(trumpetGroup)){
        gamestate=100;
      }
      if(piano.isTouching(pianoGroup)){
        gamestate=100;
      }
      if(piano.isTouching(EguitarGroup)){
        gamestate=100;
      }
    }if (gamestate===9){
      saxophone.x=mouseX;
      saxophone.y=mouseY;
      violin1();
      saxophone1();
      piano1();
      harp1();
      Eguitar1();
      bass1();
      drum1();
      guitar1();
      trumpet1();
      if(saxophone.isTouching(saxophoneGroup)){
        score = score +1
        saxophoneGroup.destroyEach();
      }
      if(saxophone.isTouching(voilinGroup)){
        gamestate=100;
      }
      if(saxophone.isTouching(saxophoneGroup)){
        gamestate=100;
      }
      if(saxophone.isTouching(pianoGroup)){
        gamestate=100;
      }
      if(saxophone.isTouching(harpGroup)){
        gamestate=100;
      }
      if(saxophone.isTouching(bassGroup)){
        gamestate=100;
      }
      if(saxophone.isTouching(guitarGroup)){
        gamestate=100;
      }
      if(saxophone.isTouching(trumpetGroup)){
        gamestate=100;
      }
      if(saxophone.isTouching(pianoGroup)){
        gamestate=100;
      }
      if(saxophone.isTouching(EguitarGroup)){
        gamestate=100;
      }
    }
    if (gamestate===8){
      voilin.x=mouseX;
      voilin.y=mouseY;
      violin1();
      saxophone1();
      piano1();
      harp1();
      Eguitar1();
      bass1();
      drum1();
      guitar1();
      trumpet1();
      if(voilin.isTouching(voilinGroup)){
        score = score +1
        voilinGroup.destroyEach();
      }
      if(voilin.isTouching(voilinGroup)){
        gamestate=100;
      }
      if(voilin.isTouching(saxophoneGroup)){
        gamestate=100;
      }
      if(voilin.isTouching(pianoGroup)){
        gamestate=100;
      }
      if(voilin.isTouching(harpGroup)){
        gamestate=100;
      }
      if(voilin.isTouching(bassGroup)){
        gamestate=100;
      }
      if(voilin.isTouching(guitarGroup)){
        gamestate=100;
      }
      if(voilin.isTouching(trumpetGroup)){
        gamestate=100;
      }
      if(voilin.isTouching(pianoGroup)){
        gamestate=100;
      }
      if(voilin.isTouching(EguitarGroup)){
        gamestate=100;
      }
    }
    if(gamestate===100){
      textSize(50);
      text("You Lose! try again",1000,1000)
    }

  drawSprites();
}

function guitar1(){
    if (frameCount % 160 === 0) {
      var guitarX = createSprite(displayWidth-65,120,40,10);
      guitarX.y = Math.round(random(80,1500));
      guitarX.addImage(guitarI);
      guitarX.scale = 0.5;
      guitarX.velocityX = -7;
      
       guitarX.lifetime = displayWidth-65;
      
      guitarGroup.add(guitarX);    
    }
}

function trumpet1(){
  if (frameCount % 190 === 0) {
    var trumpetX = createSprite(displayWidth-65,120,40,10);
    trumpetX.y = Math.round(random(80,1500));
    trumpetX.addImage(trumpetI);
    trumpetX.scale = 0.5;
    trumpetX.velocityX = -7;
    
    trumpetX.lifetime = displayWidth-65;
    
    trumpetGroup.add(trumpetX);}
}

function drum1(){
  if (frameCount % 220 === 0) {
    var drumX = createSprite(displayWidth-65,120,40,10);
    drumX.y = Math.round(random(80,1500));
    drumX.addImage(drumI);
    drumX.scale = 0.5;
    drumX.velocityX = -7;
    
    drumX.lifetime = displayWidth-65;
    
    drumGroup.add(drumX);}
}

function bass1(){
  if (frameCount % 260 === 0) {
    var bassX = createSprite(displayWidth-65,120,40,10);
    bassX.y = Math.round(random(80,1500));
    bassX.addImage(bassI);
    bassX.scale = 0.5;
    bassX.velocityX = -7;
    
    bassX.lifetime = displayWidth-65;
    
    bassGroup.add(bassX);}
}

function Eguitar1(){
  if (frameCount % 290 === 0) {
    var EguitarX = createSprite(displayWidth-65,120,40,10);
    EguitarX.y = Math.round(random(80,1500));
    EguitarX.addImage(EguitarI);
    EguitarX.scale = 0.5;
    EguitarX.velocityX = -7;
    
    EguitarX.lifetime = displayWidth-65;
    
    EguitarGroup.add(EguitarX);}
}

function harp1(){
  if (frameCount % 190 === 0) {
    var harpX = createSprite(displayWidth-65,120,40,10);
    harpX.y = Math.round(random(80,1500));
    harpX.addImage(harpI);
    harpX.scale = 0.5;
    harpX.velocityX = -7;
    
    harpX.lifetime = displayWidth-65;
    
    harpGroup.add(harpX);}
}

function piano1(){
  if (frameCount % 250 === 0) {
    var pianoX = createSprite(displayWidth-65,120,40,10);
    pianoX.y = Math.round(random(80,1500));
    pianoX.addImage(pianoI);
    pianoX.scale = 0.5;
    pianoX.velocityX = -7;
    
    pianoX.lifetime = displayWidth-65;
    
    pianoGroup.add(pianoX);}
}

function saxophone1(){
  if (frameCount % 300 === 0) {
    var saxophoneX = createSprite(displayWidth-65,120,40,10);
    saxophoneX.y = Math.round(random(80,1500));
    saxophoneX.addImage(saxophoneI);
    saxophoneX.scale = 0.5;
    saxophoneX.velocityX = -7;
    
    saxophoneX.lifetime = displayWidth-65;
    
    saxophoneGroup.add(saxophoneX);}
}

function violin1(){
  if (frameCount % 370 === 0) {
    var violinX = createSprite(displayWidth-65,120,40,10);
    violinX.y = Math.round(random(80,1500));
    violinX.addImage(voilinI);
    violinX.scale = 0.5;
    violinX.velocityX = -7;
    
    violinX.lifetime = displayWidth-65;
    
    voilinGroup.add(violinX);}
}
