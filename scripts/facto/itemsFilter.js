import {recipes} from "../data/recipes.js";
import { filterData } from "../index/index.js";


// tableau d'ingredient , appliance , ustensils
const allAppliance = [];
const allUstensils =[];
const  allIngredients = [];

let listAppareil = document.getElementById("dropdown-appareil-list");
let listIngredient = document.getElementById("dropdown-ingredient-list");
let listUstensils = document.getElementById("dropdown-ustensiles-list");
const tagField = document.querySelector('.tag-section')

// creer tab global current recipes
// destructuring [... TEST] POUR TAB ET OBJET 

// function appliance boucle pour recuperer tous les items avec for 
// creation d'une const avec new set et l'application de la methode sort 
function applianceItem(){

    for(let i=0; i< recipes.length; i++) {
        let appliances = recipes[i].appliance;
        allAppliance.push(appliances)
    }

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

            // On click de la croix on remove l'élement entier
            iCircle.addEventListener('click' ,function(e) {
                newDropAppliance.remove()
                filterData()
            })
            // On reutilise filterData pour ravoir nos recette ou nos messages d erreur 
            filterData()
        })
    });
}

// function ingredient boucle pour recuperer tous les items avec for 
// creation d'une const avec new set et l'application de la methode sort et slice 
// (peut etre mettre le tab d'ingredient en entier )
function ingredientItem() {

    for(let i=0; i< recipes.length; i++) {
        let ingredients = recipes[i].ingredients;
        ingredients.map(({ingredient}) =>{
            allIngredients.push(`${ingredient.toLowerCase()}`);
        } )
    }

    const ingredientNoRepeat = new Set(allIngredients.slice(0,32).sort());

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
                
                // On click de la croix on remove l'élement entier 
                iCircle.addEventListener('click' , function(e) {
                    newDropIngredients.remove()
                    filterData()
                })
                // On reutilise filterData pour ravoir nos recette ou nos messages d erreur 
                filterData()
            })
        })
}

// function ustensils boucle pour recuperer tous les items avec for 
// creation d'une const avec new set et l'application de la methode sort et slice 
function ustensilsItem(){

    for(let i=0; i< recipes.length; i++) {
        let ustensils = recipes[i].ustensils;
        ustensils.filter((ustensil) =>{
            allUstensils.push(ustensil)
        })
    }
    const ustensilsNoRepeat = new Set(allUstensils.slice(0,30).sort());
    

    ustensilsNoRepeat.forEach((item) => {
        let ustenLi = document.createElement('li');
        ustenLi.innerText = item;
        listUstensils.appendChild(ustenLi)
        // console.log(ustenLi , item)

        ustenLi.addEventListener('click' , function(e) {
            const newDropUstensils = document.createElement('div')
            const p = document.createElement('p')
            // p.className = 'ustensils-custom'
            const iCircle = document.createElement('i')
            iCircle.className = "fa-regular fa-circle-xmark"
            newDropUstensils.className = 'dropdown-ustensils-tag'
            newDropUstensils.appendChild(p)
            newDropUstensils.appendChild(iCircle)
            p.innerHTML = e.target.innerHTML
            tagField.appendChild(newDropUstensils)       

            // On click de la croix on remove l'élement entier 
            iCircle.addEventListener('click' , function(e) {
                newDropUstensils.remove()
                filterData()
            })
            // On reutilise filterData pour ravoir nos recette ou nos messages d erreur 
            filterData()
        })


    })
}


applianceItem()
ingredientItem()
ustensilsItem()
