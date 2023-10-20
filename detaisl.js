import "./style.css";
import { setupCounter } from "./counter.js";

const apiUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";


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
              <img id="small" src="${meal.strMealThumb}" alt="Image 1">
              <div class="desc">${meal.strMeal}</div>
            </div>
          </div>
    `;
    mealContainer.appendChild(mealCard);
  });
}