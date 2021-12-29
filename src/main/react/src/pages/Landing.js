import React, { Component } from 'react';
import '../App.css';
import ContainerView from '../components/ContainerView';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class LandingPage extends Component {
    render() {
        return (
            <ContainerView logoOnly={true} user={undefined}>
                <div>
                    <Container fluid>
                        <Button color="link"><Link to="/login">Login</Link></Button>
                        <Button color="link"><Link to="/register">Register</Link></Button>
                        <Button color="link"><Link to="/userdash">User Dash</Link></Button>
                    </Container>
                </div>
            </ContainerView>
        );
    }
}
export default LandingPage;