import React, {useState, useContext, Component} from "react";
import '../styles/PGDDetails.css';
import { Card, Button, ListGroup, Row, Col } from 'react-bootstrap';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import {useHistory} from "react-router-dom";


class PGDDetails extends Component {

    constructor() {
        super();
        this.redirectToResponsePage = this.redirectToResponsePage.bind(this);
        this.state = {
            visible: false
        }
    }

    redirectToResponsePage() {
        this.props.history.push('/PGDResponse');
    }

    render() {
        return (
            <div className="CenterContainer">
                <h1 className="titlePGD"> Event Name </h1>
                <h5>From: GloriaChang</h5>
                <h5>To: LucasHuang, GordonSu, LeenaMathur, TeresaTran</h5>
                <p>Sent 40 mins ago</p>
                <br></br>
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 5 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Head in the Clouds</Card.Title>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                                        <AccessTimeFilledIcon />
                                        <span> December 18, 2021 5:00 PM - 6:00 PM</span>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'wrap',
                                    }}>
                                        <LocationOnIcon />
                                        <span> Los Angeles, CA</span>
                                    </div>

                                    <Card.Link href="#">More Details</Card.Link>
                                    <br></br><br></br>
                                    <Button variant="info" >View Responses</Button>
                                    <br></br>
                                    <Button variant="danger">Delete Event</Button>
                                    <br></br>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <Button  type="submit" style={{ marginTop: "20px" }} >
                    Find Optimal Event
                </Button>

                <Button  type="submit" style={{ marginTop: "20px" }} onClick={this.redirectToResponsePage}>
                    Add Your Response
                </Button>
            </div>
        );
    }

}

export default PGDDetails;