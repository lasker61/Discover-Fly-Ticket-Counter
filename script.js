function ticketCalculator(ticket, increase) {
    const ticketCount = getInputValue(ticket);
    let ticketCountNew = ticketCount;
    if (increase == true) {
        ticketCountNew = ticketCount + 1;
    }
    if (increase == false && ticketCount > 0) {
        ticketCountNew = ticketCount - 1;
    }
    document.getElementById(ticket + '-count').value = ticketCountNew;
    let ticketTotal = 0;
    if (ticket == 'firstClassTicket') {
        ticketTotal = ticketCountNew * 150;
    }
    if (ticket == 'economyTicket') {
        ticketTotal = ticketCountNew *100;
    }

    document.getElementById(ticket + '-total').innerText = '$' + ticketTotal;
    calculateTotal();
}

function calculateTotal() {
    const firstClassTicketCount = getInputValue('firstClassTicket');
    const economyTicketCount = getInputValue('economyTicket');

    const totalPrice = firstClassTicketCount * 150 + economyTicketCount *100;
    document.getElementById('total-price').innerText = '$' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = '$' + tax;

    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandTotal;
}

function getInputValue(ticket) {
    console.log(ticket);
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}

const bookNow = document.getElementById("bookNow"); 
bookNow.addEventListener("click", function(){
    const mainArea = document.getElementById("main");
    mainArea.style.display = "none";

    const successMessege = document.getElementById("successMessege"); 
    successMessege.style.display = "block"; 
    
    
    
}) 






