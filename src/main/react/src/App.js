import './App.css';
import {useState} from 'react';
import {HashRouter as Router,Switch, Route} from 'react-router-dom';
import CreatePGDPage from './pages/CreatePGDPage';
import EventPage from './pages/EventPage';
import UserPage from './pages/UserPage';
import Login from "./pages/Login";
import Calendar from './components/calendar';
import Register from "./pages/Register";
import Availability from "./pages/MyAvailabilityPage";
import PrivacySetting from "./pages/PrivacySetting";
import MySentProposals from "./pages/MySentProposalsPage";
import { createContext } from 'react';
import PrivateRoute from './components/PrivateRoute'
import Navbar from './components/Navbar'
import MyProposalPage from "./pages/MyProposalPage";
import Account from "./pages/AccountPage";
import PGDDetails from "./components/PGDDetails";
import PGDResponse from "./components/PGDResponse";
import PGDAddEvents from "./pages/PGDAddEventsPage";
import PGDEventsConfirmationPage from "./pages/PGDEventsConfirmationPage";
import Footer from "./components/Footer";
import history from "./History";

const authHeader = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
        return { Authorization: 'Bearer ' + user.accessToken };
    } else {
        return {};
    }
}
function App() {
    const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('user')));
    return (
        <div className ="App">
            <Router history = {history}>
                <Switch>
                    <Route path="/" exact component={Login}>
                        <Login user={user} setUser={setUser} />
                    </Route>
                    <Route path="/register" exact component={Register}>
                        <Register user={user} setUser={setUser} />
                    </Route>
                    <div>
                        <Navbar />
                        <Route path="/calendar" exact component={Calendar}>
                            <Calendar user={user}/>
                        </Route>
                        <Route path="/account" exact component={UserPage}>
                            <UserPage user={user}/>
                        </Route>
                        <Route path="/userAccount" exact component={Account}>
                            <Account user={user}/>
                        </Route>
                        <Route path="/availability" exact component={Availability}>
                            <Availability user={user}/>
                        </Route>
                        <Route path="/createPGD" exact component={CreatePGDPage}>
                            <CreatePGDPage user={user}/>
                        </Route>
                        <Route path="/proposals" exact component={MyProposalPage}>
                            <MyProposalPage user={user}/>
                        </Route>
                        <Route path="/PrivacySetting" exact component={PrivacySetting}>
                            <PrivacySetting user={user}/>
                        </Route>
                        <Route path="/sentPGDs" exact component={MySentProposals}>
                            <MySentProposals user={user}/>
                        </Route>
                        <Route path="/PGDDetails" exact component={PGDDetails}>
                            <PGDDetails user={user}/>
                        </Route>
                        <Route path="/PGDResponse" exact component={PGDResponse}>
                            <PGDResponse user={user}/>
                        </Route>
                        <Route path="/PGDAddEvents" exact component={PGDAddEvents}>
                            <PGDAddEvents user={user}/>
                        </Route>
                        <Route path="/PGDEventsConfirmationPage" exact component={PGDEventsConfirmationPage}>
                            <PGDEventsConfirmationPage user={user}/>
                        </Route>
                    </div>
                </Switch>
            </Router>
            <Footer></Footer>
        </div>
    );
}

export default App;
