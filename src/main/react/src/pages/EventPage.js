import '../styles/EventPage.css';
import React, {Component, useEffect} from 'react';
import Modal from 'react-modal';
import SearchBar from '../components/SearchBar'
import Footer from '../components/Footer';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '200px',
  },
};

class EventPage extends Component {
    constructor() {
        super();
        this.redirectToUserPage = this.redirectToUserPage.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            setIsOpen: false,
            blockedList: [],
            currentUsername: '',
            invitees: []
        }
      }


    redirectToUserPage(){
           this.props.history.push('/UserPage');
    }

    openModal(){
           this.setState({setIsOpen: true });
    }

    closeModal(){
        this.setState({setIsOpen: 'none'});
        this.props.history.push('/UserPage');
    }

    setCurrentUsername(name){
        this.setState({currentUsername: name})
    }

    handleAdd(name){
        this.setState({invitees: [...this.state.invitees, name]})
    }

/*
    componentDidMount() {
        document.body.className="userEventBg"
        console.log(this.state.invitees)
        fetch('http://localhost:8080/getBlockedUsers?' + new URLSearchParams({
            username: localStorage.getItem('username'),
            blockChoice: 'blockedBy'
        }))
            .then(resp => resp.json())
            .then(data => {
                if(data[0] !== "empty"){
                    this.setState({blockedList: data})
                }
            })
    }

 */

    render(){
        return (
            <div className="evenPage">


                <div className="createEvent">
                <h1 className="createTitle"> Create Event </h1>
                    <div className = "eventSearchContainer">
                    <div className="form">
                    <p className="event"> Event Name </p>
                    <input className="input" type="text"/>
                    <br/>
                    <p className="date"> Date </p>
                    <input className="input" type="date"/>
                    <br/>
                    <br/>
                    <button className="button1" onClick={this.openModal}> Create Event </button>
                    <Modal
                        isOpen={this.state.setIsOpen}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal"
                      >
                        <button className="buttonBack" onClick={this.closeModal}> CLOSE</button>
                        <br/>
                        <div className="EventSuccess"> Event is created </div>
                    </Modal>
                    <br/>
                    <br/>
                    <button className="button2" onClick={this.redirectToUserPage}> Cancel </button>
                    </div>
                        <SearchBar blockedList={this.state.blockedList} handleAdd = {this.handleAdd.bind(this)}currentUsername = {this.state.currentUsername} setCurrentUsername={this.setCurrentUsername.bind(this)}/>
                    </div>
                </div>
                <br/>
                <Footer/>
            </div>
        );
    }
}

export default EventPage;