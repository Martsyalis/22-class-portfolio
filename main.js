var buttonEl = document.getElementById('submit-button')


buttonEl.addEventListener('click', function(event){
    console.log(event);
    var inputEl = document.getElementById('name-input');
    console.log(inputEl.value);
    alert('Hello ' + inputEl.value + '!');
})



function multiply (tom, jery){
    return tom * jery
};

var productOf5And10 = multiply(5, 10);
console.log(productOf5And10);