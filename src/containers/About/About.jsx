import React from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
   // hooks
   const navigate = useNavigate();

   // handlers
   const handleClick = () => {
      navigate("/");
   };
   return (
      <div>
         <h1>About</h1>
         <p>
            The Rick and Morty API is a REST(ish) and GraphQL API based on the
            television show Rick and Morty. You will have access to about
            hundreds of characters, images, locations and episodes. The Rick and
            Morty API is filled with canonical information as seen on the TV
            show. Check out the documentation to get started
         </p>

         <button onClick={handleClick}>Characters</button>
      </div>
   );
}
