import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

const categoryUrl = "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?f=a"

// fetch function to make a GET request to the API.

fetch(categoryUrl)
  .then(Response => {
    return Response.json();
  })
  .then(data => {
    console.log(data)
    // displayCategoriesMeals(data.meals);
  })


function displayCategoriesMeals(meals) {
  const mealContainer = document.querySelector('.sect5');
  meals.forEach(meal => {
    const mealCard = document.createElement('div');
    mealCard.classList.add('carte1');
    mealCard.innerHTML = `
          <div class="image-container">
            <div class="image-card">
              <img id="small" src="${meal.strCategoryThumb}" alt="Image 1">
              <div class="desc">${meal.strCategory}</div>
            </div>
          </div>
    `;
    mealContainer.appendChild(mealCard);
  });
}



fetch(apiUrl)
  .then(Response => {
    return Response.json();
  })
  .then(data => {
    // console.log(data)
    displayDeliciousMeals(data.meals);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

function displayDeliciousMeals(meals) {
  const mealContainer = document.querySelector('.sect4-up');
  meals.forEach(meal => {
    const mealCard = document.createElement('div');
    mealCard.classList.add('d1');
    mealCard.innerHTML = `
          <img src="${meal.strMealThumb}" height="20%" id="card" alt="d1">
          <div class="star-row">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <strong>
            <p class="desc">${meal.strMeal}</p>
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
    `;
    mealContainer.appendChild(mealCard);
  });
}





setupCounter(document.querySelector('#counter'))
