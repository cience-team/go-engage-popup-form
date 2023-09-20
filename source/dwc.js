const dwcContainer = document.querySelector('#dwc_container');

if (dwcContainer) {
  const elements = dwcContainer.querySelectorAll('div');

  function replaceSpanWithText(element) {
    const matchingP = element.querySelector('p');

    if (matchingP) {
      const elementClass = element.className;

      const matchingSpans = dwcContainer.querySelectorAll(`span.${elementClass}`);

      matchingSpans.forEach((span) => {
        const newText = document.createTextNode(matchingP.textContent);
        span.parentNode.replaceChild(newText, span);
      });
    }
  }

  elements.forEach(replaceSpanWithText);
}
