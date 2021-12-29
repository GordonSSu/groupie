import React, {useState, useContext, Component} from "react";
import '../styles/PGDEventsConfirmationPage.css';
import { Card, Button, ListGroup, Row, Col } from 'react-bootstrap';

import CustomizedHook from "../components/AutofillSearchBar";

import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import {useHistory} from "react-router-dom";


class PGDEventsConfirmationPage extends Component {

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
                <h1 className="titlePGD"> Current Selected Events</h1>
                <Button  type="submit" style={{width: "200px" }} onClick={this.redirectToResponsePage}>
                    Add More Events
                </Button>
                <br></br><br></br>
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 3 }).map((_, idx) => (
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
                                    <Button variant="danger">Delete Event From PGD</Button>

                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <CustomizedHook></CustomizedHook>

                <Button  type="submit" style={{ marginTop: "20px" }} onClick={this.redirectToResponsePage}>
                    Send Proposal
                </Button>

                <Button  type="submit" style={{ marginTop: "20px" }} onClick={this.redirectToResponsePage}>
                    Save Draft
                </Button>
            </div>
        );
    }

}

export default PGDEventsConfirmationPage;