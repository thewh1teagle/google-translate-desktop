var urban = require('urban')


const uinput = document.getElementsByClassName("urban-input")[0]
const ubutton = document.getElementsByClassName("urban-button")[0]
const utarea = document.getElementsByClassName("translated-div")[0]


ubutton.addEventListener("click", () => {
    var text = uinput.value
    trollface = urban(text);    
    trollface.first(function(json) {
        utarea.innerHTML = json['definition']
        utarea.scrollIntoView();
    });
    document.activeElement.blur();
    
})


    
uinput.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      ubutton.click()
    }
  }); 


