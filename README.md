# cli-books-api

# 8th Light Application

Google Books API (https://developers.google.com/books/docs/overview) and create/add a book to a reading list.

## Getting started

1. Clone this repository by opening up your terminal and copy paste:

`git clone https://github.com/juholee96/cli-books-api`

2. Open the repository in a text-edior (I use Visual Studio Code 2)
3. Open up the folder's terminal and install the dependencies by running: `npm i` or `npm install`

## Running the application

1. Inside the terminal, type the command `book`. To began searching for any books in the Google database, you must start with the command `book` to initate the search function.

2. To search a book by a title, follow the prompt by adding the missing required argument `s`

`book -s <bookTitle>` or `book --save <bookTitle>`

## Testing

1. To run a test, inside the terminal write: `npm test`

## Future Improvements

1. I am only able to add a book manually by writing the ISBN number inside the code -- would like to implement functionality to be able to add a book to the reading list inside the command line.

2. Testing - I wasn't really sure how to implement tests within my code but I understand the importance it has to have a solid foundation of any application. Tests tells us what your code is actually meant to do and it allows you to spend less time testing the code manually yourself. Writing tests allows you to think about the edge cases and provides a deeper understanding of how it actually functions.

## Reflection

I could definely improve my time management since I was out of state and was in a time crunch to have a MVP (minimum viable product) --> especially when I have never built a CLI (Command-Line Interface) Application. However, doing this assignment taught me a lot of new tools and showed me some weaknesses that I have not really thought of before. It was a very exciting but challenging learning experience and it shined light on what I need to work on mentally, emotionally (before starting & as I work), and reinforced that learning is something I love to do and will continue to do. I will continue to work on this incomplete application and excited to learn from my mistakes as well as learn new strategies and tools to make CLI Applications (and more!)
