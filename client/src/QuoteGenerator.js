import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';

class QuoteGenerator extends React.Component {
  constructor() {
    super();
    this.state = {
      isThereResults: false
    }
    this.generate = this.generate.bind(this);
    this.randomlyGenerate = this.randomlyGenerate.bind(this);
  }

  generate() {

  }

  randomlyGenerate() {

  }

  render() {
    return (
      <div>
        <Container>
          <h3 class="subtitle">Generate quotes based on a category</h3>
          <Form>
            <Form.Row className="align-items-center">
              <Form.Label style={{marginRight: 50}}>
                Category:
              </Form.Label>
              <Col>
                <Form.Control
                  as="select"
                  className="mr-sm-2"
                  id="inlineFormCustomSelect"
                  custom
                >
                  <option value="Love">Love</option>
                  <option value="Life">Life</option>
                  <option value="Education">Education</option>
                  <option value="Friendship">Friendship</option>
                  <option value="Humor">Humor</option>
                  <option value="Hope">Hope</option>
                  <option value="Inspriration">Inspriration</option>
                  <option value="Religious">Religious</option>
                </Form.Control>
              </Col>
              <Col xs="auto" className="my-1">
                <Button onClick={this.generate}>Generate</Button>
              </Col>
            </Form.Row>
          </Form>
          <h3 class="subtitle">Generate quotes randomly</h3>
          <Form>
            <Form.Row>
              <Col>
                <Button onClick={this.randomlyGenerate}>Generate</Button>
              </Col>
            </Form.Row>
          </Form>
          <h3 class="subtitle">Results</h3>
          {(!this.state.isThereResults) && (
            <p>None</p>
          )}
        </Container>
      </div>
    );
  }
}

export default QuoteGenerator;
