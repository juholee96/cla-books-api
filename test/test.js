const mockAxios = require("axios");
// const search = require("../commands/search");
const chai = require("chai");
// const app = require("supertest");

describe("Searching Google Books using API", () => {
  it("responds with 200 status code", async () => {
    const title = "mindset";
    const response = await mockAxios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${title}&printType=books&startIndex=0&maxResults=5`
    );
    chai.expect(response.status).to.equal(200);
  });

  it("returns five books", async () => {
    const title = "mindset";
    const response = await mockAxios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${title}&printType=books&startIndex=0&maxResults=5`
    );
    // console.log("item size-----", response.data.items);
    chai.expect(response.data.items.length).to.equal(5);
  });
});
