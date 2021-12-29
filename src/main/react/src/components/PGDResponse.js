import React, {useState, useContext, Component} from "react";
import '../styles/PGDDetails.css';
import { Card, Button, ListGroup, Row, Col } from 'react-bootstrap';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import {useHistory} from "react-router-dom";
import DatePicker from "react-datepicker";



class PGDDetails extends Component {

    constructor(){
        super();
        this.state = {
            availability:null,
            excitement:null,
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        var value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    submit(){
        console.warn(this.state)
    }

    save() {

    }

    render() {
        return (
            <div className="CenterContainer">
                <h1 className="titlePGD"> Event Name </h1>
                <h5>From: GloriaChang</h5>
                <h5>To: LucasHuang, GordonSu, LeenaMathur, TeresaTran</h5>
                <p>Sent 40 mins ago</p>

                <form>
                    <h3>Event #1 Name</h3>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}>
                        <LocationOnIcon />
                        <span> Los Angeles, CA</span>
                    </div>

                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                    }}>
                        <AccessTimeFilledIcon />
                        <span> December 18, 2021 5:00 PM - 6:00 PM</span>
                    </div>

                <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Availability</label>
                            <select className="form-control" name="excitement" onChange={this.handleInputChange}>
                                <option selected>Select an Availability</option>
                                <option value="1">1</option>
                                <option value="2">0</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>Excitment Level</label>
                            <select className="form-control" name="excitement" onChange={this.handleInputChange}>
                                <option selected>Select Excitment Level</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>

                    <br></br>
                    <div className="form-row">
                        <div className="col-md-12 text-center">
                            <button type="submit" className="btn btn-primary" onClick={() => this.submit()}>Submit
                            </button>
                        </div>
                    </div>
                    <br></br>
                    <div className="form-row">
                        <div className="col-md-12 text-center">
                            <button type="save" className="btn btn-primary" onClick={() => this.save()}>Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

}

export default PGDDetails;