/* 
    1. Write a fat arrow async function that does the following:
        - uses await to fetch data from this endpoint - 'https://swapi.dev/api/people/1/'
        - uses await to jsonify the response received from the fetch
        - console.log's the results of the fetch before console.logging a message saying 'this should print last'
*/

//NOTE: Write your code below and push back to your github branch.  SUBMIT YOUR GITHUB URL IN CANVAS


async function challenge2(){ 
    await fetch('https://swapi.dev/api/people/1/')
        .then(result => result.json())
        .then(data => console.log(data))
    console.log('this should print last')
}


challenge2();

