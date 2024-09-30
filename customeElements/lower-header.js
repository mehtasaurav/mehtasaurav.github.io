
import { applyDesktopStyleLowerHeader } from '../stylings/desktopStyling.js';
import { applyMobileStyleLowerHeader } from '../stylings/mobileStyling.js';


document.addEventListener('DOMContentLoaded', () => {
function applyDesktopStyling() {
  console.log("Desktop Detected");
  applyDesktopStyleLowerHeader();
}

function applyMobileStyling() {
  console.log("Mobile Detected");
  applyMobileStyleLowerHeader()
}
// Detect whether the user is on mobile or desktop
if (window.outerWidth <= 380) {
  // If the screen width is 767px or less, assume it's a mobile device
  applyMobileStyling();
} else {
  // Otherwise, assume it's a desktop device
  applyDesktopStyling();
}
// Optional: Add an event listener to handle screen resizing
window.addEventListener('resize', () => {
  if (window.outerWidth <= 380) {
    applyMobileStyling();
  } else {
    applyDesktopStyling();
  }
});
});
