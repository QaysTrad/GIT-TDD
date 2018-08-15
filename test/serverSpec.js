const server = require('../server/index');
const db = require('../database/index.js');
const chai = require('chai');
const should = chai.should();
chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('cats', function () {
    it('it should sendStatus(201) to the client', function (done) {
        chai.request(server)
            .post('/cats')
            .end(function (res) {
                res.should.have.status(201);
                done();
            });
    });

    it('it should GET all the cats', function (done) {
        this.timeout(15000);
        chai.request(server)
            .get('/cats')
            .end(function (res) {
                res.should.have.status(200);

                done();
            });
    });
});