const deleteElement = document.getElementById("number");
deleteElement.remove();



function myFunction(event) {
  $("#standard-posture")
    .addClass("shake")
    .on("animationend", function (e) {
      $(this).removeClass("shake").off("animationend");
    });
}

function myFunction2() {
  document.getElementById("standardDropdown").classList.toggle("show");
}

// Vanish when click whitespace(screen)

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("standard-dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}