var time = 0

function frame(actions) {

  setTimeout(function () {
    actions()
  }, time)

  time += 500

}

document.addEventListener('DOMContentLoaded', function () {
  mySrc = desert.getAttribute('src')
  stageImg = document.querySelector('#stage-img')
  stageImg.setAttribute('src', mySrc)
})
