const cards = [
  {
    front: "/images/card_back.png",
    back: "/images/青眼白龍_怪獸.png",
  },
  {
    front: "/images/card_back.png",
    back: "/images/青眼白龍_怪獸.png",
  },
  {
    front: "/images/card_back.png",
    back: "/images/青眼白龍_靈.png",
  },
  {
    front: "/images/card_back.png",
    back: "/images/青眼白龍_靈.png",
  },
  {
    front: "/images/card_back.png",
    back: "/images/青眼白龍_魔法.png",
  },
  {
    front: "/images/card_back.png",
    back: "/images/青眼白龍_魔法.png",
  },
  {
    front: "/images/card_back.png",
    back: "/images/青眼白龍_陷阱.png",
  },
  {
    front: "/images/card_back.png",
    back: "/images/青眼白龍_陷阱.png",
  },
];

let flippedCards = [];
// 遊戲內容
function flipCard(card) {
  if (
    !card.classList.contains("flipped") &&
    !card.classList.contains("matched")
  ) {
    if (flippedCards.length < 2) {
      card.classList.add("flipped");
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        const match =
          flippedCards[0].querySelector(".back").src ===
          flippedCards[1].querySelector(".back").src;
        if (match) {
          flippedCards.forEach((card) => {
            card.classList.add("matched");
          });
          flippedCards = [];
        } else {
          setTimeout(() => {
            flippedCards.forEach((card) => card.classList.remove("flipped"));
            flippedCards = [];
          }, 1000);
        }
      }
    }
  }
}

function startGame() {
  cards.sort(() => Math.random() - 0.5);
  const gameContainer = document.getElementById("game-container");
  gameContainer.innerHTML = "";
  cards.forEach((card, index) => {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.setAttribute("data-id", index);
    cardElement.addEventListener("click", () => flipCard(cardElement));

    const frontImage = document.createElement("img");
    frontImage.src = card.front;
    frontImage.classList.add("front");

    const backImage = document.createElement("img");
    backImage.src = card.back;
    backImage.classList.add("back");

    cardElement.appendChild(frontImage);
    cardElement.appendChild(backImage);

    gameContainer.appendChild(cardElement);
  });
}

startGame();
