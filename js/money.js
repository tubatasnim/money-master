//calculate button handle
document.getElementById('calculator-button').addEventListener('click', function () {
    //get income money
    const userIncomeMoney = document.getElementById('income-money');
    const userMoney = userIncomeMoney.value;
    const incomeAmount = parseFloat(userMoney);


    //get food money
    const userFoodMoney = document.getElementById('food-money');
    const foodMoneyText = userFoodMoney.value;
    const foodAmount = parseFloat(foodMoneyText);
    //clear the expenses input field
    userFoodMoney.value = '';
    //get rent money
    const userRentMoney = document.getElementById('rent-money');
    const rentMoneyText = userRentMoney.value;
    const rentAmount = parseFloat(rentMoneyText);
    //clear the expenses input field
    userRentMoney.value = '';

    //get clothes money
    const userClothesMoney = document.getElementById('clothes-money');
    const clothesMoneyText = userClothesMoney.value;
    const clothesAmount = parseFloat(clothesMoneyText);
    //clear the expenses input field
    userClothesMoney.value = '';
    //total expenses
    const totalExpenses = (foodAmount + rentAmount + clothesAmount);

    const expensesTotal = document.getElementById('total-expenses');
    expensesTotal.innerText = totalExpenses;

    //balance total
    const balanceTotal = document.getElementById('total-balance');
    balanceTotalText = balanceTotal.innerText;
    const newBalanceTotal = incomeAmount - totalExpenses;
    balanceTotal.innerText = newBalanceTotal;

    //error number massege handle

    if (isNaN(incomeAmount) || isNaN(foodAmount) || isNaN(rentAmount) || isNaN(clothesAmount)) {
        return alert('please give a number');
    }
    //error nagetive number massege handle
    else if (incomeAmount < 0 || foodAmount < 0 || rentAmount < 0 || clothesAmount < 0) {
        return alert('please write a positive number');
    }
    // total expenses besi hole incomer theke 
    else if (incomeAmount < totalExpenses) {
        return alert('please give income Amount getterthan total expenses');
    }

})
//saving button handel
function saving() {
    let savingValue = document.getElementById('save-percentage');
    const savingValueText = savingValue.value;
    const savingValueAmount = parseFloat(savingValueText);
    let savingAmount = document.getElementById('save-amount');
    const userIncomeMoney = document.getElementById('income-money');
    const userMoney = userIncomeMoney.value;
    const incomeAmount = parseFloat(userMoney);
    let remainingValue = document.getElementById('remain-total');
    let balanceTotal = document.getElementById('total-balance');

    savingAmount.innerText = Number(incomeAmount) / 100 * Number(savingValue.value);
    remainingValue.innerText = Number(balanceTotal.innerText) - Number(savingAmount.innerText);
    savingValue.value = '';
    //error massege number
    if (isNaN(savingValueAmount)) {
        return alert('please give a number');
    }
    //error massege for nagative nbr
    else if (savingValueAmount < 0) {
        return alert('please write a positive number');
    }
    else if (remainingValue < 0) {
        return alert('please give getterthan saving ammount');
    }

}


