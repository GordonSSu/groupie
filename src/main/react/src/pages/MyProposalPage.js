import '../styles/MyProposalPage.css';
import React from 'react'
import { Card, Button, ListGroup, Row, Col } from 'react-bootstrap';
import { useHistory, Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

// <Link to="/about">About</Link>

function MyProposalPage() {

    const history = useHistory();

    const handleRoute = () => {
        history.push("/sentPGDs");
    }

    const submit = () => {
        confirmAlert({
            title: 'Are you sure?',
            message: 'You will not be able to recover the PGD.',
            buttons: [
                {
                    label: 'Yes, Decline',
                    // onClick: () => alert('Click Yes')
                },
                {
                    label: 'No, Cancel',
                    // onClick: () => alert('Clicked No')
                }
            ]
        });
    };

    return (

        <div className="CenterBox">
            <br></br>
            <h1 className="titlePGD"> Received Proposals </h1>

            <Button variant="primary" className="buttonPGD"
                onClick={handleRoute}>
                View Sent PGDs Here
            </Button>


            <br></br><br></br>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 2 }).map((_, idx) => (
                    <Col>
            <Card>
                <Card.Body>
                    <Card.Title>Head in the Clouds</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">From Gloria Chang</Card.Subtitle>
                    <Card.Text>
                        Accept or Decline PGD Survey
                    </Card.Text>
                    <Card.Link href="#/PGDDetails">More Details</Card.Link>

                    <Button variant="primary">Accept</Button>
                    <br></br>

                    <Button variant="danger" onClick={submit}>Decline</Button>

                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Sent 3 mins ago</small>
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
                            bg="warning"
                            text='white'>
                            <Card.Body>
                                <Card.Title>Head in the Clouds</Card.Title>
                                <Card.Subtitle className="mb-2">From Gloria Chang</Card.Subtitle>
                                <Card.Text>
                                    In Progress
                                </Card.Text>
                                <Card.Link href="#">More Details</Card.Link>

                            </Card.Body>
                            <Card.Footer>
                                <small className="">Sent 10 mins ago</small>
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
                            bg="secondary"
                            text='white'>
                            <Card.Body>
                                <Card.Title>Head in the Clouds</Card.Title>
                                <Card.Subtitle className="mb-2">From Gloria Chang</Card.Subtitle>
                                <Card.Text>
                                    Submitted PGD. Awaiting organizer to find optimal event
                                </Card.Text>
                                <Card.Link href="#">More Details</Card.Link>

                            </Card.Body>
                            <Card.Footer>
                                <small >Sent 15 mins ago</small>
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
                                <Card.Subtitle className="mb-2">From Gloria Chang</Card.Subtitle>
                                <Card.Text>
                                    Submitted Form and Event Confirmed
                                </Card.Text>
                                <Card.Link href="#">More Details</Card.Link>

                            </Card.Body>
                            <Card.Footer>
                                <small >Sent 23 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>

        </div>
    )
}

export default MyProposalPage
