import '../styles/MyProposalPage.css';
import React from 'react'
import { Card, Button, ListGroup, Row, Col } from 'react-bootstrap';
import { useHistory, Link } from "react-router-dom";

// <Link to="/about">About</Link>

function MyProposalPage() {

    const history = useHistory();

    const handleRoute = () => {
        history.push("/proposals");
    }

    return (

        <div className="CenterBox">
            <br></br>
            <h1 className="titlePGD"> Sent Proposals </h1>

            <Button variant="primary" className="buttonPGD"
                    onClick={handleRoute}>
                View Received PGDs Here
            </Button>


            <br></br><br></br>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 2 }).map((_, idx) => (
                    <Col>
                        <Card
                            className="mb-2"
                            bg="warning"
                            text='white'>
                            <Card.Body>
                                <Card.Title>Head in the Clouds</Card.Title>
                                <Card.Subtitle className="mb-2">Sent to Teresa Tran, Lucas Huang, Gordon Su, Leena Mathur</Card.Subtitle>
                                <Card.Text>
                                    In Progress
                                </Card.Text>
                                <Card.Link href="#">More Details</Card.Link>

                            </Card.Body>
                            <Card.Footer>
                                <small className="">Sent 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>

            <br></br>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 2 }).map((_, idx) => (
                    <Col>
                        <Card
                            className="mb-2"
                            bg="success"
                            text='white'>
                            <Card.Body>
                                <Card.Title>Head in the Clouds</Card.Title>
                                <Card.Subtitle className="mb-2">Sent to Teresa Tran, Lucas Huang, Gordon Su, Leena Mathur</Card.Subtitle>
                                <Card.Text>
                                    Event Confirmed
                                </Card.Text>
                                <Card.Link href="#">More Details</Card.Link>

                            </Card.Body>
                            <Card.Footer>
                                <small >Sent 31 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
    )
}

export default MyProposalPage
