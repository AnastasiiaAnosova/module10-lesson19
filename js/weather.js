// // // https://www.weatherbit.io/api

// import { getWeatherDataByCityName } from "./weather-api";

// // 'use strict';

// const weatherFormEl = document.querySelector('.js-search-form');
// const weatherWrapperEl = document.querySelector('.weather__wrapper');

// const convertSecondsToHoursAndMinutes = seconds => {
//   const date = new Date(seconds * 1000);

//   return `${`${date.getHours()}`.padStart(2,0)}:${`${date.getMinutes()}`.padStart(2, 0)}`;
// };

// const handleWeatherFormSubmit = (event) => {
//     event.preventDefault();

//     const searchQuery = event.target.firstElementChild.value.trim();
//     if (!searchQuery) {
//         return;
//     } 

//     getWeatherDataByCityName(searchQuery).then(data => {
//         data.sys.sunset = convertSecondsToHoursAndMinutes(data.sys.sunset);
//         data.sys.sunrise = convertSecondsToHoursAndMinutes(data.sys.sunrise);
//     }).catch(console.warn);
// }

// weatherFormEl.addEventListener('submit', handleWeatherFormSubmit);

//Може трохи не по темі, але не могли б ви розібрати покроково як працює даний код 
// рекурсія
// function calcSumm(numOne, numTwo) {
//     if (numTwo === 1) {
//         return numOne;
//     } else {        
//         return numOne * calcSumm(numOne, numTwo - 1);
//     }
// }
// console.log(calcSumm(2, 3)); 

