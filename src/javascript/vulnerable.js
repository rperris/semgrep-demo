const el = element.innerHTML;

function bad1(userInput) {
  // ruleid: insecure-innerhtml
  el.innerHTML = "<div>" + userInput + "</div>";
}
