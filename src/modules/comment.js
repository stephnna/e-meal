export default class Comment {
  // Initialization
  constructor() {
    this.API_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?a=British';
    this.INV_API_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/L6BclbNP7aRwyZ5T1wFt/comments';
    this.mealPopup = document.getElementById('meals-popup');
  }

  // Get meals from Api, throw error if promise was not resoved
  //  otherwise popup meal if comment button is clicked

  fetchComment = async () => {
    const response = await fetch(this.API_URL);
    const data = await response.json().catch((error) => new Error(error));
    this.popupMeal(data);
  };

  //  Function that display meal when comment button is cloked
  popupMeal = (data) => {
    const selectAllMeal = document.querySelectorAll('.comment-meal');
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
        <div class="reserve" id="comment${index}"></div>
        <h2 class="comment-h2">Add a comment</h2>
        <form id="form${index}">        
        <input type="text" id="name${index}" placeholder="Your name" required><br>
        <textarea name="text-area" id="text${index}" class="text-area" placeholder="Your insights" rows="5" maxlength="500" required></textarea><br>
        <button class="comment-btn" type="button">Comment</button>
        </form>        
       `;
        this.mealPopup.appendChild(mealContainer);
        const commentId = document.getElementById(`comment${index}`);
        this.getComment(commentId, index);
        const comment = document.querySelectorAll('.comment-btn');
        this.addCommentOnPopup(comment, index);
        this.closeMeal(index);
      });
    });
  }

  //  Add comment on Popup
  addCommentOnPopup = async (comments, index) => {
    comments.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.preventDefault();
        const commentId = document.getElementById(`comment${index}`);
        const nameValue = document.getElementById(`name${index}`).value;
        const commentValue = document.getElementById(`text${index}`).value;
        const formId = document.getElementById(`form${index}`);
        if (nameValue === '' || commentValue === '') return;

        const commentData = {
          item_id: `item${index}`,
          username: nameValue,
          comment: commentValue,
        };
        const commentString = JSON.stringify(commentData);
        const data = JSON.parse(commentString);
        this.addComment(data, commentId, index);
        formId.reset();
      });
    });
  }

  displayComment = (commentData, commentId) => {
    let commentContainer = '';
    const commentCount = document.createElement('div');
    commentCount.className = 'comment-count';
    commentCount.innerHTML = `Comments (${commentData.length})`;
    commentData.forEach((item) => {
      const commentContent = `      
       <div class="comment-container">${item.creation_date}<br>${item.username}: ${item.comment}</div>     
    `;
      commentContainer += commentContent;
    });
    commentId.innerHTML = commentContainer;
    commentId.insertBefore(commentCount, commentId.children[0]);
  }

  // close popup when the close button is cliked
  closeMeal = (index) => {
    const closeBtn = document.querySelectorAll('.close');
    closeBtn.forEach((item) => {
      item.addEventListener('click', () => {
        document.getElementById(`${index}`).remove();
      });
    });
  }

  // Add Comments
  addComment = async (data, commentId, index) => {
    const response = await fetch(this.INV_API_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    this.getComment(commentId, index);
    return response;
  }

  //  Get comments
  getComment = async (commentId, index) => {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/L6BclbNP7aRwyZ5T1wFt/comments?item_id=item${index}`);
    const comments = await response.text().catch((error) => new Error(error));
    const commentsData = JSON.parse(comments);
    if (commentsData.error === undefined) {
      this.displayComment(commentsData, commentId);
    }
  }
}