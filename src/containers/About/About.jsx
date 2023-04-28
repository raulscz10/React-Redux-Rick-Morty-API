import React from "react";

import { Col, Container, Row } from "react-bootstrap";

export default function About() {
   return (
      <div className="About">
         <Container className="app-container">
            <Row>
               <Col>
                  <h1>About</h1>
                  <p>
                     The Rick and Morty API is a REST(ish) and GraphQL API based
                     on the television show Rick and Morty. You will have access
                     to about hundreds of characters, images, locations and
                     episodes. The Rick and Morty API is filled with canonical
                     information as seen on the TV show. Check out the
                     documentation to get started
                  </p>
               </Col>
            </Row>
         </Container>
      </div>
   );
}
