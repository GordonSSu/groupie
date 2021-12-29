import '../styles/AccountPage.css';
import { Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import Logout from '../components/logout.js';

class Account extends Component {
    constructor(props) {
        super(props)
        this.redirectToEventPage = this.redirectToEventPage.bind(this);
        this.manageAccount = this.manageAccount.bind(this);
        this.state = {
            visible: false
        }
    }

    redirectToEventPage() {
        this.props.history.push('/EventPage');
    }
    manageAccount(){
        this.props.history.push('/PrivacySetting');
    }

    showModal() {
        this.setState({ visible: true })
    }

    async submitLogout(){
        localStorage.clear();
    }
    componentDidMount(){
        document.body.className="userEventBg"
    }

    render(){
        document.body.classList.add('userAccountBg');
        return (
            <div>
                <div className="CenterContainer">
                    <h2> User name </h2>
                    <button style={{ width: "250px" }} onClick={this.manageAccount}> Privacy Settings</button>
                    <br></br><br></br>
                    <button style={{ width: "250px" }} > Log Out</button>
                </div>

                <div className="Footer"> <p>&#169; Team 15, 2021 </p></div>
            </div>
        );
    }
}

export default Account;