function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "974of49bec37483e3t4b02c41600e8ea";
  let context =
    " Your mission is to generate maximum of 4 line quote in basic HTML and separate each line with a <br />. Make sure to follow the user instructions.  Provide an author of the quote inside a <strong> element at the end of the quote and NOT at the beginning";
  let prompt = `User instructions: Generate a quote about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#quote");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a Quote about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
