let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let espens = prompt("Введите обязательную статью расходов в этом месяце");
let howMuch = prompt("Во сколько обойдется?");
let appData = {
    budget: money,
    timeData: time,
    expenses: {
        espens: howMuch
    },
    optionalExpenses: {},
    income: [],
    savings: false
};
alert("Бюджет на 1 день "+ appData.budget/30);