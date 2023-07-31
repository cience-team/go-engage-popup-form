var ctaElements = document.querySelectorAll(".cta");

// Function to open the popup and add .cta class to the .mauticform-button element
function openPopup() {
  event.preventDefault();
  var popupContainer = document.getElementById("popupContainer");
  var mauticButton = popupContainer.querySelector(".mauticform-button");
  mauticButton.classList.add("cta");

  // Add a delay before showing the popup to allow the transition to take effect
  setTimeout(function() {
    popupContainer.style.opacity = "1";
  }, 10);

  popupContainer.style.display = "block";
}

// Adding click event listener to all 'cta' elements
ctaElements.forEach(function(element) {
  element.addEventListener("click", openPopup);
});

function closePopup() {
  document.getElementById("popupContainer").style.display = "none";
}

document.addEventListener("click", function(event) {
  var popup = document.getElementById("popupContainer");
  if (!popup.contains(event.target) && !event.target.classList.contains("cta")) {
    popup.style.display = "none";
  }
});