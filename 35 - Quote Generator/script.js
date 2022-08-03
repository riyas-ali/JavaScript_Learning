authorName = document.querySelector('.card-header');
quoteText = document.querySelector('.card-body');
button = document.querySelector('.btn');

const quoteStatements = [
    { author: 'Taylor Swift', statement: 'I think the perfection of love is that it’s not perfect.'},
    { author: 'Helen Keller', statement: 'The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.'},
    { author: 'Khalil Gibran', statement: 'Life without love is like a tree without blossoms or fruit.'},
    { author: 'Maya Angelou', statement: 'Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.'},
    { author: 'Victor Hugo', statement: 'To love or have loved, that is enough. Ask nothing further. There is no other pearl to be found in the dark folds of life.'},
    { author: 'Arthur Conan Doyle', statement: 'You are my heart, my life, my one and only thought.'},
    { author: 'Victor Hugo', statement: 'To love or have loved, that is enough. Ask nothing further. There is no other pearl to be found in the dark folds of life.'},
    { author: 'Onyebuchi Princewill', statement: 'When I tell you I love you, I don’t say it out of habit. I say it to remind you that you’re the best thing that ever happened to me.'},
];

button.addEventListener('click', () => {
    quoteIndex = Math.floor(Math.random() * quoteStatements.length);
    quoteStatements[quoteIndex];

    authorName.innerHTML = quoteStatements[quoteIndex].author;
    quoteText.innerHTML = quoteStatements[quoteIndex].statement;
})
