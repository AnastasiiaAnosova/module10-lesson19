'use strict';// це директива, яка вказує, що код виконуєтья в суровому режимі
// is a directive that indicates that the code is executed in strict mode

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '95632b02f9162f375a368971925f5209';

export const getWeatherDataByCityName = cityName =>
  fetch(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&lang=ua&units=metric`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    }
  );
        
// не робимо подальші блоки then() або catch(), щоб функція була загальна.
// do not make further then() or catch() blocks to make the function generic.
