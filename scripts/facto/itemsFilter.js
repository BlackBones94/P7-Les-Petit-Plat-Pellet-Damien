import {recipes} from "../data/recipes.js";
import { dropdownIngredient } from "../index/index.js";
import { dropdownAppareil } from "../index/index.js";
import { dropdownUstensiles } from "../index/index.js";

const allAppliance = [];
const allUstensils =[];
const  allIngredients = [];
let listAppareil = document.getElementById("dropdown-appareil-list");
let listIngredient = document.getElementById("dropdown-ingredient-list");
let listUstensils = document.getElementById("dropdown-ustensiles-list");
/////////////////////// BOUCLE FOR //////////////////////////////
    for(let i=0; i< recipes.length; i++) {
        let ingredients = recipes[i].ingredients;
        ingredients.map(({ingredient}) =>{
            allIngredients.push(`${ingredient.toLowerCase()}`);
        } )
    }
console.log(dropdownIngredient)

for(let i=0; i< recipes.length; i++) {
    let ustensils = recipes[i].ustensils;
    ustensils.filter((ustensil) =>{
        allUstensils.push(ustensil)
    })
    // allUstensils.push(ustensils)
}
console.log(allUstensils)

for(let i=0; i< recipes.length; i++) {
    let appliances = recipes[i].appliance;
    allAppliance.push(appliances)
}
////////////////////////////////////////////////////////////////


// appareil 
function applianceItem(){

    const applianceNoRepeat = new Set(allAppliance.sort());

    applianceNoRepeat.forEach((item) =>{
        let appLi = document.createElement('li')
        appLi.innerText = item;
        listAppareil.appendChild(appLi)
    })
    // dropdownAppareil.innerHTML = applianceNoRepeat;
    // console.log(applianceNoRepeat)

}
// ingredients

function ingredientItem() {

        const ingredientNoRepeat = new Set(allIngredients.slice(0,30));

        ingredientNoRepeat.forEach((item) =>{
            let ingLi = document.createElement('li');
            ingLi.innerText = item;
            listIngredient.appendChild(ingLi);
        })
        // dropdownIngredient.innerHTML = ingredientNoRepeat

}

// ustensils
function ustensilsItem(){
    const ustensilsNoRepeat = new Set(allUstensils.slice(0,30));
    // dropdownUstensiles.innerHTML = ustensilsNoRepeat

    ustensilsNoRepeat.forEach((item) => {
        let ustenLi = document.createElement('li');
        ustenLi.innerText = item;
        listUstensils.appendChild(ustenLi)
    })
    console.log(ustensilsNoRepeat)

}
applianceItem()
ingredientItem()
ustensilsItem()