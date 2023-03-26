/****************ZADANI 1.********************/
//Očkování objekty
/*
Vytvořte objekt person, do kterého vložte uživatelem zadané údaje. Objekt bude mít následující strukturu
{
  name: 'Květoslav Voňavý',
  age: 67,
}
Poté, co uživatel zadá všechny údaje, vypište do stránky objekt person v nějakém hezkém formátu a zkontrolujte, že obsahuje správné informace.
*/

const person = {
  fullName: prompt('Zadej sve jmeno'),
  age: Number(prompt('Zadej svuj vek')),
}

document.body.innerHTML += '<p> Jmeno: ' + person.fullName + '</p>'
document.body.innerHTML += '<p> Vek: ' + person.age + '</p>'



/****************ZADANI 2.********************/
/*
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
*/



