const budgetAmount = document.getElementById("budget-amount");
const budgetSlider = document.getElementById("budget-slider");
const expenseForm = document.getElementById("expense-form");
const expenseList = document.getElementById("expense-list");

let expenses = [];
let budget = 1000;

function showBudget() {
  budgetAmount.textContent = `₹${budget}`;
}

function showExpenses() {
  expenseList.innerHTML = "";
  expenses.forEach((expense) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${expense.name}</span>
                    <span>${expense.amount}</span>
                    <span>${expense.category}</span>`;
    expenseList.appendChild(li);
  });
}

function addExpense(name, amount, category) {
  expenses.push({ name, amount, category });
  budget -= amount;
  showBudget();
  showExpenses();
}

showBudget();
showExpenses();

budgetSlider.addEventListener("input", () => {
  budget = parseInt(budgetSlider.value);
  showBudget();
});

expenseForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("expense").value;
  const amount = parseInt(document.getElementById("amount").value);
  const category = document.getElementById("category").value;
  addExpense(name, amount, category);
  expenseForm.reset();
});
