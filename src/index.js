import css from "./css/styles.css";
import cardsName from './templates/cards.hbs';

const refs = {
  input: document.querySelector('.input'),
  cards: document.querySelector('.country-cards')
}
console.log(refs.cards);



fetchCountry().then(renderCountryCard).catch(error => console.log(error));

function fetchCountry(searchQuery) {
  return fetch(`https://restcountries.eu/rest/v2`)
  .then(response => {
    return response.json();
  })
    }

function renderCountryCard(countres) {
   const murkup = cardsName(countres)
    console.log(murkup);
    refs.cards.innerHTML = murkup;
 }

