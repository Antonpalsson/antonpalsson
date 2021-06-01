// dark theme
const light = '#fdfdfd'
const dark = '#282c34'
const gray = '#dfdfdf'
let darkTheme = localStorage.getItem('darkTheme') === 'true' || false

const themeButton = document.getElementById('theme-button')

function toggleTheme(flip = true) {
  if (flip) {
    darkTheme = !darkTheme
    localStorage.setItem('darkTheme', darkTheme);
    console.log('Dark theme: ', darkTheme)
  }
  
  if (darkTheme) {
    document.documentElement.style.backgroundColor = dark
    document.body.style.color = gray
    themeButton.innerText = 'Light Mode 🌞'
  } else {
    document.documentElement.style.backgroundColor = light
    document.body.style.color = dark
    themeButton.innerText = 'Dark Mode 🌙'
  }
}

toggleTheme(false)

// images selection
const imagePaths = [
  "assets/images/me0.jpeg",
  "assets/images/me1.jpeg",
  "assets/images/me2.jpeg",
  "assets/images/me3.jpeg",
  "assets/images/me4.jpeg",
]

const image = document.getElementById("image")
let imagesIndex = 0
image.src = imagePaths[imagesIndex];

function nextImage() {
  imagesIndex = (imagesIndex + 1) % imagePaths.length
  image.src = imagePaths[imagesIndex];
}

// very important message
console.log(
'  ▄▄▄▄▄▄▄ ▄▄   ▄▄ ▄▄▄▄▄▄   ▄▄    ▄ \n' +
'  █       █  █ █  █   ▄  █ █  █  █ █ \n' +
'  █▄     ▄█  █ █  █  █ █ █ █   █▄█ █ \n' +
'    █   █ █  █▄█  █   █▄▄█▄█       █ \n' +
'    █   █ █       █    ▄▄  █  ▄    █ \n' +
'    █   █ █       █   █  █ █ █ █   █ \n' +
'    █▄▄▄█ █▄▄▄▄▄▄▄█▄▄▄█  █▄█▄█  █▄▄█' 
)

console.log(
'  ▄▄▄▄▄▄  ▄▄▄▄▄▄▄ ▄     ▄ ▄▄   ▄▄ \n' +
'  █      ██       █ █ ▄ █ █  █▄█  █ \n' +
'  █  ▄    █   ▄   █ ██ ██ █       █ \n' +
'  █ █ █   █  █ █  █       █       █ \n' +
'  █ █▄█   █  █▄█  █       █       █ \n' +
'  █       █       █   ▄   █ ██▄██ █ \n' +
'  █▄▄▄▄▄▄██▄▄▄▄▄▄▄█▄▄█ █▄▄█▄█   █▄█'
)

console.log(
'  ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄ \n' +
'  █       █       █   ▄  █ \n' +
'  █    ▄▄▄█   ▄   █  █ █ █ \n' +
'  █   █▄▄▄█  █ █  █   █▄▄█▄ \n' +
'  █    ▄▄▄█  █▄█  █    ▄▄  █ \n' +
'  █   █   █       █   █  █ █ \n' +
'  █▄▄▄█   █▄▄▄▄▄▄▄█▄▄▄█  █▄█'
)

console.log(
'  ▄     ▄ ▄▄   ▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄▄ \n' +
'  █ █ ▄ █ █  █ █  █       █       █ \n' +
'  █ ██ ██ █  █▄█  █   ▄   █▄     ▄█ \n' +
'  █       █       █  █▄█  █ █   █ \n' +
'  █       █   ▄   █       █ █   █ \n' +
'  █   ▄   █  █ █  █   ▄   █ █   █ \n' +
'  █▄▄█ █▄▄█▄▄█ █▄▄█▄▄█ █▄▄█ █▄▄▄█'
)

console.log(
'  ▄▄▄▄▄▄ \n' +
'  █      █ \n' +
'  █▄▄▄   █ \n' +
'    ▄▄█  █ \n' +
'   █▄▄▄▄▄█ \n' +
'     ▄▄ \n' +
'    █▄▄█'
)

console.log(
'  ▄▄▄▄▄▄  ▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄ ▄▄▄▄▄▄▄ ▄▄▄▄▄▄ ▄▄▄ \n' +
'  █      ██   █       █   █       █      █   █ \n' +
'  █  ▄    █   █   ▄▄▄▄█   █▄     ▄█  ▄   █   █ \n' +
'  █ █ █   █   █  █  ▄▄█   █ █   █ █ █▄█  █   █ \n' +
'  █ █▄█   █   █  █ █  █   █ █   █ █      █   █▄▄▄ \n' +
'  █       █   █  █▄▄█ █   █ █   █ █  ▄   █       █ \n' +
'  █▄▄▄▄▄▄██▄▄▄█▄▄▄▄▄▄▄█▄▄▄█ █▄▄▄█ █▄█ █▄▄█▄▄▄▄▄▄▄█' 
  )