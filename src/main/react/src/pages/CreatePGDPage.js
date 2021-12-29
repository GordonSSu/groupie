import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class CreatePGDPage extends React.Component{

    constructor(){
        super();
        this.state = {
            pgd_name:null,
            location:null,
            genre:null,
            keywords:null,
            startDate: new Date(),
            endDate: null
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        // this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        var value = target.value;
        const name = target.name;

        this.setState({
                [name]: value
            });
    }

    handleStartDateChange(date) {
        this.setState({
            startDate: date
        })
    }
    handleEndDateChange(date) {
        this.setState({
            endDate: date
        })
    }

    submit(){
        console.warn(this.state)
        this.props.history.push('/PGDAddEvents');
    }

    render(){
        return(
            <div>
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <br /><br />
                        <h3>Create a Proposed Group Date Form</h3><br />
                        <form>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label>PGD Title</label>
                                    <input type="text" class="form-control" name="pgd_name" onChange={this.handleInputChange} />
                                </div>
                                <br></br>
                                <div class="form-group col-md-6">
                                    <label>Location</label>
                                    <input type="text" class="form-control" name="location" onChange={this.handleInputChange} />
                                </div>
                            </div>
                            <br></br>
                            <div class="form-row">
                                <div class="form-group col-md-6">
                                    <label>Genre</label>
                                    <select class="form-control" name="genre" onChange={this.handleInputChange}>
                                        <option selected>Select Genre</option>
                                        <option value="1">Sports</option>
                                        <option value="2">Music</option>
                                        <option value="3">Comedy</option>
                                    </select>
                                </div>
                            </div>
                            <br></br>

                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label>Keywords</label>
                                    <textarea name="keywords" className="form-control"
                                              onChange={this.handleInputChange}/>
                                </div>
                            </div>
                            <br></br>

                            <div className="form-row">
                                <label>Start Date</label>
                                <DatePicker
                                    selected={this.state.startDate }
                                    onChange={this.handleStartDateChange }
                                    minDate ={new Date()}
                                    name="startDate"
                                    dateFormat="MM/dd/yyyy"
                                />

                                <label>End Date</label>
                                <DatePicker
                                    selected={this.state.endDate }
                                    onChange={this.handleEndDateChange }
                                    minDate={this.state.startDate}
                                    name="endDate"
                                    dateFormat="MM/dd/yyyy"
                                />

                            </div>

                            <br></br>
                            <div class="form-row">
                                <div class="col-md-12 text-center">
                                    <button type="submit" class="btn btn-primary" onClick={()=>this.submit()}>Find Events</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreatePGDPage;