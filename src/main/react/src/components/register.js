import React, { useState, useContext } from "react";
import {useHistory, Redirect, Link} from "react-router-dom"
import '../styles/Login.css'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Footer from '../components/Footer';
import Login from './login'
// import 'bootstrap/dist/css/bootstrap.min.css';



export default function Register() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const history = useHistory()



    const handleSubmitRegister = async (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            document.querySelector("#duplicateUsername").classList.add("hide");
            document.querySelector("#passwordEmpty").classList.add("hide");
            document.querySelector("#passwordNotMatch").classList.remove("hide");
            setPassword("");
            setConfirmPassword("");
        }
        else if (password === "")
        {
            document.querySelector("#duplicateUsername").classList.add("hide");
            document.querySelector("#passwordNotMatch").classList.add("hide");
            document.querySelector("#passwordEmpty").classList.remove("hide");
            setPassword("");
            setConfirmPassword("");
        }
        else {
            localStorage.setItem('username', username)
            history.push("/calendar");
            window.location.reload();
        }

        //else
        //{
        //    const token = await fetch(`http://localhost:8080/registerServlet?username=${username}&password=${password}`, {
        //                    method: 'POST'
        //                }).then(res => res.text()).catch(() => alert("Duplicate Username"))
        //    if (token) {
        //        localStorage.setItem('token', token);
        //       localStorage.setItem('username', username)
        //        history.push("/calendar");
        //        window.location.reload();
        //    }
        //    else{
        //        document.querySelector("#passwordEmpty").classList.add("hide");
        //        document.querySelector("#passwordNotMatch").classList.add("hide");
        //        document.querySelector("#duplicateUsername").classList.remove("hide");
        //    }
        //}


    }
    document.body.classList.add('loginRegisterBg');
    document.body.classList.remove('userEventBg');
    return (
        <>
            <div className="Register">
                <Form onSubmit={handleSubmitRegister}>
                    <div className="RegisterForm">
                        <h1><span id="blue">Group</span>ie</h1>
                        <h5>Welcome!</h5>
                        <br />
                        <Form.Group size="lg" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <br />
                            <Form.Control
                                autoFocus
                                type="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group size="lg" controlId="password" style={{ marginTop: "20px" }}>
                            <Form.Label>Password</Form.Label>
                            <br />
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group size="lg" controlId="confirmPassword" style={{ marginTop: "20px" }}>
                            <Form.Label>Confirm Password</Form.Label>
                            <br />
                            <Form.Control
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </Form.Group>
                        <small id="passwordNotMatch" className="errorText hide">Passwords don't match</small>
                        <small id="passwordEmpty" className="errorText hide">Password cannot be empty</small>
                        <small id="duplicateUsername" className="errorText hide">Duplicate Username</small>
                        <Button id="buttonRegister" type="submit" style={{ marginTop: "40px" }}>
                            Create User
                        </Button>
                    </div>
                </Form>
                <h6>Already have an account?<span>&nbsp;</span>
                    <Link to="/">Cancel</Link>
                </h6>{/*<Register />*/}
            </div>
            <Footer/>
        </>
    );
}