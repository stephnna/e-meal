export default class MealHome {
  // Initialization
  constructor() {
    this.API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=British';
    this.INV_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/L6BclbNP7aRwyZ5T1wFt/likes';
    this.mealCards = document.getElementById('meal-cards');
  }

  // Get meals from API, throw error if promise was not resoved
  //  otherwise display meal if the page loads
 getMealHome = async () => {
   const response = await fetch(this.API_URL);
   const data = await response.json().catch((error) => new Error(error));
   this.displayMeal(data);
 };

 //  display meals on Api
 displayMeal = (data) => {
   document.getElementById('item-counter').innerHTML = data.length;
   let cardContainer = '';
   data.meals.forEach((item, index) => {
     const cardContent = `
    <div class="card">
    <div class="card-image">
            <img src="${item.strMealThumb}"/>
            </div>
            <div class="card-content">
             <div class="first-part">
              <h2>${item.strMeal} (${index + 1})</h2>
              <div class='like-part strMeal'>
              <i class="fa-solid fa-heart like-icon" id='likes${index}'></i> 
              <span class='like-count' id="count${index}"></span>
              </div>
             </div>
              <div class="second-part">
              <button class="comment-meal">Comment</button>
              <button class="reserve-meal">Reservation</button>
              </div>
            </div>
            </div>
            `;
     cardContainer += cardContent;
   });

   this.mealCards.innerHTML = cardContainer;
   const selectAlllikes = document.querySelectorAll('.like-count');
   selectAlllikes.forEach((item, likesId) => {
     this.getCounts(likesId);
   });
   this.incrementLikes();
 }

//  display counts
displayCount = (countsData, likesId) => {
  const likesContainer = document.getElementById(`count${likesId}`);
  const filtered = countsData.filter((ele) => ele.item_id === `item${likesId}`);
  filtered.forEach((item) => {
    likesContainer.innerHTML = `${item.likes} likes`;
    if (item.likes === 1) {
      likesContainer.innerHTML = '1 like';
    }
  });
  if (likesContainer.innerHTML.trim() === '') {
    likesContainer.innerHTML = '0 like';
  }
}

//  Increment likes if the heart icon is cliked
incrementLikes = () => {
  const selectAllHeart = document.querySelectorAll('.fa-heart');
  selectAllHeart.forEach((item, likesId) => {
    item.addEventListener('click', () => {
      const creatLikes = { item_id: `item${likesId}` };
      const likesString = JSON.stringify(creatLikes);
      const data = JSON.parse(likesString);
      this.addCount(data, likesId);
    });
  });
}

  // Add Likes
  addCount = async (data, likesId) => {
    const response = await fetch(this.INV_API_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    this.getCounts(likesId);
    return response;
  }

  //  fetc count from involvment api
    getCounts = async (likesId) => {
      const response = await fetch(this.INV_API_URL);
      const counts = await response.text().catch((error) => new Error(error));
      const countsData = JSON.parse(counts);
      this.displayCount(countsData, likesId);
    }
}
