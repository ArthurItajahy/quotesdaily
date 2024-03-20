const quotes = [
    {
        quote:"Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
        author: "Christian D. Larson"
    }
];
let currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
const author = document.getElementById('author');
const quote = document.getElementById('quote');
quote.innerText = currentQuote.quote;
author.innerText = currentQuote.author;
function generateQuote() {
    currentQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = currentQuote.quote;
    author.innerText = currentQuote.author;
}
function shareQuote(platform) {
    const text = `"${currentQuote.quote}" - ${currentQuote.author}`;
    if (platform === 'twitter') {
        window.open(`https://twitter.com/share?text=${encodeURIComponent(text)}`);
    } else if (platform === 'facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(location.href)}&quote=${encodeURIComponent(text)}`);
    }
}