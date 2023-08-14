'use strict';

// https://habr.com/ru/post/495698/

// https://jsonplaceholder.typicode.com/

const BASE_URL = 'https://jsonplaceholder.typicode.com';

let result;

fetch(`${BASE_URL}/users`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.status);
        }
        return response.json();
    }
).then(data => {
    result = data;
    console.log(data);
}).catch(console.warm);

