import {recipes} from "../data/recipes.js";
import {CardRecip} from "../facto/recipes.js";


let dataArray;
const cardsSection = document.querySelector(".card-section")
const searchBar = document.querySelector('#search')
const iconeTag = document.querySelector('.icone-preview')
// const dropdownContainerOne = document.querySelector(".dropBox");
const iconeTag2 = document.querySelector('.icone-preview-2')
const iconeTag3 = document.querySelector('.icone-preview-3')

function getUser() {
    const res = recipes

    dataArray = orderList(res)
    createRecipesList(dataArray)
    // console.log(dataArray)
}
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

function createRecipesList(userList) {
    userList.forEach(user => {

        const recipesTemplates = new CardRecip(user);
        const cardDom = recipesTemplates.getCardDom();
    
        cardsSection.innerHTML += cardDom
    });
}

searchBar.addEventListener("keyup" , filterData);


function filterData(e){
    cardsSection.innerHTML = "";

    const searchString = e.target.value.toLowerCase();
    const filterArr = dataArray.filter(el => {
        if( el.name.toLowerCase().includes(searchString)){
            return true;
        } 

        if( el.description.toLowerCase().includes(searchString)){
            return true;
        } 

        for(let ingredient of el.ingredients){
            console.log(ingredient.ingredient , searchString)
            if(ingredient.ingredient.toLowerCase().includes(searchString)){
                return true;
            }  
        }
    });
    //  changement ingredients name pour confusion 
    if(filterArr == 0 ){
        return cardsSection.innerHTML= `
        <div class="recipe-defaut">
                <div class="recipe-defaut-txt">
                    <h5>Aucune recette ne correspond à votre critère… vous pouvez
                    chercher « tarte aux pommes », « poisson », etc.</h5>
                </div>
        </div>`;
    };

    if(searchString.length < 3 && searchString.length > 0){
        return cardsSection.innerHTML=`
        <div class="recipe-defaut">
            <div class="recipe-defaut-txt">
                <h5>Veuillez entrer plus de caractères dans le champ de recherche</h5>
            </div>
    </div>`;
    } else {
        createRecipesList(filterArr);
    };

}

getUser()


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