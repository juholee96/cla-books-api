const fs = require("fs");
const axios = require("axios");
const bookInfo = require("./search"); //imports the data returned from search

module.exports = async (isbn) => {
  try {
    const { data } = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
    // console.log("readingList response----->", data);
    const bookInfo = `
    ___________________________________________
    Title: ${data.items[0].volumeInfo.title}
    Author(s): ${data.items[0].volumeInfo.authors}
    Publisher: ${data.items[0].volumeInfo.publisher}
    ___________________________________________
    `;
    console.log(bookInfo);
    await fs.appendFile("reading-list.txt", bookInfo, (err) => {
      if (err) {
        console.log("Problem adding your book to the list, try again");
      }
    });
    return data;
  } catch (error) {
    console.error(error);
  }
};

// const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);
//     // console.log("save response----->", response.data.items);
//     const bookInfo = `
//     Title: ${response.data.volumnInfo.title}
//     Author(s): ${response.data.volumnInfo.authors}
//     Publisher: ${response.data.volumnInfo.publisher}
//     ISBN: ${response.data.volumeInfo.industryIdentifiers[1].identifier}
//     `;
