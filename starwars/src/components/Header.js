import React, { useState } from 'react';


function Header(props) {
    const { characters } = props;
    const [name, setName] = useState('');


    if (characters[0]) {
    console.log('Name', characters[0].name);
    setName(characters[0].name)    
    }

 return (
   <div className="header">
       <div>Name: {name}</div>
       <button>+</button>
        
   </div>
 );
}

export default Header;
