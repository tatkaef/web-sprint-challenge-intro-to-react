import React from "react";
import Profilestyle from "./Profilestyle";

function Profile(props) {
  const { ch, id } = props;

  return (
    <div className="profile">
      <Profilestyle>
        <div className="close-pr" id={`${id}`}>
          <p>
            <h3>Date of bith: </h3> <h4>{ch.birth_year}</h4>{" "}
          </p>
          <p>
            <h3>Homeworld: </h3> {ch.homeworld}
          </p>
          <p>
            <h3>Gender: </h3> {ch.gender}
          </p>
          <p>
            <h3>Hair Color: </h3> {ch.hair_color}
          </p>
          <p>
            <h3>Height: </h3> {ch.height} <h3>Mass: </h3>
            {ch.mass}
          </p>
          <p>
            <h3> Starships: </h3> {ch.starships}
          </p>
          <p>
            <h3>Vehicles: </h3> {ch.vehicles}
          </p>
        </div>
      </Profilestyle>
    </div>
  );
}

export default Profile;
