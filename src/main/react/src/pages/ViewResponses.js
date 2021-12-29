import React, { useState, useEffect }  from 'react';
import '../styles/ViewResponses.css'
import db from "../db.json"
import schema from '../schema';
import Table from '../components/Table';
import axios from "axios";
import { authHeader } from '../App';

function ViewResponses( { user }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:3000/app/userresponses",
            {headers: authHeader()}).then(({result}) => {
            setData(result)
        });
    }, [user]);

    // useEffect(() => {
    //     new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(db);
    //         }, 2000)
    //     }).then((result) => {
    //         setData(result);
    //     })
    // });

    return (
        <div className="container p-2">
            <div className="row">
                <div className="col">
                    <Table headers={Object.keys(result)} rows={result}/>
                </div>
            </div>
        </div>
    );

}
export default ViewResponses;