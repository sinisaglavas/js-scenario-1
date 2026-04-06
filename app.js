let expenses = [];

function addExpense(name, amount) {
    expenses.push({
        name: name,
        amount: amount
    });
}

function renderExpenses() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    for (let i = 0; i < expenses.length; i++) {
        list.innerHTML += "<li>" + expenses[i].name + " - " + expenses[i].amount + "</li>";
    }
}

function getTotal() {
    let total = 0;

    for (let e of expenses) {
        total += e.amount;
    }

    return total;
}

function showTotal() {
    document.getElementById("total").innerText = getTotal();
}

document.getElementById("addBtn").addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;

    addExpense(name, amount);
    renderExpenses();
    showTotal();
});