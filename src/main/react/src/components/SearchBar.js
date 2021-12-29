import { useState, useEffect } from "react";
import Autocomplete from 'react-autocomplete'
import '../styles/searchBar.css'

export default function SearchBar({blockedList, setBlockedList, handleAdd, currentUsername, setCurrentUsername}){
    // original users list
    const [users, setUsers] = useState([])
    // user list that changes based on the blockedlist
    const [modifiedUsers, setModifiedUsers] = useState([])
    const [listLength, setListLength] = useState(0)

    const handlePress = (e) => {
        if(e.key === 'Enter'){
            if(users.includes(currentUsername)){
                handleAdd()
            }
        }
    }

    // this is to clear input field after pressing enter
    useEffect(() => {
        if(listLength != blockedList.length){
            setCurrentUsername('')
        }
        setListLength(blockedList.length)
    }, [blockedList])
/*
    // get username list from sql
    useEffect(() => {
        fetch('http://localhost:8080/getUsers')
            .then(resp => resp.json())
            .then(data => {
                setUsers(data)
            })
    }, [])
*/
    // removes usernames in userlist that have the current user has blocked
    useEffect(() => {
        let filteredUsers = users.filter((item) => !blockedList.includes(item))
        setModifiedUsers(filteredUsers)
    }, [blockedList, users])



    // checks every username in users with what's typed in input
    function renderUsername(listValue, typedValue){
        return listValue.toLowerCase().indexOf(typedValue.toLowerCase()) > -1
    }


    return(
        <div id = "autocomplete-wrapper" onKeyDown={handlePress}>
            {
                users &&

                <Autocomplete
                    getItemValue={item => item}
                    items={modifiedUsers}
                    renderItem={(item, isHighlighted) =>
                        <div key={item} className="item" style={{background: isHighlighted ? 'white' : 'lightgray'}}>
                            {item}
                        </div>
                    }
                    shouldItemRender={renderUsername}
                    value={currentUsername}
                    onSelect={(val) => setCurrentUsername(val)}
                    onChange={(e) => setCurrentUsername(e.target.value)}
                    onKeyDown={handlePress}
                    menuStyle={
                        {
                            height: '250px',
                            overflow: 'auto',
                        }
                    }
                />
            }
        </div>
    )
}
