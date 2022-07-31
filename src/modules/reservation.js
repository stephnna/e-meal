export default class Reservation {
  // Initialization
  constructor() {
    this.API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=British';
    this.INV_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/L6BclbNP7aRwyZ5T1wFt/reservations/';
    this.mealPopup = document.getElementById('meals-popup');
  }

  // Get meals from Api, throw error if promise was not resoved
  //  otherwise popup meal if comment button is clicked

  fetchReservation = async () => {
    const response = await fetch(this.API_URL);
    const data = await response.json().catch((error) => new Error(error));
    this.popupReserve(data);
  };

  //  Function that display meal when comment button is cloked
  popupReserve = (data) => {
    const selectAllMeal = document.querySelectorAll('.reserve-meal');
    selectAllMeal.forEach((item, index) => {
      item.addEventListener('click', () => {
        const mealContainer = document.createElement('div');
        mealContainer.className = 'modal-container';
        mealContainer.id = `${index}`;
        mealContainer.innerHTML = `
      <div><img class="close" src="./assets/images/close.svg" alt="close-button"></div> 
       <div class="card-image">
       <img src="${data.meals[index].strMealThumb}">
       </div>
       <div class="card-content">
        <div class="first-part">
         <h2>${data.meals[index].strMeal} (${index + 1})</h2>      
         <span class="order-num">Order Number: ${data.meals[index].idMeal}</span>
         </div>       
        </div>                     
        <div class="reserve" id="reserve${index}"></div>
        <h2 class="comment-h2">Add a reservation</h2>
        <form id="form${index}">        
        <input type="text" id="name${index}" placeholder="Your name" required><br>
        <input type="text" id="stadate${index}" placeholder="Start date: YYYY-MM-DD" required><br>
        <input type="text" id="enddate${index}" placeholder="End date: YYYY-MM-DD" required><br>        
        <button class="comment-btn" type="button">Reserve</button>
        </form>
        
       `;
        this.mealPopup.appendChild(mealContainer);
        const commentId = document.getElementById(`reserve${index}`);
        this.getReserve(commentId, index);
        const comment = document.querySelectorAll('.comment-btn');
        this.addReserveOnPopup(comment, index);
        this.closeReserve(index);
      });
    });
  }

  //  Add comment on Popup
  addReserveOnPopup = async (comments, index) => {
    comments.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        const commentId = document.getElementById(`reserve${index}`);
        const nameValue = document.getElementById(`name${index}`).value;
        const startValue = document.getElementById(`stadate${index}`).value;
        const endValue = document.getElementById(`enddate${index}`).value;
        const formId = document.getElementById(`form${index}`);
        if (nameValue === '' || startValue === '' || endValue === '') return;

        const commentData = {
          item_id: `item${index}`,
          username: nameValue,
          date_start: startValue,
          date_end: endValue,
        };
        const commentString = JSON.stringify(commentData);
        const data = JSON.parse(commentString);
        this.addReserve(data, commentId, index);
        this.addReserve(data, commentId, index);
        formId.reset();
      });
    });
  }

  displayReserve = (commentData, commentId) => {
    let commentContainer = '';
    const commentCount = document.createElement('div');
    commentCount.className = 'comment-count';
    commentCount.innerHTML = `Reservations (${commentData.length})`;
    commentData.forEach((item) => {
      const commentContent = `      
       <div class="comment-container">${item.date_start} - ${item.date_end} by ${item.username}</div>     
    `;
      commentContainer += commentContent;
    });
    commentId.innerHTML = commentContainer;
    commentId.insertBefore(commentCount, commentId.children[0]);
  }

  // close popup when the close button is cliked
  closeReserve = (index) => {
    const closeBtn = document.querySelectorAll('.close');
    closeBtn.forEach((item) => {
      item.addEventListener('click', () => {
        document.getElementById(`${index}`).remove();
      });
    });
  }

  // Add Comments
  addReserve = async (data, commentId, index) => {
    const response = await fetch(this.INV_API_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    this.getReserve(commentId, index);
    return response;
  }

  //  Get comments
  getReserve = async (commentId, index) => {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/L6BclbNP7aRwyZ5T1wFt/reservations?item_id=item${index}`);
    const comments = await response.text().catch((error) => new Error(error));
    const commentsData = JSON.parse(comments);
    if (commentsData.error === undefined) {
      this.displayReserve(commentsData, commentId);
    }
  }
}