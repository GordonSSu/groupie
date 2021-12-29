import React, {useState, useContext, Component} from "react";
import '../styles/PGDAddEventsPage.css';
import { Card, Button, ListGroup, Row, Col } from 'react-bootstrap';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import {useHistory} from "react-router-dom";


class PGDAddEventsPage extends Component {

    constructor() {
        super();
        this.redirectToResponsePage = this.redirectToResponsePage.bind(this);
        this.state = {
            visible: false
        }
    }

    redirectToResponsePage() {
        this.props.history.push('/PGDEventsConfirmationPage');
    }

    render() {
        return (
            <div className="CenterContainer">
                <h1 className="titlePGD"> TicketMaster Events Found</h1>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}>
                    <AccessTimeFilledIcon />
                    <span> December 18, 2021 - December 25,2021</span>
                </div>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}>
                    <LocationOnIcon />
                    <span> Los Angeles, CA</span>
                </div>
                <p> Genre: Music </p>

                <br></br>
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 5 }).map((_, idx) => (
                        <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Taylor Swift Concert</Card.Title>
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
                                    <Button variant="primary">Add Event to PGD</Button>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>


                <Button  type="submit" style={{ marginTop: "20px" }} onClick={this.redirectToResponsePage}>
                    Continue To Submit
                </Button>
            </div>
        );
    }

}

export default PGDAddEventsPage;