import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Search = ({ word, setWord, handleSubmit }) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={15} md={8}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col xs={10}>
                <Form.Control
                  placeholder="Search for images..."
                  type="text"
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                />
              </Col>
              <Col>
                <Button variant="success" type="submit">
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
