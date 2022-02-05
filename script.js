let srcsFace = ["bobrossparrot", 
                "explodyparrot", 
                "fiestaparrot", 
                "metalparrot", 
                "revertitparrot", 
                "tripletsparrot", 
                "unicornparrot"]; 

let listaDeCartas = [];
let qtdCartas = 0;
let firstCard = null;
let secondCard = null;
let blockCards = false;
let ponto = 0;
let contador = 0;

quantidadesCartas();

function quantidadesCartas(){
  while (qtdCartas < 4 || qtdCartas > 14 || qtdCartas % 2 !== 0){
    qtdCartas = parseInt(prompt("Quantas cartas? (4 -> 14)"));
  }
  colocandoCartas(qtdCartas)
}  

function colocandoCartas(qtdCartas){
  srcsFace.sort(comparador);

  for (let i = 0; i < qtdCartas / 2; i++){
    listaDeCartas.push(srcsFace[i]);
    listaDeCartas.push(srcsFace[i]);
  }

  listaDeCartas.sort(comparador);

  let cartas = document.querySelector("ul");
  for (let i = 0; i < qtdCartas; i++){
      cartas.innerHTML += 
      `
      <li class="carta" data-identifier="card" data-parrots=${listaDeCartas[i]}>
          <div class ="verso" data-identifier="back-face">
              <img src="arquivos-uteis/front.png" alt="Papagaio">
          </div>
          <div class ="face" data-identifier="front-face">
              <img src="arquivos-uteis/${listaDeCartas[i]}.gif" alt="${listaDeCartas[i]}">
          </div>
      </li>
      `
  }
  const cards = document.querySelectorAll(".carta");
  cards.forEach(card => card.addEventListener('click', flipCard));
} 

function flipCard() {
 
  if(blockCards === true){
    return false;
  }

  this.classList.toggle('flip');
  contador++;

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
    ponto++
    isMatch = cleanCards();
  }else{
    disableCards();
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

function comparador() { 
	return Math.random() - 0.5; 
}