let srcsFace = ["bobrossparrot", 
                "explodyparrot", 
                "fiestaparrot", 
                "metalparrot", 
                "revertitparrot", 
                "tripletsparrot", 
                "unicornparrot"]; 

let cardsList = [];
let qtdCards = 0;
let firstCard = null;
let secondCard = null;
let blockCards = false;
let point = 0;
let counter = 0;
let interval = null;
const clock = document.querySelector(".clock");

numberOfCards();

function numberOfCards(){
  while (qtdCards < 4 || qtdCards > 14 || qtdCards % 2 !== 0){
    qtdCards = parseInt(prompt("Quantas cartas? (4 -> 14)"));
  }
  placingCards(qtdCards)
}  

function placingCards(qtdCards){
  srcsFace.sort(comparator);

  for (let i = 0; i < qtdCards / 2; i++){
    cardsList.push(srcsFace[i]);
    cardsList.push(srcsFace[i]);
  }

  cardsList.sort(comparator);

  let cardsul = document.querySelector("ul");
  for (let i = 0; i < qtdCards; i++){
      cardsul.innerHTML += 
      `
      <li class="card" data-parrots=${cardsList[i]} data-identifier="card">
          <div class ="back" data-identifier="back-face">
              <img src="arquivos-uteis/front.png" alt="Papagaio">
          </div>
          <div class ="face" data-identifier="front-face">
              <img src="arquivos-uteis/${cardsList[i]}.gif" alt="${cardsList[i]}">
          </div>
      </li>
      `
  }
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => card.addEventListener('click', flipCard));

  interval = setInterval(increaseCount, 1000);
  clock.innerHTML = 0;
} 

function flipCard() {
  if(blockCards === true){
    return false;
  }

  this.classList.toggle('flip');
  counter++;

  if(firstCard === null){
    firstCard = this;
    return false;
  } 
  secondCard = this;
  
  checkCards()
}

function checkCards(){
  let isMatch = null;

  if(firstCard.dataset.parrots === secondCard.dataset.parrots){
    point++
    isMatch = cleanCards();
  }else{
    disableCards();
  }
  if(point === qtdCards/2){
    setTimeout(endOfGame, 1000)
  }
}

function removeFlip(){
  firstCard.classList.remove('flip');
  secondCard.classList.remove('flip');
  
  cleanCards();
}

function disableCards(){
  blockCards = true;

  setTimeout(removeFlip, 1000)
}

function cleanCards(){
  firstCard = null;
  secondCard = null;
  blockCards = false;
}

function endOfGame(){
  clearInterval(interval);
  msg = prompt(`Você ganhou em ${counter} jogadas e ${clock.innerHTML} segundos!! Gostaria de jogar novamente? (sim) x (não)`);
  
  if(msg === "sim"){
    counter = 0;
    point = 0;
    qtdCards = 0;
    cardsList = [];
    let cardsul = document.querySelector("ul");
    cardsul.innerHTML = "";
    cleanCards();
    numberOfCards();
  }else{
    alert(`Obrigado por jogar!!`)
  }
}

function comparator() { 
	return Math.random() - 0.5; 
}

function increaseCount() {
  clock.innerHTML = parseInt(clock.innerHTML) + 1; 
}


 


