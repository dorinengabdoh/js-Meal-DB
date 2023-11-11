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
             <a href=/details.html?id=${meal.idMeal}&category=${meal.strCategory}><img id="small" src="${meal.strMealThumb}" alt="Image 1"></a>
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
    console.log(data.meals);
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

// Add favorite

fetch(categoryUrl)
  .then((Response) => {
    return Response.json();
  })
  .then((data) => {
    console.log(data);
    displaySuperDelicious(data.meals);
  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
  });

function displaySuperDelicious(meals) {
  const carousel = document.querySelector(".sect4-up");
  const storedData = JSON.parse(localStorage.getItem("favoris"));
  for (let i = 0; i < storedData.length; i++) {
    console.log(storedData);
    const newItem = document.createElement("div");
    newItem.classList.add("d1");
    meals.forEach((meal) => {
  if (meal.idMeal === storedData[i]) {
      newItem.innerHTML = `
      <img src="${meal.strMealThumb}">
      <div class="star-row">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <strong>
        <p class="desc">${meal.strArea}</p>
      </strong>
      <div class="comment">
        <img id="profile" height="200%" src="./images/comment.jpg" alt="">
        <p>Tricia Albert</p>
      </div>
      <div class="favorite-and-date">
        <div class="null">
          <i class="fas fa-calendar"></i>
          <p>yesterday</p>
        </div>
        <div class="null">
          <i class="fas fa-star"></i>
          <p>456</p>
        </div>
      </div>
    `
      carousel.appendChild(newItem);
  }
    });
  }
}



setupCounter(document.querySelector("#counter"));
