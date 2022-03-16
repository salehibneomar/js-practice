
const api = 'https://jsonplaceholder.typicode.com/todos';
const method = 'GET';

const request = new XMLHttpRequest();

// 1. open -> 2. send -> 3. loading -> 4. done

request.open(method, api);
request.send();

request.addEventListener('readystatechange', () => {
    if(request.readyState === 3){
        console.log('Loading...');
    }

    if(request.readyState === 4 && request.status === 200){
        console.log(request.response);
    }
    else if(request.readyState === 4){
        console.log("Failed to fetch data");
    }
});

// Promise , Fetch API (response, response.json, response.status, response.statusText), async, await

// JSON.parse(), JSON.stringify()


/*  

    Js promise ([class] new Promise(resolve, reject)) is an async opertion which resolves or rejects () an operation and returns
    we can use .then() method to get the resolved data and .catch() to get rejected message. it is a class takes resolve and reject annon/arrow function as parameters.

    Fetch api returns a promise, also response from fetch api reponse.json() returns a promise.

    fetch api doesn't always rejects it sometimes resolves a request such as 404 status in that case we have to write custom error solution to reject the promise

    a function made aysnc with aysnc keyword also returns a promise.
    a await request returns resolved promise response.
    we cannot use awat keyword before a request/function unless the parent function is an async function.

    an await keyword stalls/pause a particular code flow till the response is received but parent async function let the other code blocks to run.

*/