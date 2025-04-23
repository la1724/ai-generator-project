function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: "Believe you can and you're halfway there",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
