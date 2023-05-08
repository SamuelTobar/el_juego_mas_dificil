var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","4b322c48-fc57-47e7-ba76-9c82d7f5cee7","e1ec2b25-f084-4767-b939-d76a0fa8f559","57854f62-0566-455b-bfe5-fb0adf29192a","17a7b8ed-25fe-4514-9da6-e8e3b2ef943b","8b2b7f70-a377-4342-ba5a-7ea0a2b40fe6","08cd3089-f678-4403-b6ba-60efa59e5141"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"FPlWGiwP_HBSlLUktAyCPKlo_T0K_Ipw","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"OrRdDTSh2zwvwX9SeYe0IJ0Co_b_hnFh","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"4b322c48-fc57-47e7-ba76-9c82d7f5cee7":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/fDLnJ_hcVaJPc4oh8krv.gPzYVt1zz6r/category_faces/kidportrait_13.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"fDLnJ_hcVaJPc4oh8krv.gPzYVt1zz6r","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/fDLnJ_hcVaJPc4oh8krv.gPzYVt1zz6r/category_faces/kidportrait_13.png"},"e1ec2b25-f084-4767-b939-d76a0fa8f559":{"name":"enemy1","sourceUrl":"assets/api/v1/animation-library/gamelab/_cxfD7LPQtM9..A7tXJT7nv_hWkLkcG_/category_fantasy/monster_17.png","frameSize":{"x":278,"y":376},"frameCount":1,"looping":true,"frameDelay":2,"version":"_cxfD7LPQtM9..A7tXJT7nv_hWkLkcG_","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":278,"y":376},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_cxfD7LPQtM9..A7tXJT7nv_hWkLkcG_/category_fantasy/monster_17.png"},"57854f62-0566-455b-bfe5-fb0adf29192a":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/l9wpOFX9zNsawNAqqiXDvX139CaABJG2/category_fantasy/monster_04.png","frameSize":{"x":268,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"l9wpOFX9zNsawNAqqiXDvX139CaABJG2","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":268,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/l9wpOFX9zNsawNAqqiXDvX139CaABJG2/category_fantasy/monster_04.png"},"17a7b8ed-25fe-4514-9da6-e8e3b2ef943b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/8H.vuDHZpn6sWS8S6oJAvrCUVGJ4UFvE/category_fantasy/monster_21.png","frameSize":{"x":249,"y":373},"frameCount":1,"looping":true,"frameDelay":2,"version":"8H.vuDHZpn6sWS8S6oJAvrCUVGJ4UFvE","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":249,"y":373},"rootRelativePath":"assets/api/v1/animation-library/gamelab/8H.vuDHZpn6sWS8S6oJAvrCUVGJ4UFvE/category_fantasy/monster_21.png"},"8b2b7f70-a377-4342-ba5a-7ea0a2b40fe6":{"name":"monster_18_1","sourceUrl":"assets/api/v1/animation-library/gamelab/2de9sEWYWWzKx26s6d8L64mN3b5hcuSw/category_fantasy/monster_18.png","frameSize":{"x":292,"y":385},"frameCount":1,"looping":true,"frameDelay":2,"version":"2de9sEWYWWzKx26s6d8L64mN3b5hcuSw","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":292,"y":385},"rootRelativePath":"assets/api/v1/animation-library/gamelab/2de9sEWYWWzKx26s6d8L64mN3b5hcuSw/category_fantasy/monster_18.png"},"08cd3089-f678-4403-b6ba-60efa59e5141":{"name":"monster_10_1","sourceUrl":"assets/api/v1/animation-library/gamelab/T4AU37KxMaATY4BRWEFSCdd0lBKatf2L/category_fantasy/monster_10.png","frameSize":{"x":151,"y":323},"frameCount":1,"looping":true,"frameDelay":2,"version":"T4AU37KxMaATY4BRWEFSCdd0lBKatf2L","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":151,"y":323},"rootRelativePath":"assets/api/v1/animation-library/gamelab/T4AU37KxMaATY4BRWEFSCdd0lBKatf2L/category_fantasy/monster_10.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var hero = createSprite(200,345,200,345);
hero.shapeColor="red";

var enemy1 = createSprite(200,250,10,10);
enemy1.shapeColor="red";

var enemy2 = createSprite(200,150,10,10);
enemy2.shapeColor="red";

var enemy3 = createSprite(200,50,10,10);
enemy3.shapeColor="red";

var net = createSprite(200,5,200,20);
net.shapeColor="red";
var enemy4 = createSprite(200, 200,101,0);
var enemy5 = createSprite(200, 100,10,10);


var goal =0;
var death = 0;

hero.setAnimation("hero1");
hero.scale=0.1;
enemy1.setAnimation("enemy1");
enemy1.scale=0.1;
enemy2.setAnimation("enemy2");
enemy2.scale=0.1;
enemy3.setAnimation("enemy3");
enemy3.scale=0.1;
enemy4.setAnimation("monster_18_1");
enemy4.scale=0.1;
enemy5.setAnimation("monster_10_1");
enemy5.scale=0.1;

enemy1.velocityX=-14;
enemy2.velocityX=11;
enemy3.velocityX=-14;
enemy4.velocityX=15;
enemy5.velocityX=-19;


function draw() {
   background("green");
   
//fondo(b);

createEdgeSprites();



hero.collide(edges);
enemy1.bounceOff(edges);
enemy2.bounceOff(edges);
enemy3.bounceOff(edges);
enemy4.bounceOff(edges);
enemy5.bounceOff(edges);

if(keyDown(UP_ARROW)){
  hero.y=hero.y-7;
}

if(keyDown(DOWN_ARROW)){
  hero.y=hero.y+7;
}

if(keyDown(LEFT_ARROW)){
  hero.x=hero.x-7;
}

if(keyDown(RIGHT_ARROW)){
  hero.x=hero.x+7;
}

if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)||hero.isTouching(enemy4)||hero.isTouching(enemy5)){
  playSound("assets/category_explosion/melodic_loss_6.mp3");
  hero.x=200;
  hero.y=350;
  death = death+1;
}
if(hero.isTouching(net)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  hero.x=200;
  hero.y=345;
  goal=goal+1;
}
textSize(20);
  fill("blue");
  text("Goals:"+goal,320,350);
  

textSize(20);
  fill("blue");
  text("death:"+death,20,350);
  
drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
