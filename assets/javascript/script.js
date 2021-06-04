// theme
const lightBackground = '#fdfdfd'
const lightText = '#282c34'
const darkBackground = '#282c34'
const darkText = '#dfdfdf'

let darkTheme = localStorage.getItem('darkTheme') === 'true' || false

const themeButton = document.getElementById('theme-button')

toggleTheme(true)

function toggleTheme(init = false) {
  if (!init) {
    darkTheme = !darkTheme
    localStorage.setItem('darkTheme', darkTheme);
  }

  if (darkTheme) {
    document.body.style.backgroundColor = darkBackground
    document.body.style.color = darkText
    themeButton.innerText = 'Light Mode 🌞'
  } else {
    document.body.style.backgroundColor = lightBackground
    document.body.style.color = lightText
    themeButton.innerText = 'Dark Mode 🌙'
  }
}

// images
const imagePaths = [
  "assets/images/me0.jpeg",
  "assets/images/me1.jpeg",
  "assets/images/me2.jpeg",
  "assets/images/me3.jpeg",
  "assets/images/me4.jpeg",
]

const imageElement = document.getElementById("image")
let currentImageIndex = 0

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % imagePaths.length
  imageElement.src = imagePaths[currentImageIndex];
}

// important message
console.log(
  '  ▄▄▄▄▄▄▄ ▄▄   ▄▄ ▄▄▄▄▄▄   ▄▄    ▄ \n' +
  '  █       █  █ █  █   ▄  █ █  █  █ █ \n' +
  '  █▄     ▄█  █ █  █  █ █ █ █   █▄█ █ \n' +
  '    █   █ █  █▄█  █     ▄█▄█       █ \n' +
  '    █   █ █       █    ▄▄  █  ▄    █ \n' +
  '    █   █ █       █   █  █ █ █ █   █ \n' +
  '    █▄▄▄█ █▄▄▄▄▄▄▄█▄▄▄█  █▄█▄█  █▄▄█ \n' +
  '  ▄▄▄▄▄▄  ▄▄▄▄▄▄▄ ▄     ▄ ▄▄   ▄▄ \n' +
  '  █      ██       █ █ ▄ █ █  █▄█  █ \n' +
  '  █  ▄    █   ▄   █ ██ ██ █       █ \n' +
  '  █ █ █   █  █ █  █       █       █ \n' +
  '  █ █▄█   █  █▄█  █       █       █ \n' +
  '  █       █       █   ▄   █ ██▄██ █ \n' +
  '  █▄▄▄▄▄▄██▄▄▄▄▄▄▄█▄▄█ █▄▄█▄█   █▄█ \n' +
  '  ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄ \n' +
  '  █       █       █   ▄  █ \n' +
  '  █    ▄▄▄█   ▄   █  █ █ █ \n' +
  '  █   █▄▄▄█  █ █  █   █▄▄█▄ \n' +
  '  █    ▄▄▄█  █▄█  █    ▄▄  █ \n' +
  '  █   █   █       █   █  █ █ \n' +
  '  █▄▄▄█   █▄▄▄▄▄▄▄█▄▄▄█  █▄█ \n' +
  '  ▄     ▄ ▄▄   ▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ \n' +
  '  █ █ ▄ █ █  █ █  █       █       █ \n' +
  '  █ ██ ██ █  █▄█  █   ▄   █▄     ▄█ \n' +
  '  █       █       █  █▄█  █ █   █ \n' +
  '  █       █   ▄   █       █ █   █ \n' +
  '  █   ▄   █  █ █  █   ▄   █ █   █ \n' +
  '  █▄▄█ █▄▄█▄▄█ █▄▄█▄▄█ █▄▄█ █▄▄▄█ \n' +
  '  ▄▄▄▄▄▄ \n' +
  '  █      █ \n' +
  '  █▄▄▄   █ \n' +
  '    ▄▄█  █ \n' +
  '   █▄▄▄▄▄█ \n' +
  '     ▄▄ \n' +
  '    █▄▄█ \n' +
  '  ▄▄▄▄▄▄  ▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄ ▄▄▄ \n' +
  '  █      ██   █       █   █       █      █   █ \n' +
  '  █  ▄    █   █   ▄▄▄▄█   █▄     ▄█  ▄   █   █ \n' +
  '  █ █ █   █   █  █  ▄▄█   █ █   █ █ █▄█  █   █ \n' +
  '  █ █▄█   █   █  █ █  █   █ █   █ █      █   █▄▄▄ \n' +
  '  █       █   █  █▄▄█ █   █ █   █ █  ▄   █       █ \n' +
  '  █▄▄▄▄▄▄██▄▄▄█▄▄▄▄▄▄▄█▄▄▄█ █▄▄▄█ █▄█ █▄▄█▄▄▄▄▄▄▄█' 
)
  