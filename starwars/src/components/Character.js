// Write your Character component here
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Profile from './Profile';
import axios from 'axios';


function CharacterOne(){
    const [character, setCharacter] = useState([0]);     
    const [currentId, setCurrentId] = useState(null)
    
        
    const promise =axios.get('https://swapi.dev/api/people/')
    
    useEffect(() => { 
        promise.then(res => { 
            console.log("character", res.data.results)
            setCharacter(res.data.results)
            })         
        .catch(err => {console.log('Err', err)});
    }, [])   



 return (     
    <div className="character" >
        {
            character.map(ch =>{
                console.log('NAME:', ch.name)
                return (
                <div>
                    <Header ch={ch} key={ch.id}/>  
                   
                    <Profile className="hide" ch={ch}/>
                </div>)
            })
        }
    </div>
 );
}

export default CharacterOne;

