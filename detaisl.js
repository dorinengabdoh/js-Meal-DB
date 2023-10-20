
const apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";
const apiIng = "https://www.themealdb.com/api/json/v1/1/search.php?s"

fetch(apiUrl)

  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    displayDetailsMeals(data.meals);
  });

function displayDetailsMeals(meals) {
  const mealContainer = document.querySelector(".recipe");
  meals.forEach((meal) => {
    const mealCard = document.createElement("div");
    mealCard.classList.add("reci");
    mealCard.innerHTML = `
    <img id="icon-img" src="${meal.strMealThumb}" alt="">
    <div class="icon-text">
      <div class="star-row">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <strong> <p>${meal.strMeal}</p></strong>
    </div>
    `;
    mealContainer.appendChild(mealCard);
  });
}




fetch(apiUrl)

  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    displayDetailsMeals(data.meals);
  });

function displayDetailsMeals(meals) {
  const mealContainer = document.querySelector(".recipe");
  meals.forEach((meal) => {
    const mealCard = document.createElement("div");
    mealCard.classList.add("reci");
    mealCard.innerHTML = `
    <img id="icon-img" src="${meal.strMealThumb}" alt="">
    <div class="icon-text">
      <div class="star-row">
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
      </div>
      <strong> <p>${meal.strMeal}</p></strong>
    </div>
    `;
    mealContainer.appendChild(mealCard);
  });
}