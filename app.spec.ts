import { calculateDiscountedPrice } from "./src/utils";
import request from "supertest";
import app from "./src/app";
describe("App", () => {
    it("should return correct discounted value", () => {
        const discount = calculateDiscountedPrice(100, 10);
        expect(discount).toBe(10);
    });

    it("should return status 200", async () => {
        const response = await request(app).get("/").send();
        expect(response.statusCode).toBe(200);
    });
});
