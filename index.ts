import inquirer from "inquirer"

const currency: Record<string, number> = {
    USD: 1, // base currency
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280,
    DIN: 45
};

async function convertCurrency() {
    const userAnswer = await inquirer.prompt([
        {
            name: "from",
            message: "Enter from currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "INR", "PKR" ,"DIN"]
        },
        {
            name: "to",
            message: "Enter to currency",
            type: "list",
            choices: ["USD", "EUR", "GBP", "INR", "PKR" ,"DIN"]
        },
        {
            name: "amount",
            message: "Enter your Amount",
            type: "number"
        }
    ]);

    const fromAmount = currency[userAnswer.from];
    const toAmount = currency[userAnswer.to];
    const amount = userAnswer.amount;

    const baseAmount = amount / fromAmount; // convert to base currency (USD)
    const convertedAmount = baseAmount * toAmount;

    console.log("Converted Amount:", convertedAmount);
}

convertCurrency();