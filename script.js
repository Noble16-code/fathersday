function showMessage() {
    document.getElementById('message').classList.toggle('hidden');
    document.getElementById('background-music').play();
    startConfetti();
}


let quoteIndex = 0;
showQuotes();

function showQuotes() {
    let quotes = document.getElementsByClassName("quote");
    for (let i = 0; i < quotes.length; i++) {
        quotes[i].style.display = "none";  
    }
    quoteIndex++;
    if (quoteIndex > quotes.length) {quoteIndex = 1}    
    quotes[quoteIndex-1].style.display = "block";  
    setTimeout(showQuotes, 2000); // Change quote every 5 seconds
}
