var paragraphOutput = document.querySelector(".paragraph-text");
// var buddhaOutput = document.querySelector("#shrink-buddha");
var receiveMessageButton = document.querySelector("#receive-button");
var buddhaBox = document.querySelector("#buddha-box");
// var affirmationButton = document.querySelector("#affirmations");
// var mantraButton = document.querySelector("#mantras");
var radioButtonA = document.querySelector('input[name="choice"][id="affirmations"]');
var radioButtonM = document.querySelector('input[name="choice"][id="mantras"]');

var mainPage = document.querySelector(".main-page");
var favoritesPage = document.querySelector(".favorites-page");
var toFavoritesPage = document.querySelector("#view-favorites");
var toMainPage = document.querySelector("#view-main")

var favoriteButton = document.querySelector('#favorite-button');

receiveMessageButton.addEventListener('click', messageOutput);
toFavoritesPage.addEventListener('click', mainPageToFavoritesPage);
toMainPage.addEventListener('click', favoritesPageToMainPage);

var affirmations = [
  "You got this.",
  "Hang in there.",
  "The world is your oyster."
];

var mantras = [
  "What doesn't kill you makes you stronger.",
  "What lies ahead of you, and what lies behind you, is little compared to what lies within you.",
  "Everybody poops."
];

var arrayOption = undefined;
var favoritedMessages = [];


function randomArrayIndex() {
  if (arrayOption) {
    return Math.floor(Math.random() * affirmations.length);
  } else if (!arrayOption) {
    return Math.floor(Math.random() * mantras.length);
  // return (Math.trunc(Math.random() * array.length));
  };
};

function outputRandomMessage() {
  if (radioButtonA.checked) {
    arrayOption = true;
  } else if (radioButtonM.checked) {
    arrayOption = false;
  } else if (arrayOption === undefined) {
    return "Select either affirmations or mantras.";
  };
  if (arrayOption) {
    return affirmations[randomArrayIndex()];
  } else if (!arrayOption) {
    return mantras[randomArrayIndex()];
  };
};

function messageOutput() {
  var randomMessage = outputRandomMessage();
    buddhaBox.innerHTML = "";
    if (arrayOption === undefined) {
      buddhaBox.innerHTML += `
        <img class="hidden" id="shrink-buddha" src="./assets/meditate.svg" alt="Meditating Buddha Symbol"/>
        <p>${randomMessage}</p>
        `;
      } else {
    buddhaBox.innerHTML += `
      <img class="hidden" id="shrink-buddha" src="./assets/meditate.svg" alt="Meditating Buddha Symbol"/>
      <p>${randomMessage}</p>
      <button class="button-stuff" id="favorite-button"> Favorite Message </button>
      `;
    };
};

function favoriteMessage() {
  favoritedMessages.push(randomMessage);
};

function mainPageToFavoritesPage() {
  event.preventDefault();
  mainPage.classList.add("hidden");
  favoritesPage.classList.remove("hidden");
};

function favoritesPageToMainPage() {
  event.preventDefault();
  mainPage.classList.remove("hidden");
  favoritesPage.classList.add("hidden");
};
