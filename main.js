// DOM Variables

var receiveMessageButton = document.querySelector("#receive-button");
var paragraphDump = document.querySelector("#paragraph-dump");

var buddhaBox = document.querySelector(".buddha-box");
var buddhalessBox = document.querySelector(".buddhaless-box");
var favoriteButtonBox = document.querySelector(".favorite-button-box");

var radioButtonA = document.querySelector('input[name="choice"][id="affirmations"]');
var radioButtonM = document.querySelector('input[name="choice"][id="mantras"]');

var mainPage = document.querySelector(".main-page");
var favoritesPage = document.querySelector(".favorites-page");
var toFavoritesPage = document.querySelector("#view-favorites");
var toMainPage = document.querySelector("#view-main")

var favoriteButton = document.querySelector("#favorite-button");
var favoriteList = document.querySelector(".favorites-list");

// Event Listeners

receiveMessageButton.addEventListener('click', messageOutput);
toFavoritesPage.addEventListener('click', mainPageToFavoritesPage);
toMainPage.addEventListener('click', favoritesPageToMainPage);
favoriteButton.addEventListener('click', favoriteMessage)
favoriteList.addEventListener('click', function(event) {deleteFavorite(event)});

// Functional Variables

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
var randomMessage;
var messageObject = {};

// Functions

function randomArrayIndex() {
  if (arrayOption) {
    return Math.floor(Math.random() * affirmations.length);
  } else if (!arrayOption) {
    return Math.floor(Math.random() * mantras.length);
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
  randomMessage = outputRandomMessage();
  buddhaBox.classList.add("hidden");
  buddhalessBox.classList.remove("hidden");
  paragraphDump.innerHTML = "";
  if (randomMessage === "Select either affirmations or mantras.") {
    paragraphDump.innerHTML += `
      <p>${randomMessage}</p>
      `;
  } else {
    paragraphDump.innerHTML += `
      <p>${randomMessage}</p>
      `;
    favoriteButtonBox.classList.remove("hidden");
  };
};

class Favorite {
  constructor(message) {
    this.message = message;
    this.id = Date.now();
  };
};

function favoriteMessage() {
  messageObject = new Favorite(randomMessage);
  favoritedMessages.push(messageObject);
};

function generateFavorites() {
  favoriteList.innerHTML = "";
  if (favoritedMessages.length === 0) {
    favoriteList.innerHTML += `
      <p> No Favorites Available </p>
    `;
  } else {
  favoriteList.innerHTML = "";
    for (var i = 0; i < favoritedMessages.length; i++) {
      favoriteList.innerHTML += `
        <p>${favoritedMessages[i].message}</p>
        <button class="button-stuff" id=${favoritedMessages[i].id}> Delete </button>
      `;
    };
  };
};

function deleteFavorite(event) {
  var idCheck = parseInt(event.target.id);
  for (var i = 0; i < favoritedMessages.length; i++) {
    if (favoritedMessages[i].id === idCheck) {
      favoritedMessages.splice(i, 1);
      generateFavorites();
    };
  };
};

function mainPageToFavoritesPage() {
  event.preventDefault();
  mainPage.classList.add("hidden");
  favoritesPage.classList.remove("hidden");
  generateFavorites();
};

function favoritesPageToMainPage() {
  event.preventDefault();
  mainPage.classList.remove("hidden");
  favoritesPage.classList.add("hidden");
  favoriteButtonBox.classList.remove("hidden");
};
