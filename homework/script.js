let san = 55;
let surak = +prompt("San engiziniz");

function sandar(san, surak) {
  if (surak == san) {
    alert("Durys");
  } else if (surak > san) {
    alert("qupia soz kishirek!");
  } else if (surak < san) {
    alert("qupia soz ulkendirek!");
  }
}

alert(sandar(san, surak));
