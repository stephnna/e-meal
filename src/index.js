import './style.css';
import MealHome from './modules/home.js';
import Comment from './modules/comment.js';
import Reservation from './modules/reservation.js';
import './assets/images/meal1.jpg';
import './assets/images/meal2.jpg';
import './assets/images/meal3.jpg';
import './assets/images/meal4.jpg';
import './assets/images/meal5.jpg';
import './assets/images/close.svg';
import './assets/images/meal-screnshot.png';

const mealHomePage = new MealHome();
const newComment = new Comment();
const newReservation = new Reservation();

mealHomePage.getMealHome();
newComment.fetchComment();
newReservation.fetchReservation();
