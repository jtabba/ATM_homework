

var depositBtn = document.querySelector('.deposit-btn');
var withdrawBtn = document.querySelector('.withdraw-btn');


function deposit() {

    var balanceScreen = document.querySelector('.balanceScreen').textContent;
    var result = Number(balanceScreen) + 10;
    document.querySelector('.balanceScreen').textContent = result;
    document.querySelector('.tooLow').textContent = ' ';
    document.querySelector('.screen').style.border = '2px solid greenyellow';
    document.querySelector('h4').style.color = 'greenyellow';
    document.querySelector('.screen').style.boxShadow = '0 0 20px greenyellow';
    

}

function withdraw() {

    var balanceScreen = document.querySelector('.balanceScreen').textContent;

    if (Number(balanceScreen) > 0) {
        var result = Number(balanceScreen) - 10;
        document.querySelector('.balanceScreen').textContent = result;

    } else if (Number(balanceScreen) < 10) {

        document.querySelector('.tooLow').textContent = 'Your balance is too low.';
        document.querySelector('.screen').style.border = '2px solid red';
        document.querySelector('h4').style.color = 'red';
        document.querySelector('.screen').style.boxShadow = 'inset 0 0 50px red';

        
    } 
}

depositBtn.addEventListener('click', deposit);
withdrawBtn.addEventListener('click', withdraw);

