import { Form, Button, Row, Col } from "react-bootstrap";

export default function SearchForm({ handleSearch, handleUpdate }) {
    // current issue: how to pass value of query string input upwards to TongueTip so it can give it to handleSearch() 
    return(
        <Form autoComplete="off" onSubmit={handleSearch}>
            <Row>
                <Col>
                    <Form.Group controlId="searchForm.ControlInput1">
                        <Form.Label>Meaning</Form.Label>
                        <Form.Control type="input" name="ml" placeholder="e.g. 'present or found everywhere' → 'ubiquitous'" onChange={handleUpdate} />
                    </Form.Group>
                </Col>
                <Col xs={2} className="d-flex align-items-end justify-content-center">
                    <Form.Group>
                        <Button variant="outline-light" type="submit">Search</Button>
                    </Form.Group>
                </Col>
            </Row>
        </Form>
    )
}