import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import rickMortyService from "../../_services/rickMortyService";
import "./CharacterDetail.scss";
import { dateFormat } from "../../_util/util";
import Spinner from "../../components/Spinner/Spinner";

export default function CharacterDetail() {
   const { id } = useParams();

   // hooks
   const [character, setCharacter] = useState({});
   const [episodes, setEpisodes] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

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
         setIsLoading(false);
      } catch (error) {
         console.log(error.toString());
      }
   };

   const renderEpisodes = () => {
      return (
         <div className="tableFixHead">
            <table>
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
            </table>
         </div>
      );
   };

   return (
      <>
         <Spinner loading={isLoading} />
         {character.id && (
            <div className="CharacterDetail">
               <div className="details">
                  <div>
                     <img src={character.image} alt="" />
                  </div>
                  <div>
                     <h1>{character.name}</h1>
                     <table>
                        <tr>
                           <td>
                              <b>Status</b>
                           </td>
                           <td>
                              <span
                                 className={"status-icon " + character.status}
                              ></span>
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
                     </table>
                  </div>
               </div>

               <h3>
                  Episodes <span className="numeric">({episodes.length})</span>
               </h3>

               {renderEpisodes()}
            </div>
         )}
      </>
   );
}
