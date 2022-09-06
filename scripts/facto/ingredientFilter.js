import {recipes} from "../data/recipes.js";



const allIngredients = [];

for(let i=0; i< recipes.length; i++) {
    let ingredients = recipes[i].ingredients;
    ingredients.map(({ingredient}) =>{
        allIngredients.push(`${ingredient.toLowerCase()}`);
    } )
}

const ingredientNoRepeat = new Set(allIngredients.sort());
// console.log(ingredientNoRepeat)



