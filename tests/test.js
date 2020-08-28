let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('../index');

chai.use(chaiHttp);
chai.should();

let Quote = require('../quoteModel');

describe("Quotes with internally implemented methods", () => {
    describe("GET /", () => {
        // Test to get all quotes record
        it("should get all quotes record", (done) => {
            chai.request(app)
              .get('/api/seed/quotes')
              .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
              });
         });
        // Test to get single quote record
        it("should get a single quote record", (done) => {
             const id = 1;
             chai.request(app)
                 .get(`/api/seed/quotes/${id}`)
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });

        // Test to get single quote record
        it("should not get a single quote record", (done) => {
             const id = 5;
             chai.request(app)
                 .get(`/api/seed/quotes/${id}`)
                 .end((err, res) => {
                     res.should.have.status(404);
                     done();
                  });
         });
    });
});

describe('GET/POST Quotes', () => {
  beforeEach((done) => { //Before each test we fill in the database
      Quote.remove({}, (err) => {
        done();
      });
  });

  describe('/GET quote', () => {
    it('it should GET all the quotes using API', (done) => {
       chai.request(app)
       .get('/api/quotes')
       .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a('array');
          res.body.data.length.should.be.eql(0);
          done();
       });
     });
  });

   describe('/POST quote', () => {
      it('it should not POST a quote without message field', (done) => {
        let quote = {
          category: "Funny"
        };
        chai.request(app)
            .post('/api/quotes')
            .send(quote)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.have.property('errors');
                  done();
            });
        });
        it('it should POST a quote ', (done) => {
          let quote = {
              message: "message test",
              category: "category test"
          }
        chai.request(app)
            .post('/api/quotes')
            .send(quote)
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.data.should.be.a('object');
                  res.body.should.have.property('data').property('message').eql('message test');
                  res.body.should.have.property('data').property('category').eql('category test');
                  res.body.should.have.property('message').eql("New quote created!");
              done();
            });
      });
  });
});

describe('DELETE/PUT Quotes', () => {
  var id = 0 ;
  beforeEach((done) => { //Before each test we fill in the database
    let quote = {
        message: "message test",
        category: "category test"
    }
    chai.request(app)
    .post('/api/quotes')
    .send(quote)
    .end((err, res) => {
      res.should.have.status(200);
      res.body.should.have.property('data').property('message').eql('message test');
      id = res.body.data._id;
      done();
    });
  });

  describe('/DELETE quote', () => {
    it('it should DELETE a quote using API', (done) => {
       chai.request(app)
       .delete(`/api/quotes/${id}`)
       .end((err, res) => {
          res.should.have.status(200);
          res.body.should.have.property('message').eql("Quote deleted");
          done();
       });
     });
  });


  describe('/PUT quote', () => {
    it('it should UPDATE a quote using API', (done) => {
      let quote1 = {
        message: "changed message"
      }
       chai.request(app)
       .put(`/api/quotes/${id}`)
       .send(quote1)
       .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a('object');
          res.body.should.have.property('data').property('message').eql('changed message');
          res.body.should.have.property("message").eql("Quote Info updated");
          done();
       });
     });
  });
});
