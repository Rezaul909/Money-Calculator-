document.getElementById("calculate-btn").addEventListener('click',function(){
    const incomeId= document.getElementById("income-input");
    const foodId= document.getElementById("food-input");
    const rentId= document.getElementById("rent-input");
    const clothId= document.getElementById("cloth-input");

    const income= parseFloat(incomeId.value);
    const foodCost= parseFloat(foodId.value);
    const rentCost= parseFloat(rentId.value);
    const clothCost= parseFloat(clothId.value);

    const totalCost = foodCost+rentCost+clothCost;
    const remaining = income - totalCost;

    if( isNaN(income) || isNaN(foodCost) || isNaN(rentCost) || isNaN(clothCost) || income<0 ||foodCost<0 || rentCost<0 || clothCost<0){
        alert("Invalid input. please give a number input.");
    }
    else if(totalCost>income){
        alert("you expenses too much money!");
    }
    else{
        const totalExpenseId= document.getElementById("total-expenses");
        // const totalExpenses = parseFloat(totalExpenseId.innerText);
        totalExpenseId.innerText = totalCost;

        const balanceId= document.getElementById("balance");
        // const balance = parseFloat(balanceId.innerText);
        balanceId.innerText= remaining;
    }

    // console.log(totalExpenses);
});
