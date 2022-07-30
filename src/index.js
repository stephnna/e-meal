import './style.css';
import MealHome from './modules/home.js';
import Meal from './modules/comment.js';

import './images/meal1.jpg';
import './images/meal2.jpg';
import './images/meal3.jpg';
import './images/meal4.jpg';
import './images/meal5.jpg';
import './images/close.svg';
import './images/meal-screnshot.png';

const mealHomePage = new MealHome();
const niceMeal = new Meal();
mealHomePage.getMealHome();
niceMeal.getMeal();
