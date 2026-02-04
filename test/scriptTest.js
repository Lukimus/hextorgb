const request = require("supertest");
const expect = require("chai").expect;

process.env.NODE_ENV = "test"; // ensure server exports app
const app = require("../js/app");

/**
 * Integration tests for the Math API.
 * Uses Supertest for HTTP requests and Chai for assertions.
 */
describe("Math API", () => {
	/**
	 * Test the root route.
	 * Expects a 200 status and "Hello" response text.
	 */
	it("responds to the root route", async () => {
		const res = await request(app).get("/");
		expect(res.status).to.equal(200);
		expect(res.text).to.equal("Hello");
	});

	/**
	 * 
	 */
	

	
});