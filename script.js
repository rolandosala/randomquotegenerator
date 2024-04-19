/* const qoutes = [
    {
        quote: "Life isn’t about getting and having, it’s about giving and being.", 
        author: "Kevin Kruse"
    },
    {
        quote: "Whatever the mind of man can conceive and believe, it can achieve.", 
        author: "Napoleon Hill"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.", 
        author: "Albert Einstein"
    },
    {
        quote: "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.", 
        author: "Robert Frost"
    },
    {
        quote: "I attribute my success to this: I never gave or took any excuse.", 
        author: "Florence Nightingale"
    },
    {
        quote: "You miss 100% of the shots you don’t take.", 
        author: "Wayne Gretzky"
    },
    {
        quote: "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.", 
        author: "Michael Jordan"
    },
    {
        quote: "The most difficult thing is the decision to act, the rest is merely tenacity.", 
        author: "Amelia Earhart"
    },
    {
        quote: "Every strike brings me closer to the next home run.", 
        author: "Babe Ruth"
    },
    {
        quote: "Definiteness of purpose is the starting point of all achievement.", 
        author: "W. Clement Stone"
    },
    {
        quote: "We must balance conspicuous consumption with conscious capitalism.", 
        author: "Kevin Kruse"
    },
    {
        quote: "Life is what happens to you while you’re busy making other plans.", 
        author: "John Lennon"
    },
    {
        quote: "We become what we think about.", 
        author: "Earl Nightingale"
    },
    {
        quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.", 
        author: "Mark Twain"
    },
    {
        quote: "Life is 10% what happens to me and 90% of how I react to it.", 
        author: "Charles Swindoll"
    },
    {
        quote: "The most common way people give up their power is by thinking they don’t have any.", 
        author: "Alice Walker"
    },
    {
        quote: "The mind is everything. What you think you become.", 
        author: "Buddha"
    },
    {
        quote: "The best time to plant a tree was 20 years ago. The second best time is now.", 
        author: "Chinese Proverb"
    },
    {
        quote: "An unexamined life is not worth living.", 
        author: "Socrates"
    },
    {
        quote: "Eighty percent of success is showing up.", 
        author: "Woody Allen"
    },
];

let text = document.getElementById('text');
let author = document.getElementById('author');

function getRandomQoute() {
    const index = Math.floor(Math.random() * qoutes.length);
    text.innerText = qoutes[index].quote;
    author.innerText = qoutes[index].author;
}
getRandomQoute();

document.getElementById('new-qoute').onclick = () => {
    getRandomQoute();
} */
let data, quoteText, quoteAuthor;

const getData = () => {
    return $.ajax({
        headers: {
            Accept: 'application/json'
        },
        url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
        success: (jsonData) => {
            data = JSON.parse(jsonData);
/*             console.log(data);
            console.log(data.quotes.length); */
        }
    });
}
getData();

const getRandom = () => {
    return data.quotes[
        Math.floor(Math.random() * data.quotes.length)
    ];
}


const setData = () => {
    let random = getRandom();
    quoteText = random.quote;
    quoteAuthor = random.author;

    $('#text').text(quoteText);
    $('#author').text(quoteAuthor);
    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quoteText + '"' + quoteAuthor));
   /*  console.log(quoteText + ' ' + quoteAuthor); */
}

$(document).ready(() => {
    getData().then(() => {
        setData();
    })

    $('#new-quote').on('click', setData);
});