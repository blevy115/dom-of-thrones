function scene3() {
console.log('running scene 3');
  // Setup Stage
  mySrc = desert.getAttribute('src')
  stageImg = document.querySelector('#stage-img')
  stageImg.setAttribute('src', mySrc)


  // Setup Cast

  // Character 1
  var daenarysContainer = document.createElement('div')
  stage.append(daenarysContainer)
  var daenarys = document.body.querySelector('#danerys')
  var blueDress = document.body.querySelector('#blue-dress')
  daenarysContainer.append(daenarys);
  daenarysContainer.append(blueDress);
  daenarysContainer.style.position = 'absolute';
  daenarysContainer.style.width = '10%';
  daenarysContainer.style.height = '38%';
  daenarysContainer.style.top = '55%';
  daenarysContainer.style.left = '20%';
  daenarys.style.width = '65%'
  daenarys.style.position = 'absolute';
  daenarys.style.top = 0;
  blueDress.style.position = 'absolute';
  blueDress.style.bottom = 0;

  // Character 2
  var drogoContainer = document.createElement('div')
  stage.append(drogoContainer)
  var drogo = document.body.querySelector('#drogo')
  var bulkyMan = document.body.querySelector('#bulky-man')
  drogoContainer.append(drogo);
  drogoContainer.append(bulkyMan)
  drogoContainer.style.position = 'absolute';
  drogoContainer.style.width = '10%';
  drogoContainer.style.height = '38%';
  drogoContainer.style.top = '55%';
  drogoContainer.style.left = '75%';
  drogo.style.width = '68%'
  drogo.style.position = 'absolute';
  drogo.style.top = 0;
  drogo.style.left = '17%'
  bulkyMan.style.position = 'absolute';
  bulkyMan.style.bottom = 0;


  // Setup Props
  // Prop 1
  var egg = document.querySelector('#egg')
  stage.append(egg)
  egg.style.position = 'absolute'
  egg.style.top = '73%'
  egg.style.left = '24%'
  egg.style.height = '8%'

  // Action!

  // Stage direction 1

  frame(function() {
    egg.style.top = '73%'
    egg.style.left = '24%'
  })

  frame(function() {
    egg.style.top = '61%'
    egg.style.left = '36%'
    egg.style.transform = 'rotateZ(90deg)'
  })

  frame(function() {
    egg.style.top = '50%'
    egg.style.left = '49%'
    egg.style.transform = 'rotateZ(180deg)'
  })

  frame(function() {
    egg.style.top = '67%'
    egg.style.left = '62%'
    egg.style.transform = 'rotateZ(270deg)'
  })


  frame(function() {
    egg.style.top = '83%'
    egg.style.left = '74%'
    egg.style.transform = 'rotateZ(360deg)'
  })

  frame(function() {
    egg.style.top = '67%'
    egg.style.left = '62%'
    egg.style.transform = 'rotateZ(270deg)'
  })

  frame(function() {
    egg.style.top = '50%'
    egg.style.left = '49%'
    egg.style.transform = 'rotateZ(180deg)'
  })

  frame(function() {
    egg.style.top = '61%'
    egg.style.left = '36%'
    egg.style.transform = 'rotateZ(90deg)'
  })

  frame(function() {
    egg.style.top = '73%'
    egg.style.left = '24%'
    egg.style.transform = 'rotateZ(360deg)'
  })
}
