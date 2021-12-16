var paragraphOutput = document.querySelector(".paragraph-text");
// var buddhaOutput = document.querySelector("#shrink-buddha");
var receiveMessageButton = document.querySelector("#button-stuff");
var buddhaBox = document.querySelector("#buddha-box");
// var affirmationButton = document.querySelector("#affirmations");
// var mantraButton = document.querySelector("#mantras");
var radioButtonA = document.querySelector('input[name="choice"][id="affirmations"]');
var radioButtonM = document.querySelector('input[name="choice"][id="mantras"]');

receiveMessageButton.addEventListener('click', messageOutput);
// affirmationButton.addEventListener('input[name="choice"]', switchOutputA);
// mantraButton.addEventListener('input[name="choice"]', switchOutputM);

var affirmations = [
  "You got this.",
  "Hang in there.",
  "The world is your oyster.",
];

var mantras = [
  "What doesn't kill you makes you stronger.",
  "What lies ahead of you, and what lies behind you, is little compared to what lies within you.",
  "Everybody poops."
]

var arrayOption = undefined;

// function switchOutputA {
//   if (affirmationButton.checked) {
//     arrayOption = true;
//   };
// };
//
// function switchOutputM {
//   if (mantraButton.checked) {
//     arrayOption = false;
//   };
// };

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
  buddhaBox.innerHTML += `
    <img class="hide" id="shrink-buddha" src="./assets/meditate.svg" alt="Meditating Buddha Symbol"/>
    <p>${randomMessage}</p>
    `;
};
