//Function for take input fields values with convert:
function getInputFieldValue(inputId){
    const inputFieldId= document.getElementById(inputId);
    const inputFieldValue= parseFloat(inputFieldId.value);
    return inputFieldValue;
}
//Function for set innerText of totalExpenses, balance, savingAmount and remainingBalance:
function setInnerText(textId , textValue){
    document.getElementById(textId).innerText = textValue;
}
//calculate buttons :=======================================================
document.getElementById("calculate-btn").addEventListener('click',function(){
    const income = getInputFieldValue("income-input");
    const foodCost = getInputFieldValue("food-input");
    const rentCost = getInputFieldValue("rent-input");
    const clothCost = getInputFieldValue("cloth-input");

    const totalExpenses = foodCost + rentCost + clothCost;
    const balance = income - totalExpenses;
    if( isNaN(income) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothCost) || income<0 ||foodCost<0 || rentCost<0 || clothCost<0){
        alert("Invalid input. please give a number input.");
    }
    else if(totalExpenses>income){
        alert("you expenses too much money!");
    }
    else{
        setInnerText("total-expenses" , totalExpenses);
        setInnerText("balance" , balance);
    }
});
//save button calculation===============================================
document.getElementById("save-btn").addEventListener("click", function(){
    const savePercentage = getInputFieldValue("percent-input");
    const income= getInputFieldValue("income-input");
    
    const balanceId= document.getElementById("balance");
    const balance = parseFloat(balanceId.innerText);
    //savingAmount and remainingBalance calculation:
    const savingAmount = income * savePercentage / 100;
    const remainingBalance = balance - savingAmount;
    
    if(isNaN(savePercentage) || savePercentage < 0){
        alert("Invalid input. please give a number input.");
    }
    else if(savingAmount > balance){
        alert("you can't save more than "+ balance);
    }
    else{
        setInnerText("saving-amount" , savingAmount);
        setInnerText("remaining-balance" , remainingBalance);
    }
});