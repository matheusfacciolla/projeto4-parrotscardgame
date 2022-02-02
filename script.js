/* Declarando variaveis */

let cartas = ["1", "2", "3", "4", "5", "6", "7"];

/* Quantidade de cartas */

quantidadesCartas()

  function quantidadesCartas(){
    let qtdCartas = null;
    while (qtdCartas < 4 || qtdCartas > 14 || qtdCartas % 2 !== 0){
      qtdCartas = parseInt(prompt("Quantas cartas? (4 -> 14)"));
    }
  }    

/* 

Embaralhar as cartas 

cartas.sort(comparador);

function comparador() { 
	return Math.random() - 0.5; 
}

*/

/* Virar as cartas */

const cards = document.querySelectorAll('.carta');

function flipCard() {
  this.classList.toggle('flip');
}

cards.forEach(card => card.addEventListener('click', flipCard));