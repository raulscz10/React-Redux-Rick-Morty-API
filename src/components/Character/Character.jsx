import React from "react";
import "./Character.scss";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import StatusIndicator from "./StatusIndicator/StatusIndicator";

export default function Character({ character }) {
   const navigate = useNavigate();

   // handlers
   const handleClick = () => {
      navigate(`/character/${character.id}`);
   };

   return (
      <div className="Character">
         <Card onClick={handleClick} style={{ width: "18rem" }}>
            <Card.Img variant="top" src={character.image} />
            <Card.Body>
               <Card.Title>{character.name}</Card.Title>
               <Card.Text className="d-flex align-items-center">
                  <StatusIndicator status={character.status} />
                  <span>{character.status}</span> - {character.species}
               </Card.Text>
            </Card.Body>
         </Card>
      </div>
   );
}
