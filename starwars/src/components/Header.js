import React from 'react';
import Headerstyle from './Headerstyle';


function Header(props) {
    const { ch } = props; 
       
    

   

 return (
   <div className="header" >
       <Headerstyle><h2>{ch.name}</h2></Headerstyle>
      
        
   </div>
 );
}

export default Header;
