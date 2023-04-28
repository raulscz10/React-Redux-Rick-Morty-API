import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import rickMortyService from "../../_services/rickMortyService";
import "./CharacterDetail.scss";
import { dateFormat } from "../../_util/util";
import Spinner from "../../components/Spinner/Spinner";
import Table from "react-bootstrap/Table";
import { Container, Row, Col } from "react-bootstrap";
import StatusIndicator from "../../components/Character/StatusIndicator/StatusIndicator";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

export default function CharacterDetail() {
   const { id } = useParams();

   // hooks
   const [character, setCharacter] = useState({});
   const [episodes, setEpisodes] = useState([]);
   const [isLoading, setIsLoading] = useState(true);
   const [apiError, setApiError] = useState(null);
   const navigate = useNavigate();

   useEffect(() => {
      getCharacterById();
   }, []);

   // functions
   const getCharacterById = async () => {
      try {
         const char = await rickMortyService.getCharacterById(id);
         const episodesUrl = char.episode;
         const episodesList = await rickMortyService.getEpisodesByUrlList(
            episodesUrl
         );
         setEpisodes(episodesList);
         setCharacter(char);
      } catch (error) {
         console.log(error.toString());
         setApiError(error.toString());
      } finally {
         setIsLoading(false);
      }
   };

   const renderEpisodes = () => {
      return (
         <div className="tableFixHead">
            <Table striped responsive size="sm">
               <thead>
                  <tr>
                     <th>Episode</th>
                     <th>Name</th>
                     <th>Created</th>
                  </tr>
               </thead>
               <tbody>
                  {episodes.map((epi) => (
                     <tr key={epi.id}>
                        <td>{epi.episode}</td>
                        <td>{epi.name}</td>
                        <td>{dateFormat(epi.created)}</td>
                     </tr>
                  ))}
               </tbody>
            </Table>
         </div>
      );
   };

   const next = () => {
      navigate(`/character/${character.id + 1}`);
      window.location.reload(false);
   };

   const prev = () => {
      navigate(`/character/${character.id - 1}`);
      window.location.reload(false);
   };

   return (
      <>
         <Spinner loading={isLoading} />

         {apiError && (
            <Alert variant="danger" dismissible>
               <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
               <p>{apiError}</p>
            </Alert>
         )}

         {character.id && (
            <div className="CharacterDetail">
               <Container className="app-container app-container--small">
                  <Row>
                     <Col>
                        <div className="d-flex justify-content-center align-items-center mb-5 gap-4">
                           <Button onClick={prev} variant="outline-primary">
                              Prev
                           </Button>
                           <div className="fs-5 text-black-50">
                              {"character/" + character.id}
                           </div>
                           <Button onClick={next} variant="outline-primary">
                              Next
                           </Button>
                        </div>
                     </Col>
                  </Row>
                  <Row className="align-items-center">
                     <Col>
                        <img src={character.image} alt="" />
                     </Col>
                     <Col sm={7}>
                        <h1 className="mb-4">{character.name}</h1>
                        <Table size="sm" borderless>
                           <tbody>
                              <tr>
                                 <td className="w-25">
                                    <b>Status</b>
                                 </td>
                                 <td>
                                    <StatusIndicator
                                       status={character.status}
                                    />
                                    {character.status}
                                 </td>
                              </tr>
                              <tr>
                                 <td>
                                    <b>Species</b>
                                 </td>
                                 <td>{character.species}</td>
                              </tr>
                              <tr>
                                 <td>
                                    <b>Origin</b>
                                 </td>
                                 <td>{character.origin.name}</td>
                              </tr>
                              <tr>
                                 <td>
                                    <b>Location</b>
                                 </td>
                                 <td>{character.location.name}</td>
                              </tr>
                              <tr>
                                 <td>
                                    <b>Created</b>
                                 </td>
                                 <td>{dateFormat(character.created)}</td>
                              </tr>
                           </tbody>
                        </Table>
                     </Col>
                  </Row>

                  <Row className="mt-5">
                     <Col>
                        <h3>Episodes ({episodes.length})</h3>
                        {renderEpisodes()}
                     </Col>
                  </Row>
               </Container>
            </div>
         )}
      </>
   );
}
