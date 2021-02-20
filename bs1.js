function picknumbers(){
//this provides the 5 radom numbers for the main array
    var num1 = 0;
    for (var i = 0; i < 6; i++){
        var num1 = (Math.random()*70)+1;
    num1 = parseInt(num1);
    }

    var num2 = 0;
    for (var i = 0; i < 6; i++){
        var num2 = (Math.random()*70)+1;
    num2 = parseInt(num2);
    }

    var num3 = 0;
    for (var i = 0; i < 6; i++){
        var num3 = (Math.random()*70)+1;
    num3 = parseInt(num3);
    }

    var num4 = 0;
    for (var i = 0; i < 6; i++){
        var num4 = (Math.random()*70)+1;
    num4 = parseInt(num4);
    }

    var num5 = 0;
    for (var i = 0; i < 6; i++){
        var num5 = (Math.random()*70)+1;
    num5 = parseInt(num5);
    }
//this adds the numbers to an array
    var mainNumbersArray = [num1, num2, num3, num4, num5];
    mainNumbersArray.sort(function(a, b){return a-b});

//this gives you the value for the bonus number
    var bonusNum = (Math.random()*25)+1;
    bonusNum = parseInt(bonusNum);

    var mainNumber = document.querySelector('.mainNumber');
    var bonusNumber = document.querySelector('.bonusNumber');

    mainNumber.innerHTML = mainNumbersArray;
    bonusNumber.innerHTML = bonusNum;


    
}
console.log('IT WORKS');