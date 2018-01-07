
function isInteger(number){
    return (number === (number^0));
}

alert(isInteger(1));
alert(isInteger(1.5));
alert(isInteger(-0.5));