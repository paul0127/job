var acc = document.getElementsByClassName("report-suggest-tittle");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");
    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var accF = document.getElementsByClassName("report-suggest-tittle-F");

for (i = 0; i < acc.length; i++) {
  accF[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active-F");
    /* Toggle between hiding and showing the active panel */
    var panelF = this.nextElementSibling;
    if (panelF.style.display === "none") {
      panelF.style.display = "block";
    } else {
      panelF.style.display = "none";
    }
  });
}
