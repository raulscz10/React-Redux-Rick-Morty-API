import React from "react";
import "./Character.scss";
import { useNavigate } from "react-router-dom";

export default function Character({ character }) {
   const navigate = useNavigate();

   // handlers
   const handleClick = () => {
      navigate(`/character/${character.id}`);
   };

   return (
      <div className="Character">
         <div
            className="card"
            title="Click for details"
            onClick={handleClick}
            style={{ width: "13rem" }}
         >
            <img src={character.image} className="card-img-top" alt="..." />
            <div className="card-body">
               <h4 className="card-title">{character.name}</h4>
               <div className="card-description">
                  <span className={"status-icon " + character.status}></span>
                  <span className={"status " + character.status}>
                     {character.status}
                  </span>{" "}
                  - {character.species}
               </div>
            </div>
         </div>
      </div>
   );
}
