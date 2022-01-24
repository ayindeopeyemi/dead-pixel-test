  var elem = document.getElementById("whitescreenparent");

  function openFullscreen() {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  }
  document.getElementById("whitescreentestcta").onclick = openFullscreen;

  function handleFullscreenChange(event) {
    if (!document.fullscreenElement) {}
  }
  elem.onfullscreenchange = handleFullscreenChange;
  var colors = ["white", "black", "#FF0000", "#00FF00", "#0000FF"],
    index = 0;
  document.getElementById("whitescreenparent").onclick = function() {
    document.getElementById("whitescreenparent").style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
  }
