var img = document.querySelector('.imgBox')
var content = document.querySelector('.content')
img.addEventListener('click', function() {
  content.classList.toggle('active')
})