import '../styles/MyAvailabilityPage.css';
import React, {Component, useState, useEffect} from 'react';
import Modal from 'react-modal';
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateFields = () => {
    //const [startDate, setStartDate] = useState(new Date());
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    // define handler change function on check-in date
    const handleCheckInDate = (date) => {
        setStartDate(date);
        setEndDate(null);
    };

    // define handler change function on check-out date
    const handleCheckOutDate = (date) => {
        setEndDate(date);
    };

    return (
        <div className="form-row">
            <label>Start Date</label>
            <DatePicker
                selected={startDate}
                onChange={handleCheckInDate }
                minDate ={new Date()}
                name="startDate"
                dateFormat="MM/dd/yyyy"
                placeholderText="MM/dd/yyyy"
            />

            <label>End Date</label>
            <DatePicker
                selected={endDate}
                onChange={handleCheckOutDate }
                minDate={startDate}
                name="endDate"
                dateFormat="MM/dd/yyyy"
                placeholderText="MM/dd/yyyy"
            />
        </div>
    );
};


const MyAvailabilityPage = (user) => {
    const [ startDate, setStartDate] = useState('');
    const [ endDate, setEndDate] = useState('');

    useEffect(()=> {
        if(!user) {
            window.history.push("/login");
        }
    });

    useEffect(() => {
        const { data } = axios.get("http://localhost:3000/app//myavailability");
        // todo: display data onto page
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/app/myavailability',
            {
                startDate: startDate,
                endDate: endDate
            }
        )
    };

    return (
        <div className ="CenterBox">
            <p className="date"> Your Unavailability Date Range </p>
            <p className="date"> {startDate} to {endDate}</p>
            <form onSubmit={handleSubmit}>
                <DateFields
                    startDate={startDate}
                    endDate={endDate}
                    setStartDate={setStartDate}
                    setendDate={setEndDate}
                />
                <br></br>
                <button className="button2"> Submit </button>
            </form>

        </div>
    )
};

export default MyAvailabilityPage;