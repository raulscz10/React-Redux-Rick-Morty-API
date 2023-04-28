import React from "react";
import "./StatusIndicator.scss";

export default function StatusIndicator({
   size = "1em",
   marginRight = "0.375rem",
   status,
}) {
   const style = {
      height: size,
      width: size,
      marginRight,
      borderRadius: "50%",
      display: "inline-block",
      border: "1px solid gray",
   };

   return <span style={style} className={status}></span>;
}
