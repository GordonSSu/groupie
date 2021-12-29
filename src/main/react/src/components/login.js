import React, { useState, useContext } from "react";
import {useHistory, Redirect, Link, BrowserRouter, Route} from "react-router-dom"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import '../styles/Login.css';
import Register from './register'
import Footer from '../components/Footer';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();
        const user = await fetch(`http://localhost:8080/loginServlet?username=${username}&password=${password}`, {
                      method: 'GET'
                  }).then(data => data.json()).catch(() => document.querySelector("#invalidCredentials").classList.remove("hide"))
        if (user) {
            localStorage.setItem('token', user.token);
            localStorage.setItem('username', username)
            history.push("/userpage");
        }
    }
    document.body.classList.add('loginRegisterBg');
    document.body.classList.remove('myAvailabilityPageBg');
    return (
        <div>
            <h1 className="title"><span id="blue">Group</span>ie</h1>

            <div className= "LoginOuterContainer">
                <div className="LoginInnerContainer">
                    <div className="Login">
                        <h4>Organizing Quality Time with Friends, Simplified</h4>

                        <Form onSubmit={handleSubmit} >
                            <div className="LoginForm">
                                <Form.Group size="lg" controlId="username" >
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
                                <small id="invalidCredentials" className="errorText hide">Invalid credentials</small>
                                <br />
                                <Button  type="submit" style={{ marginTop: "20px" }} >
                                    Login
                                </Button>
                                <br />

                            </div>
                        </Form>
                        <h6>Don't have an account?<span>&nbsp;</span>

                            <Link to="/register">Sign Up</Link>
                        </h6>

                    </div>
                    {/*<Register />*/}
                </div>
            </div>
            <Footer/>
        </div>
    );
}