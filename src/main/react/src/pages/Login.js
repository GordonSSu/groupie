import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContainerView from '../components/ContainerView';
import InputField from '../components/InputField';
import Link from '../components/Link';
import history from "../History";

const LoginPage = ( { user, setUser } ) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [invalidLogin, setInvalidLogin] = useState(false);

    useEffect(() => {
        if(user){
            history.push("/userpage");
        }
    });

    const handleLogin = (e) => {
        const login = async (user, pw) => {
            try {
                const { data } = await axios.post('http://localhost:3000/api/login',
                    {
                        username: user,
                        password: pw
                    }
                )

                localStorage.setItem("user", JSON.stringify(data));

                setInvalidLogin(false);
                setUser(JSON.parse(localStorage.getItem('user')));
                history.push("/userpage");
            } catch {
                setInvalidLogin(true);
            }
        }

        e.preventDefault();
        login(username, password);
    };


    return (
        <ContainerView logoOnly={true} user={undefined}>
            <div className="container">
                <div className="row d-flex flex-row justify-content-center align-items-center" style={{height:'60vh'}}>
                    <div className="col-10 col-md-8 col-lg-5">
                        <div className="my-3" style={{ textAlign:'center'}}>
                            <h1>Login</h1>
                            <hr />
                            {invalidLogin ? <p className="text-danger">Invalid Login</p> : null}
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="my-4" style={{ textAlign:'center'}}>
                                <InputField
                                    className="my-4"
                                    type="text"
                                    title="Username"
                                    onChange={setUsername}
                                />
                            </div>
                            <div className="my-4" style={{ textAlign:'center'}}>
                                <InputField
                                    className="my-4"
                                    type="password"
                                    title="Password"
                                    onChange={setPassword}
                                />
                            </div>
                            <div className="d-flex flex-row justify-content-between align-items-center">
                                <Link className="mr-auto ml-1" href="/#/register">
                                    <span className="hide-mobile">Don't have an account?</span>
                                    <span className="show-mobile">Register</span>
                                </Link>
                                <button className="btn btn-primary ml-auto mr-1" type="Submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ContainerView>
    );
};

export default LoginPage;