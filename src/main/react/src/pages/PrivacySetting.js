import '../styles/PrivacySetting.css';
import React, {Component, Link, useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Footer from '../components/Footer';
import SearchBar from "../components/SearchBar";

const initialList = [
    'Robin',
    'Dennis'
];

export default function PrivacySetting() {
    let [list, setList] = React.useState(initialList);
    const [currentUsername, setCurrentUsername] = useState('')
    console.log(list)

    useEffect(() => {
        fetch('http://localhost:3000/getBlockedUsers?' + new URLSearchParams({
            username: localStorage.getItem('username'),
            blockChoice: 'blocked'
        }))
            .then(resp => resp.json())
            .then(data => {
                if(data[0] !== "empty"){
                    setList(data)
                }
            })
    }, [])

      function handleAdd(){
          setList(list => ([...list, currentUsername]))
          fetch('http://localhost:3000/unBlockUser?' + new URLSearchParams({
              username: localStorage.getItem('username'),
              userToBlock: currentUsername
          }),{
              method: 'POST'
          })
              .then(resp => resp.text())
              .then(data => {
                  console.log(data)
              })
      }

      function handleDelete(name){
          setList(list.filter(username => username != name))
          fetch('http://localhost:3000/unBlockUser?' + new URLSearchParams({
              username: localStorage.getItem('username'),
              userToUnBlock: name
          }),{
              method: 'POST'
          })
              .then(resp => resp.text())
              .then(data => {
                  console.log(data)
              })
      }

      function redirectToUserPage() {
         this.props.history.push('/userAccount');
      }
        return (
            <div>
            <div className="PrivacySetting">
                <h1> User name </h1>
                <div id = "blockedContainer">
                    <div style ={{display: 'flex', marginTop: '45px'}}>
                        <SearchBar blockedList = {list} setBlockedList = {setList} handleAdd = {handleAdd} currentUsername = {currentUsername} setCurrentUsername = {setCurrentUsername}/>
                        <button id = "blockUserBtn" onClick={handleAdd}> Add to Blocked User List</button>
                    </div>
                    <div>
                        <p className="Blocked">Blocked Users</p>
                        <ul>
                            {list.map((name, index) => (
                                <li key={index}>{name} <button className="items" onClick={()=>handleDelete(name)}> Delete </button></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        );
}
