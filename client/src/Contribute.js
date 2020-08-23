import React from 'react';
import { Container, Col, Form, FormControl, Card, Button } from 'react-bootstrap';
import axios from 'axios';

class Contribute extends React.Component {
  constructor() {
    super();
    this.state = {
      category: null,
      message: null,
      didSubmit: false,
      isErrorSubmitting: false
    }
    this.setQuote = this.setQuote.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.submit = this.submit.bind(this);
  }

  setQuote(e) {
    var message = e.target.value;
    this.setState({message: message});
  }

  setCategory(e) {
    var category = e.currentTarget.value;
    this.setState({category: category});
  }

  async submit() {
    if (this.state.message !== null && this.state.category !== null) {
      var response = await axios.post('http://localhost:8080/api/quotes/', {
        message: this.state.message,
        category: this.state.category
      })
      if (response.data.message == "New quote created!") {
        this.setState({didSubmit: true});
      } else {
        this.setState({isErrorSubmitting: true});
      }
    }
  }

  render() {
    return (
      <div>
        <Container>
          <h3 className="subtitle">Contribute quotes according to categories</h3>
          <Form>
            <Form.Row className="align-items-center">
              <Form.Label style={{marginRight: 10}}>
                Category:
              </Form.Label>
              <Col xs="auto">
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
              <Col>
                <FormControl id="Quote" placeholder="Quote" onChange={this.setQuote}/>
              </Col>
              <Col xs="auto" className="my-1">
                <Button onClick={this.submit}>Submit</Button>
              </Col>
            </Form.Row>
          </Form>
          <h3 className="subtitle">Quote submitted</h3>
          {(this.state.isErrorSubmitting) && (
            <p>Error submitting quote</p>
          )}
          {(!this.state.didSubmit) && (
            <p>No quote submitted</p>
          )}
          {(this.state.didSubmit) && (
            <Card className="quote-card">
              <Card.Body>{this.state.message}</Card.Body>
              <Card.Body>Category: {this.state.category}</Card.Body>
            </Card>
          )}
        </Container>
      </div>
    );
  }
}

export default Contribute;
