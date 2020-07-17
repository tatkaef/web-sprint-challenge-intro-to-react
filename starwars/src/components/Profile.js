import React from 'react';
import Profilestyle from './Profilestyle';



function Profile(props){
    const { ch } = props;

  

  return (
    <div className="profile"> 
    <button onClick={(event) => {
      if (document.querySelector(".close-pr")) {
          const prof = document.querySelector(".close-pr");
          
          prof.classList.add("open-pr");     
            
          prof.classList.remove('close-pr');
                        

      } else if(document.querySelector(".open-pr")) {
          
      const prof = document.querySelector(".open-pr");
      prof.classList.add("close-pr"); 
          prof.classList.remove('open-pr');
  }
  }}>
      ****
  </button>
    <Profilestyle>
    
      <div  className="close-pr">
        <div><h3>Date of bith: </h3> <h4>{ch.birth_year}</h4></div>
        <div><h3>Homeworld: </h3>{ch.homeworld}</div>
        <div><h3>Gender: </h3>{ch.gender}</div>
        <div><h3>Hair Color: </h3>{ch.hair_color}</div>
        <div><h3>Height: </h3>{ch.height} <h3>Mass: </h3>{ch.mass}</div>
        <div><h3> Starships: </h3>{ch.starships}</div>
        <div><h3>Vehicles: </h3>{ch.vehicles}</div> 
        </div>
    </Profilestyle>      
  
        
          
     </div>
  );
}

export default Profile;
