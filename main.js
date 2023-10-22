import "./style.css";
import { setupCounter } from "./counter.js";

const categoryUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";

// fetch function to make a GET request to the API for Latest recipes .

fetch(categoryUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    displayCategoriesMeals(data.meals);
  });

function displayCategoriesMeals(meals) {
  const mealContainer = document.querySelector(".sect5");
  meals.forEach((meal) => {
    const mealCard = document.createElement("div");
    mealCard.classList.add("carte1");
    mealCard.innerHTML = `
          <div class="image-container">
            <div class="image-card">
             <a href=http://127.0.0.1:5500/@latest/details.html?id=${meal.idMeal}&category=${meal.strCategory}><img id="small" src="${meal.strMealThumb}" alt="Image 1"></a>
              <div id='test' class="desc">${meal.strMeal}</div>
            </div>
          </div>
    `;
    mealContainer.appendChild(mealCard);
  });
}

// fetch function to make a GET request to the API for Popular categories.

fetch(apiUrl)
  .then((Response) => {
    return Response.json();
  })
  .then((data) => {
    console.log(data);
    displayDeliciousMeals(data.meals);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

function displayDeliciousMeals(meals) {
  const mealContainer = document.querySelector(".sect3");
  meals.forEach((meal) => {
    const mealCard = document.createElement("div");
    mealCard.classList.add("pasta");
    mealCard.innerHTML = `
        <div class="pasta">
          <img src="${meal.strMealThumb}"  id="img" alt="">
          <span ${meal.strMeal}</span>
        </div>
    `;
    mealContainer.appendChild(mealCard);
  });
}

setupCounter(document.querySelector("#counter"));
const testt = document.getElementById("test")

testt.addEventListener("click", ()=>{
  console.log("hello");
})


// return then footer

function displayFooter(meals) {
  const mealContainer = document.querySelector(".instru");
  const mealCard = document.createElement("div");
  mealCard.classList.add("intru");
  meals.forEach((meal) => {
    if (mealId == meal.idMeal) {
      mealCard.innerHTML = `
      <p class="circle">1</p>
      <p> ${meal.strInstructions} </p>
    `;
    }

    mealContainer.appendChild(mealCard);
  });
}