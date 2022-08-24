const dropdownContainerOne = document.querySelector(".dropBox");
// ajouter la fonction sur le on click

// faire un drop avec un input maybe au lieu de btn 
dropdownContainerOne.innerHTML = `
    <div class="dropdown">

        <button onclick="dropFunc()" class="dropbtn-ingredient">Ingredients</button>
        <div id="myDropdown1" class="dropdown-content">
            <a class="ingredient-link" href="#"> ingredient list </a>
        </div>

        <button onclick="dropFunc2()" class="dropbtn-appareils">Appareils</button>
        <div id="myDropdown2" class="dropdown-content">
            <a class="appareils-link" href="#"> appareils list </a>
        </div>

        <button onclick="dropFunc3()" class="dropbtn-ustensiles">Ustensiles</button>
        <div id="myDropdown3" class="dropdown-content">
            <a class="ustensiles-link" href="#"> Ustensiles list </a>
        </div>
    </div>
`
// form et input pour dropdown

// function pour target les id 

function dropFunc() {
    document.getElementById("myDropdown1").classList.toggle("show")
}

function dropFunc2() {
    document.getElementById("myDropdown2").classList.toggle("show")
}

function dropFunc3() {
    document.getElementById("myDropdown3").classList.toggle("show")
}

// close the dropdown 

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn-ustensiles ,.dropbtn-ingredient, .dropbtn-appareils ')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }