function scene2() {
  console.log('Executing Scene 2');
  // Setup Stage
  var stage = document.querySelector('#stage');
  // Setup Cast
  var castle = document.querySelector('#castle');
  var stageImg = stage.querySelector('#stage-img');
  var castleImgSrc = castle.getAttribute('src');
  stageImg.setAttribute('src', castleImgSrc);

  // Character 1
  var nedContainer = document.createElement('div');
  stage.append(nedContainer)
    nedContainer.style.position = 'absolute';
    nedContainer.style.width = '10%';
    nedContainer.style.height = '44%';
    nedContainer.style.top = '50%';
    nedContainer.style.left = '50%';
    nedContainer.style.height = '37%';
    nedContainer.style.top = '55%';
    nedContainer.style.left = '25%';

  var ned = document.querySelector('#ned');
    nedContainer.append(ned);
    ned.style.width = '70%';
    ned.style.position = 'absolute';
    ned.style.top = 0;

  var leather = document.querySelector('#leather-armour');
    nedContainer.append(leather);
    leather.style.position = 'absolute';
    leather.style.bottom = 0;

  // Character 2

var joffreyContainer = document.createElement('div');
  stage.append(joffreyContainer);
  joffreyContainer.style.position = 'absolute';
  joffreyContainer.style.width = '9%';
  joffreyContainer.style.height = '35%';
  joffreyContainer.style.top = '55%';
  joffreyContainer.style.left = '55%';

var joffrey = document.querySelector('#joffrey');
  joffreyContainer.append(joffrey);
  joffrey.style.width = '75%'
  joffrey.style.position = 'absolute'
  joffrey.style.left = '33%'

var king = document.querySelector('#king')
    joffreyContainer.append(king);
    king.style.position = 'absolute'
    king.style.bottom = 0


  // Setup Props
  sword = document.querySelector('#sword')
  stage.append(sword)
  sword.style.position = 'absolute'
  sword.style.top = '77%'
  sword.style.left = '31%'
  sword.style.height = '5%'
  sword.style.transform = 'rotateY(150deg)'
  // Prop 1

  // Prop 2

  // Action!
  // Inital Frame
  frame(function() {
    sword.style.top = '77%'
    sword.style.left = '31%'
  })

  frame(function(){
    sword.style.top = '74%'
    sword.style.left = '36%'
  })


// Middle Frame
  frame(function() {
    sword.style.top = '71%'
    sword.style.left = '41%'
  })

  frame(function(){
    sword.style.top = '67%'
    sword.style.left = '47%'
  })


// Final Frame
  frame(function() {
    sword.style.top = '64%'
    sword.style.left = '53%'
  })
  // Stage direction 1

  frame(function() {
    joffrey.style.top = 0
    joffrey.style.left = '33%'
  })

  frame(function() {
    joffrey.style.top = '25%'
    joffrey.style.left = '120%'
    joffrey.style.transform = 'rotateZ(90deg)'
  })

  frame(function() {
    joffrey.style.top = '50%'
    joffrey.style.left = '210%'
    joffrey.style.transform = 'rotateZ(200deg)'
  })

  frame(function() {
  joffrey.style.top = '75%'
  joffrey.style.left = '300%'
  joffrey.style.transform = 'rotateZ(120deg)'

})

}
