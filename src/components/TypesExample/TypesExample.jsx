import React from "react";
import Pagination from "react-bootstrap/Pagination";

export default function TypesExample() {
   let active = 2;
   let items = [];
   items.push(<Pagination.First />);
   items.push(<Pagination.Prev />);
   for (let number = 1; number <= 5; number++) {
      items.push(
         <Pagination.Item key={number} active={number === active}>
            {number}
         </Pagination.Item>
      );
   }
   items.push(<Pagination.Next />);
   items.push(<Pagination.Last />);

   return (
      <>
         <Pagination>{items}</Pagination>
      </>
   );
}
