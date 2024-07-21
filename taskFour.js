// New Features in ECMAScript 6 (ES6)

// let and const keywords: These provide block-scoped variables, offering more control over variable lifetimes.

// Arrow functions: A concise syntax for writing functions, often used for short functions or when this binding is important.

// Template literals: Allow embedding expressions within strings using backticks () and ${expression} syntax.

// Destructuring: Extracts values from arrays or objects into distinct variables.

// Classes: Introduced class-based object-oriented programming, making code more structured.

// Promises: A way to handle asynchronous operations more cleanly, replacing callbacks.

// Modules: Enable modular code organization and reusability through import and export statements.

// Default and rest parameters: Allow functions to have default values for parameters and gather remaining arguments into an array.

// Spread operator: Used to expand iterable objects into individual elements.

// Generators: Functions that can be paused and resumed, used for creating iterators.

// Maps and sets

// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------

// XMLHttpRequest (XHR): The traditional method, requiring manual handling of requests and responses.

/*
const apiUrl = 'https://api.example.com/data';

        // Function to fetch data from the API using XMLHttpRequest
        function fetchData() {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', apiUrl, true);

            xhr.onload = function() {
                if (xhr.status >= 200 && xhr.status < 300) {
                    const data = JSON.parse(xhr.responseText);
                    displayData(data);
                } else {
                    console.error('The request failed with status:', xhr.statusText);
                }
            };

            xhr.onerror = function() {
                console.error('There was a network error.');
            };

            xhr.send();
        }

        // Function to display the fetched data
        function displayData(data) {
            const container = document.getElementById('data-container');
            container.innerHTML = <pre>${JSON.stringify(data, null, 2)}</pre>;
        }
*/

// ---------------------------------------------------------
// Fetch API: A newer, promise-based approach for making network requests.
/*
 fetch('https:api.example.com/data')
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(error => console.error('Error:', error));
*/

// ---------------------------------------------------------
//   Third-party libraries: Libraries like Axios
/*
import axios  from 'axios'
axios.get('https://api.example.com/data')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
 
 */
