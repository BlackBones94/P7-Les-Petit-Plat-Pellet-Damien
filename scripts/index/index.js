import {recipes} from "../data/recipes.js";
import {CardRecip} from "../facto/recipes.js";


// appel des selector et de dataArray, variable libre 
let dataArray;
const cardsSection = document.querySelector(".card-section")
const searchBar = document.querySelector('#search')
const iconeTag = document.querySelector('.icone-preview')
const iconeTag2 = document.querySelector('.icone-preview-2')
const iconeTag3 = document.querySelector('.icone-preview-3')


// function qui recupere recipe
function getUser() {
    const res = recipes
    dataArray = orderList(res)
    createRecipesList(dataArray)
    // console.log(dataArray)
}


// function pour tier toute les recettes par ordre alphabetique avec sort 
function orderList(data) {

    const orderData = data.sort((a, b)=> {
        if( a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        }
        if( a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
        }
        return 0;
        })

    return orderData;

}


// function creant nos card en utilisant la class et le constructor 
// et utilisation du foreach pour recuperer les donner a injecter dans CardRecip
function createRecipesList(userList) {
    userList.forEach(user => {

        const recipesTemplates = new CardRecip(user);
        const cardDom = recipesTemplates.getCardDom();
    
        cardsSection.innerHTML += cardDom
    });
}

// event au keyup sur la searchBar
searchBar.addEventListener("keyup" , filterData);

// recuperation des tags en utilisant ${category} sur les querySelector > p 
// Et les push dans l'arrauy tagNames selon leut innerText 
function getUserSelectedTags(category) {
    const tagsNames = []
    const tagsNodeElements = document.querySelectorAll(`.dropdown-${category}-tag > p`)
    if(tagsNodeElements.length > 0) {
        for(const tag of tagsNodeElements) {
            tagsNames.push(tag.innerText)
        }
    }
    console.log(tagsNames)

    return tagsNames
}


export function filterData(){
    cardsSection.innerHTML = "";

    const searchString = document.getElementById('search')?.value.toLowerCase();
    const selectedTagsIngredients = getUserSelectedTags('ingredients')
    const selectedTagsAppliance = getUserSelectedTags('appliance')
    const selectedTagsUstensils = getUserSelectedTags('ustensils')

    const selectedTagsObject = {
        ingredients: selectedTagsIngredients,
        appliance: selectedTagsAppliance,
        ustensils: selectedTagsUstensils
    }

    // creation d'une function  formattedRecipeSubData avec les recipes et les  tagCategory en param
    //On utilisise switch case break pour donner l'instruction voulu et retourner ce que nous voulons 
    // selon que ce soit un ingredient une aplliance ou un ustensil
    // nous retournons le resultat dans l'array formattedSubData
    const formattedRecipeSubData = function(recipe, tagCategory) {
        let formattedSubData = []
        switch (tagCategory) {
            case 'ingredients':
                formattedSubData = recipe.ingredients.map((el) => el.ingredient)
                break;
            case 'appliance':
                formattedSubData = [recipe.appliance]
                break;
            case 'ustensils':
                formattedSubData = recipe.ustensils
                break;
            default:
                break;
        }
        return formattedSubData
    }

    // const func pour faire match les tag selon les recettes 
    const isTagMatchWithRecipeData = function(tag, recipeSubData) {
        for ( let data of recipeSubData ) {
            if ( data.toLowerCase().includes( tag.toLowerCase() ) ) {
                return true
            }
        }
    }

    // var filteredData qui nous compare par rapport a recipe les tag selectionner et les l'input principale
    let filteredData = dataArray.filter( recipe => {
        for(const tagCategory in selectedTagsObject) {
            if ( selectedTagsObject[tagCategory].length > 0 ) {
                for ( let tag of selectedTagsObject[tagCategory] ) {
                    if ( !isTagMatchWithRecipeData(tag, formattedRecipeSubData(recipe, tagCategory)) ) {
                        return false
                    }
                }
                continue
            } else {
                continue
            }
        }
        return true
	} );

    // condition qui compare la recherche sur l'input de search bar la description les ingredient et le name 
    filteredData = filteredData.filter(el => {
        if(searchString) {
            if(el.name.toLowerCase().includes(searchString)){
                return true;
            } 
            
            if( el.description.toLowerCase().includes(searchString)){
                return true;
            } 
            for(let ingredient of el.ingredients){
                if(ingredient.ingredient.toLowerCase().includes(searchString)){
                    return true;
                }  
            }
        } else {
            return true;
        }
    });

    // Si filteredData est egale a aucune card return message recette erreur 
    if(filteredData == 0 ){
        return cardsSection.innerHTML= `
        <div class="recipe-defaut">
                <div class="recipe-defaut-txt">
                    <h5>Aucune recette ne correspond à votre critère… vous pouvez
                    chercher « tarte aux pommes », « poisson », etc.</h5>
                </div>
        </div>`;
    };

    // si longueur du message dans input est inferieur a 3 caractére return  message erreur
    if(searchString.length < 3 && searchString.length > 0){
        return cardsSection.innerHTML=`
        <div class="recipe-defaut">
            <div class="recipe-defaut-txt">
                <h5>Veuillez entrer plus de caractères dans le champ de recherche</h5>
            </div>
    </div>`;
    } else {
        createRecipesList(filteredData);

    };

}

getUser()




/////////////////////////////////////////////////////////////////////////////////////

// REFACTO LA TOTAL DANS UNE SEULE FONCTION  
iconeTag.addEventListener("click", openModalIngredient);
iconeTag2.addEventListener("click" , openModalAppareil);
iconeTag3.addEventListener("click" , openModalUstensiles)


export const dropdownIngredient = document.querySelector('.dropdown-ingredient')
export const dropdownAppareil = document.querySelector('.dropdown-appareil')
export const dropdownUstensiles = document.querySelector('.dropdown-ustensiles')
const ingredientInput = document.getElementById('search-ingredient')
const appareilInput = document.getElementById('search-appareil')
const ustensileInput = document.getElementById('search-ustensiles')

function openModalIngredient() {
    if(dropdownIngredient.style.display === 'none') {
        dropdownIngredient.style.display = 'block';
        ingredientInput.style.width = '667px'
    }else{
        dropdownIngredient.style.display = 'none';
        ingredientInput.style.width = "170px"
    }
}

function openModalAppareil() {
    if(dropdownAppareil.style.display === 'none'){
        dropdownAppareil.style.display = 'block';
        appareilInput.style.width = '667px'
    }else{
        dropdownAppareil.style.display = 'none';
        appareilInput.style.width = "170px";
    };
}

function openModalUstensiles() {
    if(dropdownUstensiles.style.display === 'none'){
        dropdownUstensiles.style.display = 'block';
        ustensileInput.style.width = '667px'
    }else{
        dropdownUstensiles.style.display = 'none';
        ustensileInput.style.width = "170px";
    };
}


///////////////////////////////////////////////////////////////////////////
