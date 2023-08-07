var customPopupConfig = {
  title: "Thanks for your submission!",
  subtitle: "Our team will get in touch with you soon!"
};


const ctaElements = document.querySelectorAll(".cta");
const popupContainer = document.getElementById("popupContainer");
const mauticFormSubmitButton = document.getElementsByName("mauticform[submit]")[0];


// Function to open the popup
function openPopup() {
  event.preventDefault();

  setTimeout(function () {
    popupContainer.style.opacity = "1";
  }, 10);

  popupContainer.style.display = "block";
}


// Function to close the popup
function closePopup() {
  popupContainer.style.opacity = "0";

  setTimeout(function () {
    popupContainer.style.display = "none";
  }, 500);
}


// Function to display "Thank you" message in the popup
function displayMessage(customPopupConfig) {
  let form_wrapper = document.getElementsByClassName("mauticform_wrapper")[0];
  if (form_wrapper) {

    // Set opacity to 0 to start the smooth fade-out
    form_wrapper.style.opacity = "0";

    setTimeout(function () {
      form_wrapper.style.display = "none";
      
      // Create a new element for the animated checkmark
      var checkmarkElement = document.createElement("div");
      checkmarkElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="animated-checkmark"><path d="M5 13l4 4L19 7"></path></svg>';
      popupContainer.appendChild(checkmarkElement);
      
      // Add the animation class to the checkmark element
      checkmarkElement.classList.add("animated-checkmark");
      
      // Listen for the animationend event to remove the animation class after it finishes playing
      checkmarkElement.addEventListener("animationend", function () {
        checkmarkElement.classList.remove("animated-checkmark");
      });
      
      var titleElement = document.createElement("h2");
      var subtitleElement = document.createElement("p");
      
      titleElement.textContent = customPopupConfig.title;
      subtitleElement.textContent = customPopupConfig.subtitle;
      
      popupContainer.appendChild(titleElement);
      popupContainer.appendChild(subtitleElement);
      
      setTimeout(function () {
        closePopup();
      }, 4000);
    }, 500);
  }
}


function isEmailValid(email) {
  // Regular expression to check for a valid email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


function hasErrors() {
  const errorSpans = popupContainer.querySelectorAll("span.mauticform-errormsg");
  let hasErrorsValue = false;

  for (const span of errorSpans) {
    if (span.textContent.trim() !== "") {
      if (span.style.display !== "none") {
        hasErrorsValue = true;
      }
    }
  }

  return hasErrorsValue;
}


// Adding click event listener to all 'cta' elements to open the popup
ctaElements.forEach(function (element) {
  element.addEventListener("click", openPopup);
});


// Event listener to close the popup when clicking outside it
document.addEventListener("click", function (event) {
  if (!popupContainer.contains(event.target) && !event.target.classList.contains("cta")) {
    closePopup();
  }
});


// Adding click event listener to the mauticFormSubmitButton
if (mauticFormSubmitButton) {
  mauticFormSubmitButton.addEventListener("click", function () {
    // Delay before executing the code to allow Mautic form to process the results
    setTimeout(function() {
      if (!hasErrors()) {
        // Check if the element with ID "GoScheduleLink" exists on the page
        let goScheduleLink = document.getElementById("GoScheduleLink");
        if (goScheduleLink) {
          // If the element exists, set the data-cal-link attribute
          mauticFormSubmitButton.setAttribute('data-cal-link', goScheduleLink.innerText);
          setTimeout(function () {
            closePopup();
          }, 500);
        } else {
          setTimeout(function () {
            displayMessage(customPopupConfig);
          }, 1000);
        }
      } else {
        // Delete the data-cal-link attribute if form fields are not valid
        mauticFormSubmitButton.removeAttribute('data-cal-link');
      }
    }, 200);
  });
}


// Integrating GO Schedule
(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar); return; } p(cal, ar); }; })(window, "https://schedule.cience.com/embed/embed.js", "init");
Cal("init", { origin: "https://schedule.cience.com" });
Cal("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false });