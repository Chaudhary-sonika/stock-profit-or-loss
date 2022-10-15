var intPrice = document.querySelector("#int-price");
var stocksQty = document.querySelector("#stock-qty");
var crtPrice = document.querySelector("#crt-price");
var calBtn = document.querySelector("#cal-btn");
var output = document.querySelector("#output");

calBtn.addEventListener('click', calHandler);

function calHandler() {
    var ip = Number(intPrice.value);
    var qty = Number(stocksQty.value);
    var crt = Number(crtPrice.value);
    calStockProfitAndLoss(ip, qty, crt);
}
function calStockProfitAndLoss(initial, quantity, current) {
    if(initial >0 && quantity >0 && current >0) {
        if(initial > current) {
            var loss = (initial - current) * quantity;
            var lossPercentage = (loss / (initial*quantity)) * 100;
            
            output.innerHTML = `The loss is ${loss.toFixed(2)} and loss prcentage is ${lossPercentage.toFixed(2)}%`;
            output.style.color = 'red';
            document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2014/09/16/01/19/girl-447701__340.jpg')";
            document.getElementById("so").style.backgroundColor = "white"; 
            // document.getElementById("hd").style.backgroundColor = "white";
        } else if (current > initial) {
            var profit = (current - initial) * quantity;
            var profitPercentage = (profit/(initial *quantity)) * 100;
            
            output.innerHTML = `The profit is ${profit.toFixed(2)} and profit prcentage is ${profitPercentage.toFixed(2)}%`;
            
                output.style.color = 'green';
                document.body.style.backgroundImage = "url('https://www.incimages.com/uploaded_files/image/1920x1080/getty_478389113_970647970450091_99776.jpg')";
                document.getElementById("so").style.backgroundColor = "white";
                // document.getElementById("hd").style.backgroundColor = "white";
        } else {
            
            output.innerHTML = "No pain no gain!";
            output.style.color = 'black';
            document.body.style.backgroundImage = "none";
        }
    } else {
         output.innerHTML = "Please enter valid input.";
         output.style.color = 'black';
         document.body.style.backgroundImage = "none";
    }
}
