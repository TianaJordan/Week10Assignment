/*
Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
A Bootstrap styled table representing your choice of data.
A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.
*/


let id = 0;

// adding event listener to the submit button to perform an action when clicked
document.getElementById('formButton').addEventListener('click', (event) => { 
    event.preventDefault()

// accessing the table data
   let table = document.getElementById('tableList');

// creating a new row to be added to the top of the table
   let row = table.insertRow(1);

// setting cell attributes to match data submitted in form
   row.setAttribute('id', `item${id}`);
   row.insertCell(0).innerHTML = document.getElementById('inputName').value;
   row.insertCell(1).innerHTML = document.getElementById('inputEmail').value;
   row.insertCell(2).innerHTML = document.getElementById('inputItem').value;

// resetting the input fields after form is submitted
   document.getElementById('inputName').value = ''
   document.getElementById('inputEmail').value = ''
   document.getElementById('inputItem').value = ''
})

