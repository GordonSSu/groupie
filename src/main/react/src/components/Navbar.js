import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import Logo from '../assets/home_logo.png'
import "../styles/Navbar.css";

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };
    return (
        <div className="navbar">
            <div className="leftSide" id={openLinks ? "open" : "close"}>
                <img src={Logo} />
                <div className="hiddenLinks">
                    <Link to="/calendar"> Calendar </Link>
                    <Link to="/userAccount"> Account </Link>
                    <Link to="/availability"> Availability </Link>
                    <Link to="/createPGD"> Create PGD </Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/calendar"> Calendar </Link>
                <Link to="/userAccount"> Account </Link>
                <Link to="/availability"> Availability </Link>
                <Link to="/createPGD"> Create PGD </Link>
                <Link to="/proposals"> My Proposals </Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    );
}

export default Navbar;
