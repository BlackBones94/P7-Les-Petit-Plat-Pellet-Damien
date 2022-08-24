import {recipes} from "../data/recipes.js";
import {CardRecip} from "../facto/recipes.js";

console.log(recipes)

function displayRecipes(recipes) {
    const cardsSection = document.querySelector(".card-section");
    cardsSection.innerHTML= '';
    recipes.forEach((item) => {
        const recipesTemplates = new CardRecip(item);
        const cardDom = recipesTemplates.getCardDom();
        cardsSection.innerHTML += cardDom;
// ne pas oublier le +
        console.log(CardRecip)
    });
}

function init(){
    displayRecipes(recipes);
}

init();

// trier liste alpha 
// masquer dropdown a la recherche 