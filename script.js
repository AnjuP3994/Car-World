function store(){
    car = {
        brand:carbrand.value,
        price:carprice.value,
        key:carkey.value
    }
    // Check if any of the input fields are empty
    if (carbrand.value === '' || carprice.value === '' || carkey.value === '') {
        alert('Please fill in all fields.');
        return 0; // Exit the function to prevent further execution
    }
    if (carkey.value in localStorage) {
        alert('Already exists.')
    }
    else{
        localStorage.setItem(car.key,JSON.stringify(car));
        alert('Car added successfully.')  
        //Clear inputfield after click the button
        carbrand.value='';
        carprice.value='';
        carkey.value=''; 
    }
}

function retrieve(){
    x = retrievekey.value;
    if (x in localStorage) {
        car = JSON.parse(localStorage.getItem(x));
        result.innerHTML = `<div class="text-center py-1" style="box-shadow: -2px 2px 0 #41ba45,
                            2px 2px 0 #c63d2b, 2px -2px 0 #42afac, -2px -2px 0 #c6c23f;">
                                <p class="fs-5 fw-bolder mt-3">Brand: ${car.brand}</p>
                                <p class="fs-5 fw-bolder">Price: ${car.price}</p>
                            </div>`
    }
    else{
        result.innerHTML = "";
        alert('Not found.');
        //Clear inputfield after click the button
        retrievekey.value='';
    }
}

function remove(){
    y = removekey.value
    if (y in localStorage) {
        localStorage.removeItem(y)
        alert('Remove item successfully.')
        // Clear the content of the 'result' element
        result.innerHTML = '';
        //Clear inputfield after click the button
        removekey.value='';
        retrievekey.value='';
    }
    else{
        alert('Not found.');
        //Clear inputfield after click the button
        removekey.value='';
    }
}

function clearall(){
    localStorage.clear();
    alert('All item removed');
    retrievekey.value='';
    result.innerHTML = '';
}


