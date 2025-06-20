
let number;

number = 0;
number = Number(number);
console.log(number);

document.getElementById('mainNumber').textContent = number;

document.getElementById('IncrementButton').addEventListener('click', function(){
    number = number + 1;
    document.getElementById('mainNumber').textContent = number;
});

document.getElementById('ResetButton').addEventListener('click', function(){
    number = 0;
    document.getElementById('mainNumber').textContent = number;
});

document.getElementById('DecrementButton').addEventListener('click', function(){
    number = number - 1;
    document.getElementById('mainNumber').textContent = number;
});

/*
document.getElementById('click-btn').addEventListener('click', () => {
    alert('Button clicked!');
});
*/
