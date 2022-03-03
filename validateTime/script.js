// validate time
let btnCheck = document.querySelector('button');
let result = document.querySelector('h1');

let inputMonth = document.querySelector('#month');
let inputDate = document.querySelector('#date');
let inputYear = document.querySelector('#year');

btnCheck.addEventListener('click', () => {
    let month = inputMonth.value;
    let date = inputDate.value;
    let year = inputYear.value;

    result.innerText = moment(`${month}/${date}/${year}`, 'MM/DD/YYYY', true).isValid();

});