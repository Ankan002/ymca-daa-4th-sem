import clc from "cli-color";

interface PriceWeightObject {
    price: number;
    weight: number;
    pricePerWeight: number;
}

const getMaxProfit = (
    prices: Array<number>,
    weights: Array<number>,
    maxWeight: number
): number => {
    const priceWeightObjectArray: Array<PriceWeightObject> = [];

    for (let i = 0; i < prices.length; i++) {
        priceWeightObjectArray.push({
            price: prices[i],
            weight: weights[i],
            pricePerWeight: prices[i] / weights[i],
        });
    }

    priceWeightObjectArray.sort((a, b) => b.pricePerWeight - a.pricePerWeight);

    let maxProfit = 0;
    let weightRemaining = maxWeight;

    let currentPosition = 0;

    while (
        currentPosition < priceWeightObjectArray.length &&
        weightRemaining > 0
    ) {
        if (priceWeightObjectArray[currentPosition].weight <= weightRemaining) {
            maxProfit += priceWeightObjectArray[currentPosition].price;
            weightRemaining -= priceWeightObjectArray[currentPosition].weight;
        } else {
            maxProfit +=
                priceWeightObjectArray[currentPosition].pricePerWeight *
                weightRemaining;
            weightRemaining = 0;
        }

        currentPosition++;
    }

    return maxProfit;
};

const prices = [20, 10, 10, 11];
const weights = [10, 8, 6, 6];

const startTime = Date.now();
const maxProfit = getMaxProfit(prices, weights, 20);
const endTime = Date.now();

console.log(clc.greenBright(`Max profit that can be earned in fractional knapsack: ${maxProfit}`));
console.log(clc.yellowBright(`Time Required: ${(endTime - startTime) / 1000}s`));
