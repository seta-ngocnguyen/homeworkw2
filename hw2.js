let currentColor;
let currentQuote;
const quotes=[
    {
        quote: 'The sea does not like to be restrained.',
        author: 'Rick Riordan, The Lightning Thief'
    },
    {
        quote: 'We are like islands in the sea, separate on the surface but connected on the deep.',
        author: 'William James'
    },
    {
        quote: 'The heart of man is very much like the sea, it has its storms, it has its tides and in its depths it has its pearls too.',
        author: 'Vincent van Gogh, The Letters of Vincent van Gogh'
    },
    {
        quote: 'To reach a port we must set sail. Sail, not tie at anchor. Sail, not drift.',
        author: 'Franklin D. Roosevelt'
    },
    {
        quote: 'Together we can face challenges as deep as the ocean and as high as the sky.',
        author: 'Sonia Gandhi'
    }
];
const colors=["#7fffd4", "#5f9ea0", "#ff7f50", "#20b2aa", "#cd5c5c"];
function randomQuote(){
    const quoteIndex = Math.floor(Math.random()*quotes.length);
    if(currentQuote === quoteIndex){
        randomQuote();
        return;
    }
    currentQuote = quoteIndex;
    const quote = quotes[quoteIndex];
    const quoteElement = document.getElementById('quote-text');
    const authorElement = document.getElementById('quote-author');
    quoteElement.innerText = quote.quote;
    authorElement.innerText = quote.author;
}
function randomColor(){
    const colorIndex = Math.floor(Math.random()*colors.length);
    if(currentColor === colorIndex){
        randomColor();
        return;
    }
    currentColor = colorIndex;
    const color = colors[colorIndex];
    const body = document.querySelector('body');
    body.style.backgroundColor = color;
    const button = document.getElementById('quote-button');
    button.style.backgroundColor = color;
    const quoteElement = document.getElementById('quote-text');
    quoteElement.style.color = color;
    const authorElement = document.getElementById('quote-author');
    authorElement.style.color = color;
}
const clickQuoteButton = document.getElementById('quote-button');
clickQuoteButton.onclick = ()=>{
    randomQuote();
    randomColor();
}
randomQuote();

