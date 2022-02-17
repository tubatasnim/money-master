document.getElementById('calculator-button').addEventListener('click', function () {
    //get income money
    const userIncomeMoney = document.getElementById('income-money');
    const userMoney = userIncomeMoney.value;
    const incomeAmount = parseFloat(userMoney);
    userIncomeMoney.value = '';

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

    //error msg
    // if (userMoney != 'number') {
    //     console.log('give me a number ');
    // }
    //total expencenses input value
    const expensesTotal = document.getElementById('total-expenses');
    expensesTotal.innerText = totalExpenses;

    //balance total
    const balanceTotal = document.getElementById('total-balance');
    balanceTotalText = balanceTotal.innerText;
    const NewBalanceTotal = incomeAmount - totalExpenses;
    balanceTotal.innerText = NewBalanceTotal;


})

// saving part
document.getElementById('save-total').addEventListener('click', function () {
    // console.log('save clicked');
    // const savePecentage = document.getElementById('save-percentage');
    // const savePecentageText = savePecentage.value;
    // const saveMoney = parseFloat(savePecentageText);
    // const savingsTotal = saveMoney % balanceTotal;
    // savePecentage.innerText = savingsTotal;
    // savePecentage.value = '';
    // //save amount
    // const saveTotal = document.getElementById('save-amount');
    savingsTotalAmount();

    function getSaveAmount() {
        const savePecentage = document.getElementById('save-percentage');
        const savePecentageText = parseFloat(savePecentage.value);
        return savePecentageText;
    }
    function savingsTotalAmount() {
        const saveMoney = getSaveAmount() % balanceTotalText.value;
        console.log(saveMoney);



    }

})