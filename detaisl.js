const data = window.location.search;
const urlParam = new URLSearchParams(data);
const mealId = urlParam.get("id");
const mealCategory = urlParam.get("category");
const mealVideo = urlParam.get("video");
const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealCategory}`;
const apiIng = "https://www.themealdb.com/api/json/v1/1/search.php?s";


// display Fresh Recipes details page
fetch(apiUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // console.log(data);
    displayDetailMeals(data.meals);
  });

function displayDetailMeals(meals) {
  const mealContainer = document.querySelector(".recipe");
  meals.forEach((meal) => {
    // console.log(meal);
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

// display the youtube video detail page

fetch(apiIng)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    displayDetailsMeals(data.meals);
    displayVideo(data.meals);
  });

function displayVideo(meals) {
  const mealContainer = document.querySelector(".all-video");
  const mealCard = document.createElement("div");
  mealCard.classList.add("video");
  meals.forEach((meal) => {
    if (mealId == meal.idMeal) {
      var videoURL = meal.strYoutube;
      var splited = videoURL.split("v=");
      var videoId = splited[1];
      console.log(meal.strYoutube);
      mealCard.innerHTML = `
    <iframe width="100%" height="710px" class="videos-food"
      src="https://www.youtube.com/embed/${videoId}">
    </iframe>
    `;
    }

    mealContainer.appendChild(mealCard);
  });
}

// display ingredient details page

function displayDetailsMeals(meals) {
  const mealContainer = document.querySelector(".ingre");
  // console.log(meals);
  meals.forEach((meal) => {
    const mealCard = document.createElement("div");
    // console.log(meal);
    mealCard.classList.add("ingredient");
    if (mealId == meal.idMeal) {
      if (
        meal.strIngredient1 != "" ||
        meal.strIngredient1 != null ||
        meal.strIngredient2 != "" ||
        meal.strIngredient2 != null ||
        meal.strIngredient3 != "" ||
        meal.strIngredient3 != null ||
        meal.strIngredient4 != "" ||
        meal.strIngredient4 != null ||
        meal.strIngredient5 != "" ||
        meal.strIngredient5 != null ||
        meal.strIngredient6 != "" ||
        meal.strIngredient6 != null ||
        meal.strIngredient7 != "" ||
        meal.strIngredient7 != null ||
        meal.strIngredient8 != "" ||
        meal.strIngredient8 != null ||
        meal.strIngredient9 != "" ||
        meal.strIngredient9 != null ||
        meal.strIngredient10 != "" ||
        meal.strIngredient10 != null ||
        meal.strIngredient11 != "" ||
        meal.strIngredient11 != null ||
        meal.strIngredient12 != "" ||
        meal.strIngredient12 != null ||
        meal.strIngredient13 != "" ||
        meal.strIngredient13 != null ||
        meal.strIngredient14 != "" ||
        meal.strIngredient14 != null ||
        meal.strIngredient15 != "" ||
        meal.strIngredient15 != null ||
        meal.strIngredient16 != "" ||
        meal.strIngredient16 != null ||
        meal.strIngredient17 != "" ||
        meal.strIngredient17 != null ||
        meal.strIngredient18 != "" ||
        meal.strIngredient18 != null ||
        meal.strIngredient19 != "" ||
        meal.strIngredient19 != null ||
        meal.strIngredient20 != "" ||
        meal.strIngredient20 != null
      ) {
        mealCard.innerHTML = `
        <div class="ingredient-container">
        <div class="ingedients">
        <strong> 1 -</strong>
        <p class="gri">${meal.strMeasure1}</p>
        <p>${meal.strIngredient1}</p>
      </div>
      <div class="ingedients">
      <strong>2 -</strong>
      <p class="gri">${meal.strMeasure2}</p>
        <p>${meal.strIngredient2}</p>
      </div>
      <div class="ingedients">
        <strong>3 -</strong>
        <p class="gri">${meal.strMeasure3}</p>
        <p>${meal.strIngredient3}</p>
      </div>
      <div class="ingedients">
        <strong>4 -</strong>
        <p class="gri">${meal.strMeasure4}</p>
        <p>${meal.strIngredient4}</p>
      </div>
      <div class="ingedients">
         <strong>5 -</strong>
        <p class="gri">${meal.strMeasure5}</p>
        <p>${meal.strIngredient5}</p>
      </div>
      <div class="ingedients">
        <strong>6 -</strong>
        <p class="gri">${meal.strMeasure6}</p>
        <p>${meal.strIngredient6}</p>
      </div>
      <div class="ingedients">
         <strong>7 -</strong>
        <p class="gri">${meal.strMeasure7}</p>
        <p>${meal.strIngredient7}</p>
      </div>
      <div class="ingedients">
        <strong>8 -</strong>
        <p class="gri">${meal.strMeasure8}</p>
        <p>${meal.strIngredient8}</p>
      </div>
      <div class="ingedients">
        <strong>9 -</strong>
        <p class="gri">${meal.strMeasure9}</p>
        <p>${meal.strIngredient9}</p>
      </div>
      <div class="ingedients">
        <strong>10 -</strong>
        <p class="gri">${meal.strMeasure10}</p>
        <p>${meal.strIngredient10}</p>
      </div>
      <div class="ingedients">
         <strong>11 -</strong>
        <p class="gri">${meal.strMeasure11}</p>
        <p>${meal.strIngredient11}</p>
      </div>
      <div class="ingedients">
         <strong>12 -</strong>
        <p class="gri">${meal.strMeasure12}</p>
        <p>${meal.strIngredient12}</p>
      </div>
      <div class="ingedients">
        <strong>13 -</strong>
        <p class="gri">${meal.strMeasure13}</p>
        <p>${meal.strIngredient13}</p>
      </div>
      <div class="ingedients">
        <strong>14 -</strong>
        <p class="gri">${meal.strMeasure14}</p>
        <p>${meal.strIngredient14}</p>
      </div>
      <div class="ingedients">
        <strong>15 -</strong>
        <p class="gri">${meal.strMeasure15}</p>
        <p>${meal.strIngredient15}</p>
      </div>
      <div class="ingedients">
        <strong>16 -</strong>
        <p class="gri">${meal.strMeasure16}</p>
        <p>${meal.strIngredient16}</p>
      </div>
      <div class="ingedients">
         <strong>17 -</strong>
        <p class="gri">${meal.strMeasure17}</p>
        <p>${meal.strIngredient17}</p>
      </div>
      <div class="ingedients">
       <strong>18 -</strong>
        <p class="gri">${meal.strMeasure18}</p>
        <p>${meal.strIngredient18}</p>
      </div>
      <div class="ingedients">
        <strong>19 -</strong>
        <p class="gri">${meal.strMeasure19}</p>
        <p>${meal.strIngredient19}</p>
      </div>
      <div class="ingedients">
        <strong>20 -</strong>
        <p class="gri">${meal.strMeasure20}</p>
        <p>${meal.strIngredient20}</p>
      </div>
        </div>
       
       
        `;
        mealContainer.appendChild(mealCard);
      }
    }
  });
}


// display Instructions details page

fetch(apiIng)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    displayInstruction(data.meals)
  });

function displayInstruction(meals) {
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



