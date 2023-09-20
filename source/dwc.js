const elements = document.querySelectorAll('#dwc_container > div');

function replaceSpanWithText(element) {
  const elementClass = element.className;

  const matchingP = element.querySelector('p');

  const matchingSpans = document.querySelectorAll(`span.${elementClass}`);

  matchingSpans.forEach((span) => {
    const newText = document.createTextNode(matchingP.textContent);
    span.parentNode.replaceChild(newText, span);
  });
}

elements.forEach(replaceSpanWithText);