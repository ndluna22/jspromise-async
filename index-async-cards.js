let url = "https://deckofcardsapi.com/api/deck";
const button = document.querySelector(".button");
const deckcards = document.querySelector(".deckcards");
//1

async function drawcard() {
  let res = await axios.get(`${url}/new/draw/`);
  console.log(res.data.cards[0].suit);
  console.log(res.data.cards[0].value);
}

drawcard();

2;
async function samecard() {
  let cardone = await axios.get(`${url}/new/draw/`); //include jsonquery key
  let deckId = cardone.data.deck_id;
  let cardtwo = await axios.get(`${url}/${deckId}/draw/`);
  [cardone, cardtwo].forEach((res) => {
    console.log(res.data.cards[0].suit);
    console.log(res.data.cards[0].value);
  });
}
samecard();

//3

async function allcards() {
  let deckData = await axios.get(`${url}/new/shuffle/`);
  button.show().on("click", async function () {
    let cardData = await axios.get(`${url}/${deckData.deck_id}/draw/`);

    if (cardData.remaining === 0) button.remove();
  });
}

allcards();
