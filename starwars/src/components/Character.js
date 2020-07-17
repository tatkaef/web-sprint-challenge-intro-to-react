// Write your Character component here
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Profile from './Profile';
import axios from 'axios';


function Character(){
    const [character, setCharacter] = useState([]);
    
    const promise =axios.get('https://swapi.dev/api/people/')
    
    useEffect(() => { 
        promise.then(res => { 
            console.log("character", res.data.results)
            setCharacter(res.data.results)
            })         
        .catch(err => {console.log('Err', err)});
    }, [])


 return (
    <div className="character">
        <Header characters={character} />  
        <Profile className="hide"/>
    </div>
 );
}

export default Character;

