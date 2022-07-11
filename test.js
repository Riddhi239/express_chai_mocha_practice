const app = require("../../server");
const chai = require("chai");
const chaiHttp = require("chai-http");


const { expect } = chai;
chai.use(chaiHttp);
describr("API Testing", () => {
    it("test get all request for books", done => {
        chai
            .request(app)
            .get("/books")
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.success).to.equals(true);
                done();
            });
    });
    it("add book", done => {
        chai
            .request(app)
            .post("/books")
            .send({ name: "anam", author: "jbbhv" })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.success).to.equals(true);
                expect(res.body.message).to.equals("record is inserted");
                done();
            });
    });
});