var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-box");

submitBtn.addEventListener('click', submitHandler);

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stocksQuantity.value);
    var curr = Number(currentPrice.value);
    calculateProfitAndLoss(ip, qty, curr);
}
function calculateProfitAndLoss(initial, quantity, current) {
    if(initial != "" && quantity != "" && current != "")
    if(initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / (initial*quantity)) * 100;
        var message = `The loss is ${loss.toFixed(2)} and loss prcentage is ${lossPercentage.toFixed(2)}%`;
        showOutput(message);
        outputBox.style.color = 'red';
        
    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit/(initial *quantity)) * 100;
        var message = `The profit is ${profit.toFixed(2)} and profit prcentage is ${profitPercentage.toFixed(2)}%`;
            showOutput(message);
            outputBox.style.color = 'green';
    } else {
        var message = `No pain no gain, no gain no pain`;
        showOutput(message);

    }
    
}
function showOutput(message) {
    outputBox.innerHTML=message;
}