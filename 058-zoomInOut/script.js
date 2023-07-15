var text = document.getElementById("text");

function zoomInOut(event) {
  // Detect mouse wheel and trackpad scroll behavior
  var delta = 0;
  if (event.wheelDelta) {
    // For WebKit browsers
    delta = event.wheelDelta / 120;
  } else if (event.detail) {
    // For Firefox
    delta = -event.detail / 3;
  }

  // Increase or decrease text size based on scroll direction
  if (delta > 0) {
    text.style.fontSize = parseInt(getComputedStyle(text).fontSize) + 10 + "px";
  } else {
    text.style.fontSize = parseInt(getComputedStyle(text).fontSize) - 10 + "px";
  }

  // Prevent the default scroll behavior
  event.preventDefault();
}

// Add event listener to detect scroll
if (document.addEventListener) {
  // For modern browsers
  document.addEventListener("wheel", zoomInOut, { passive: false });
  document.addEventListener("mousewheel", zoomInOut, { passive: false });
  document.addEventListener("DOMMouseScroll", zoomInOut, { passive: false });
} else {
  // For older versions of IE
  document.attachEvent("onmousewheel", zoomInOut);
}
