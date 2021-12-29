import '../styles/UserPage.css';
import { Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import Logout from '../components/logout.js';

class UserPage extends Component {
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
        document.body.classList.add('userAccountBg');
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <a className="navbar-brand" href="#"><div className="titlenew"><span id="blue">Group</span>ie</div></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                      <a className="nav-item nav-link disabled" href="#">Username</a>
                      <a className="nav-item nav-link" href="#/EventPage">CreateEvents</a>
                      <a className="nav-item nav-link disabled" href="#">Events</a>
                      <a className="nav-item nav-link" href="#/" onClick={this.submitLogout}>Logout</a>
                    </div>
                  </div>
                </nav>
                <div className="UserProfile">
                    <br/>
                    <br/>
                    <br/>
                    <h2> User name </h2>
                    <button className="button3" onClick={this.manageAccount}> Privacy Settings</button>
                    <br/>
                    <button className="button3" onClick={this.redirectToEventPage}> Create Event </button>
                </div>
                <div className="Events">
                    <p className="Eventtitle1">Upcoming Date</p>
                </div>
                <div className="Events">
                    <p className="Eventtitle2">Proposed Date: Confirm Preferences</p>
                </div>
                <div className="Events">
                    <p className="Eventtitle3"> Confirm Date</p>
                </div>
                <div className="Footer"> <p>&#169; Team 15, 2021 </p></div>
            </div>
        );
    }
}

export default UserPage;