const casas = document.querySelectorAll(".casas");
//console.log(casas);
const jogador1 = "X";
const jogador2 = "O";
let checaTurno = true;
const checaCombinacao = [
  //combinações horizontais
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  //combinações verticais
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  //combinações diagonais
  [0, 4, 8],
  [2, 4, 6],
];

document.addEventListener("click", function (event) {
  if (event.target.matches(".casas")) {
    //console.log(event.target.id);
    jogar(event.target.id);
  }
});

function jogar(id) {
  const casa = document.getElementById(id);
  jogada = checaTurno ? jogador1 : jogador2;
  casa.textContent = jogada;
  casa.classList.add(jogada);
  casa.style.backgroundColor = "#000";
  checaVencedor(jogada);
}

function checaVencedor(jogada) {
  const vencedor = checaCombinacao.find(function (combinacao) {
    return combinacao.every(function (value) {
      return casas[value].classList.contains(jogada);
    });
  });
  if (vencedor) {
    //console.log(jogada);
    fimJogo(jogada);
  } else if (checaEmpate()) {
    fimJogo();
  } else {
    checaTurno = !checaTurno;
  }
}

function checaEmpate() {
  let x = 0;
  let o = 0;

  for (i in casas) {
    if (!isNaN(i)) {
      if (casas[i].classList.contains(jogador1)) {
        x++;
      }
      if (casas[i].classList.contains(jogador2)) {
        o++;
      }
    }
  }
  if (x + o === 9) {
    return true;
  } else {
    return false;
  }
}

function fimJogo(vencedor = null) {
  if (vencedor) {
    alert(`O Jogador '${vencedor}' venceu!!`);
  } else {
    alert("Deu velha ☹");
  }
}

function restart() {
  window.location.reload();
}
