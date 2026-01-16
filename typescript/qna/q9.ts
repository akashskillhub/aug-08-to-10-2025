let prices: number[] = [100, 200, 300];

function getTotal(prices: number[]) {
    let total = 0;
    for (let price of prices) {
        total = total + price;
    }
    return total;
}
