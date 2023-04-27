import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
import PulseLoader from "react-spinners/PulseLoader";

const override = {
   display: "block",
   position: "absolute",
   left: "50%",
   top: "50%",
   transform: "translate(-50%, -50%)",
   margin: "0 auto",
};

export default function Spinner({ loading }) {
   return (
      <>
         <PulseLoader
            loading={loading}
            cssOverride={override}
            color={"blue"}
            aria-label="Loading Spinner"
            data-testid="loader"
         />
      </>
   );
}
