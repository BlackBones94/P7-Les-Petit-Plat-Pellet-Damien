import {recipes} from "../data/recipes.js";
import { dropdownIngredient } from "../index/index.js";
import { dropdownAppareil } from "../index/index.js";
import { dropdownUstensiles } from "../index/index.js";

const tableauItems = [];
export const allAppliance = [];
const allUstensils =[];
const  allIngredients = [];
let listAppareil = document.getElementById("dropdown-appareil-list");
let listIngredient = document.getElementById("dropdown-ingredient-list");
let listUstensils = document.getElementById("dropdown-ustensiles-list");
const ingredientSearch = document.querySelector("#search-ingredient")
const tagField = document.querySelector('.tag-section')

/////////////////////// BOUCLE FOR //////////////////////////////

for(let i=0; i< recipes.length; i++) {
    let ingredients = recipes[i].ingredients;
    ingredients.map(({ingredient}) =>{
        allIngredients.push(`${ingredient.toLowerCase()}`);
    } )
}
// console.log(dropdownIngredient)

for(let i=0; i< recipes.length; i++) {
    let ustensils = recipes[i].ustensils;
    ustensils.filter((ustensil) =>{
        allUstensils.push(ustensil)
    })
    // allUstensils.push(ustensils)
}
// console.log(allUstensils)

for(let i=0; i< recipes.length; i++) {
    let appliances = recipes[i].appliance;
    allAppliance.push(appliances)
}
////////////////////////////////////////////////////////////////

// creer tab global current recipes
// mettre boucle for dans le tableau 
// destructuring [... TEST] POUR TAB ET OBJET 
// TRIER CONTENUE AVEC SORT


// appareil 
export function applianceItem(){

    const applianceNoRepeat = new Set(allAppliance.sort());

    applianceNoRepeat.forEach((item) =>{
        let appLi = document.createElement('li')
        appLi.innerText = item;
        listAppareil.appendChild(appLi)

        // click  des element appliance 

        appLi.addEventListener('click' , function(e) {
            // finir tag section 
            const newDropAppliance = document.createElement('div')
            const p = document.createElement('p')
            const iCircle = document.createElement('i')
            iCircle.className = "fa-regular fa-circle-xmark"
            newDropAppliance.className = 'dropdown-appliance-tag'
            newDropAppliance.appendChild(p)
            newDropAppliance.appendChild(iCircle)
            p.innerHTML = e.target.innerHTML
            tagField.appendChild(newDropAppliance)   
            
            iCircle.addEventListener('click' ,function(e) {
                newDropAppliance.style.display ="none"
            })
        })

    
    })

 
}

// ingredients
const ingredientNoRepeat = new Set(allIngredients.slice(0,30));

function ingredientItem() {

        ingredientNoRepeat.forEach((item) =>{
            let ingLi = document.createElement('li');
            ingLi.innerText = item;
            listIngredient.appendChild(ingLi);

            ingLi.addEventListener('click' , function(e) {
                const newDropIngredients = document.createElement('div')
                const p = document.createElement('p')
                const iCircle = document.createElement('i')
                iCircle.className = "fa-regular fa-circle-xmark"
                newDropIngredients.className = 'dropdown-ingredients-tag'
                newDropIngredients.appendChild(p)
                newDropIngredients.appendChild(iCircle)
                p.innerHTML = e.target.innerHTML
                tagField.appendChild(newDropIngredients)
                
                iCircle.addEventListener('click' , function(e) {
                    newDropIngredients.style.display = "none"
                })
            })
        })
}


// ustensils
function ustensilsItem(){
    const ustensilsNoRepeat = new Set(allUstensils.slice(0,30));

    ustensilsNoRepeat.forEach((item) => {
        let ustenLi = document.createElement('li');
        ustenLi.innerText = item;
        listUstensils.appendChild(ustenLi)

        ustenLi.addEventListener('click' , function(e) {
            const newDropUstensils = document.createElement('div')
            const p = document.createElement('p')
            const iCircle = document.createElement('i')
            iCircle.className = "fa-regular fa-circle-xmark"
            newDropUstensils.className = 'dropdown-ustensils-tag'
            newDropUstensils.appendChild(p)
            newDropUstensils.appendChild(iCircle)
            p.innerHTML = e.target.innerHTML
            tagField.appendChild(newDropUstensils)
            
            iCircle.addEventListener('click' , function(e) {
                newDropUstensils.style.display = "none"
            })
        })
    })
    console.log(ustensilsNoRepeat)
}

ingredientSearch.addEventListener('keyup', test)

function test(e) {

    const filter = e.target.value.toUpperCase();

    const div =  document.getElementById("dropdown-ingredient-list");

    const li = div.getElementsByTagName("li")

    for( let i = 0; i < li.length; i++){
       const txtValue = li[i].textContent || li[i].innerText;
        if(txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        }else{
            li[i].style.display = "none";
        }
    }
}
// test()
applianceItem()
ingredientItem()
ustensilsItem()




