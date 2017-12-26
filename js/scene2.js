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
  var ned = document.querySelector('#ned');
    nedContainer.append(ned);
  var leather = document.querySelector('#leather-armour');
    nedContainer.append(leather);

    ned.style.width = '70%';
    ned.style.position = 'absolute';
    ned.style.top = 0;
    leather.style.position = 'absolute';
    leather.style.bottom = 0;
    nedContainer.style.height = '37%';
    nedContainer.style.top = '55%';
    nedContainer.style.left = '25%';
  // Character 2

  // Setup Props

  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {

  })

  // Stage direction 2

  frame(function() {

  })

}
