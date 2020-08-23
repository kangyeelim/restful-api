import React from 'react';
import { Container, Form, Col, Button, Card, FormControl } from 'react-bootstrap';
import axios from 'axios';

const categories = ["Love", "Life", "Education", "Friendship", "Humor", "Hope", "Inspiration", "Religious"];

class QuoteGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      category: null,
      quotes: []
    }
    this.generate = this.generate.bind(this);
    this.randomlyGenerate = this.randomlyGenerate.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.shuffle = this.shuffle.bind(this);
  }

  setCategory(e) {
    this.setState({
      category: e.currentTarget.value
    })
    console.log(e.currentTarget.value);
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
  }

  return array;
}
  async generate() {
    if (this.state.category !== null) {
      var response = await axios.get(`http://localhost:8080/api/quotes/by/${this.state.category}`);
      var array = response.data.data;
      this.shuffle(array);
      this.setState({quotes: array});
    }
  }

  async randomlyGenerate() {
    var random_index = Math.floor(Math.random() * 8);
    var random_category = categories[random_index];
    var response = await axios.get(`http://localhost:8080/api/quotes/by/${random_category}`);
    var quotes = response.data.data;
    random_index = Math.floor(Math.random() * quotes.length);
    var singleQuoteArr = [];
    singleQuoteArr.push(quotes[random_index]);
    this.setState({quotes: singleQuoteArr});
  }

  render() {
    return (
      <div>
        <Container>
          <h3 className="subtitle">Generate quotes based on a category</h3>
          <Form>
            <Form.Row className="align-items-center">
              <Form.Label style={{marginRight: 50}}>
                Category:
              </Form.Label>
              <Col>
                <FormControl
                  as="select"
                  className="mr-sm-2"
                  id="inlineFormCustomSelect"
                  custom
                  onChange={this.setCategory}
                >
                  <option value={null}>Choose one</option>
                  <option value="Love">Love</option>
                  <option value="Life">Life</option>
                  <option value="Education">Education</option>
                  <option value="Friendship">Friendship</option>
                  <option value="Humor">Humor</option>
                  <option value="Hope">Hope</option>
                  <option value="Inspiration">Inspiration</option>
                  <option value="Religious">Religious</option>
                </FormControl>
              </Col>
              <Col xs="auto" className="my-1">
                <Button onClick={this.generate}>Generate</Button>
              </Col>
            </Form.Row>
          </Form>
          <h3 className="subtitle">Generate a single quote randomly</h3>
          <Form>
            <Form.Row>
              <Col>
                <Button onClick={this.randomlyGenerate}>Generate</Button>
              </Col>
            </Form.Row>
          </Form>
          <h3 className="subtitle">Results</h3>
          {(this.state.quotes) && (this.state.quotes.length === 0) && (
            <p>None</p>
          )}
          {(this.state.quotes) && (
              <div>
                { this.state.quotes.length > 0 && this.state.quotes.map((quote) => {
                  return (
                    <Card key={quote._id} className="quote-card">
                      <Card.Body>{quote.message}</Card.Body>
                    </Card>
                  )
                })}
              </div>
          )}
        </Container>
      </div>
    );
  }
}

export default QuoteGenerator;
