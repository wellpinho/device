window.onresize = screen
window.onload = screen

function screen() {
  myWidth = window.innerWidth

  document.getElementById('size').innerHTML = "width: " + myWidth + "px"

    if (myWidth <= 576) {
      document.querySelector('span').innerHTML = "Mobile"
    }

    else if (myWidth <= 768) {
      document.querySelector('span').innerHTML = "Tablet"
    }

    else if (myWidth <= 1024) {
      document.querySelector('span').innerHTML = "Laptop"
    }

    else if (myWidth < 2560) {
      document.querySelector('span').innerHTML = "Desktop"
    }

    else {
      document.querySelector('span').innerHTML = "4K"
    }

}