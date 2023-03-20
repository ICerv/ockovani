let jmeno = prompt('Zadej sve jmeno');
let vek = Number(prompt('Zadej svuj vek'));
if (vek >= 65) {
  const heslo = prompt('V pořádku. Teď zadej heslo:');
  if (heslo.length <= 8) {
    document.body.innerHTML += 'Slabé heslo'
  } else {
    document.body.innerHTML += 'Heslo je v pořádku'
  }
} else {
  document.body.innerHTML += 'Nízký věk'
}

