var urban = require('urban')


const uinput = document.getElementById("input-urban")
const ubutton = document.getElementById("urban-btn")
const utarea = document.getElementById("urban-tarea")


ubutton.addEventListener("click", () => {
    var text = uinput.value
    trollface = urban(text);    
    trollface.first(function(json) {
        utarea.value = json['definition']
    });
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


