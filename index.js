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

/*
const person = {
  fullName: prompt('Zadej sve jmeno'),
  age: Number(prompt('Zadej svuj vek')),
}

document.body.innerHTML += '<p> Jmeno: ' + person.fullName + '</p>'
document.body.innerHTML += '<p> Vek: ' + person.age + '</p>'
*/


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

/****************ZADANI 3.********************/
/*
Registrace na očkování

Nejdříve nechte uživatele zadat všechny hodnoty, tedy jméno, věk i heslo. Uložte si je do dobře pojmenovaných proměnných.
Napište první podmínku, ve které zkontrolujte, že věk uživatele je větší nebo roven 65. Pokud ano, vypište do stránky „věk v pořádku“. Pokud uživateli není alespoň 65 let, vypište „nízký věk“.
Napište druhou podmínku, která zkontroluje, zda je zadané heslo delší než osm znaků. Pokud není, vypište „slabé heslo“. Heslo se bude kontrolovat pouze v případě, kdy uživatel splnil první podmínku (věk alespoň 65 let).
*/

const fullName = prompt('Zadej cele jmeno:');
const age = Number(prompt('Zadej svuj vek:'));
const password = prompt('Zadej heslo:');

if (age >= 65) {
  document.body.innerHTML += `<p>Vek je v poradku</p>`
  if (password.length <= 8) {
    document.body.innerHTML += `<p>Slabe heslo</p>`
  } else {
    document.body.innerHTML += `<p> Heslo je v poradku</p>`
  }
} else {
  document.body.innerHTML += `<p>Nizky vek</p>`
}




