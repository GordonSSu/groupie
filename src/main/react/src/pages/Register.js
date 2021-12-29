import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContainerView from '../components/ContainerView';
import InputField from '../components/InputField';
import Link from '../components/Link';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import LandingPage from './Landing';
import Login from "./Login";
import history from "../History";

const UserFields = ({ username, password, setUsername, setPassword }) => {
    const errClasses = "text-danger my-0 py-0"

    return (
        <React.Fragment>
            <div className="my-4" style={{ textAlign:'center'}}>
                <InputField
                    className="pb-0 mb-0"
                    type="text"
                    title="Username"
                    onChange={setUsername}
                />
                {username.length > 20 ? <p className={errClasses}>Your username is too long</p> : null}
            </div>

            <div className="my-4" style={{ textAlign:'center'}}>
                <InputField
                    className="pb-0 mb-0"
                    type="password"
                    title="Password"
                    onChange={setPassword}
                />
                {(password.length < 6 && password.length > 0) ? <p className={errClasses}>Password must be at least 6 characters.</p> : null}
            </div>
        </React.Fragment>
    );
};

const SignupPage = ({ setUser, user }) => {
    const [ role, setRole ] = useState("user");
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ errmsg, setErrMsg ] = useState('');

    useEffect(() => {
        if(user){
            history.push("/userpage");
        }
    }, [user]);

      useEffect(() => {
        setUsername('');
        setPassword('');
        setErrMsg('');
      }, [role]);

    const handleSignup = (e) => {
        e.preventDefault();

        if(!username || username.length > 20){
            setErrMsg("Please check your username");
        }
        else if(password.length < 6){
            setErrMsg("Please check your password");
        }
        else{
            axios.post('http://localhost:3000/api/register',
                {
                    username: username,
                    password: password,
                    role: role
                }
            ).then(() => {
                axios.post('http://localhost:3000/api/login',
                    {
                        username: username,
                        password: password
                    }
                ).then(({ data })=>{
                    localStorage.setItem("user", JSON.stringify(data));
                    setUser(JSON.parse(localStorage.getItem('user')));
                }).catch((error) => {
                    alert(error.response.data.message);
                }
                ).then(() => {
                    history.push("/userpage");
                })
            }).catch((error) => {
                setErrMsg(error.response.data.message);
            })
        }
    };

    return (
        <ContainerView logoOnly={true} user={undefined}>
            <div className="container">
                <div className="row d-flex flex-row justify-content-center align-items-center" style={{height:'60vh'}}>
                    <div className="col-10 col-md-8 col-lg-5">
                        <h1 className="my-3" style={{ textAlign:'center' }}>Register</h1>
                        <hr />
                        {errmsg ?
                            <p className="text-danger" style={{ textAlign:'center' }}>{errmsg}</p>
                            : null}
                        <form onSubmit={handleSignup}>
                            <UserFields
                                username={username}
                                password={password}
                                setUsername={setUsername}
                                setPassword={setPassword}
                            />
                            <div className="d-flex flex-row justify-content-between align-items-center mb-3">
                                <Link className="mr-auto ml-1" href="/#/login">
                                    <span className="hide-mobile">Already have an account?</span>
                                    <span className="show-mobile">Sign In</span>
                                </Link>
                                <button className="btn btn-primary ml-auto mr-1" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ContainerView>
    );
};

export default SignupPage;