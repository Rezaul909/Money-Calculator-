//Function for take input fields values with convert:
function getInputFieldValue(inputId){
    const inputFieldId= document.getElementById(inputId);
    const inputFieldValue= parseFloat(inputFieldId.value);
    return inputFieldValue;
}

//Function for set innerText of totalExpenses, balance, savingAmount and remainingBalance:
function setInnerText(textId , textValue){
    document.getElementById(textId).innerText = textValue.toFixed(2);
}

//error massage part : 
function errorMassage(errorId , successId){
    document.getElementById(errorId).style.display = "block";
    document.getElementById(successId).style.display = "none";
}

//calculate button :=======================================================
document.getElementById("calculate-btn").addEventListener('click',function(){
    const income = getInputFieldValue("income-input");
    const foodCost = getInputFieldValue("food-input");
    const rentCost = getInputFieldValue("rent-input");
    const clothCost = getInputFieldValue("cloth-input");

    const totalExpenses = foodCost + rentCost + clothCost;
    const balance =income - totalExpenses;

    if(totalExpenses > income){
        errorMassage("error-expense" , "success");
    }
    else if(income >=0 && foodCost >=0 && rentCost >=0 && clothCost>=0){
        setInnerText("total-expenses" , totalExpenses);
        setInnerText("balance" , balance);
        document.getElementById("error").style.display = "none";
        document.getElementById("error-expense").style.display = "none";
        document.getElementById("error-save").style.display = "none";
        document.getElementById("success").style.display = "none";
    }
    else{
        errorMassage("error" , "success");
    }
});

//save button calculation================================================
document.getElementById("save-btn").addEventListener("click", function(){
    const savePercentage = getInputFieldValue("percent-input");
    const income = getInputFieldValue("income-input");
    
    const balanceId = document.getElementById("balance");
    const balance = parseFloat(balanceId.innerText);
    //savingAmount and remainingBalance calculation:
    const savingAmount = income * savePercentage / 100;
    const remainingBalance = balance - savingAmount;
    
    if(isNaN(savePercentage) || savePercentage < 0){
        errorMassage("error" , "success");
    }
    else if(savingAmount > balance){
        errorMassage("error-save" , "success");
    }
    else{
        setInnerText("saving-amount" , savingAmount);
        setInnerText("remaining-balance" , remainingBalance);
        document.getElementById("success").style.display = "block";
        document.getElementById("error").style.display = "none";
        document.getElementById("error-save").style.display = "none";
    }
});