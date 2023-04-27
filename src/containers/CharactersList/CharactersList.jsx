import React, { useEffect, useState } from "react";
import Character from "../../components/Character/Character";
import "./CharactersList.scss";
import rickMortyService from "../../_services/rickMortyService";
import Pagination from "../../components/Pagination/Pagination";
import Spinner from "../../components/Spinner/Spinner";
import { useSelector, useDispatch } from "react-redux";
import { nextPage, prevPage, goToPage } from "./paginationSlice";

export default function CharactersList() {
   // hooks
   const [characters, setCharacters] = useState([]);
   const [pages, setPages] = useState(0);
   const [isLoading, setIsLoading] = useState(true);
   const page = useSelector((state) => state.pagination.page);
   const dispatch = useDispatch();

   useEffect(() => {
      setIsLoading(true);
      getAllCharacters(page);
   }, [page]);

   // functions
   const getAllCharacters = async (page) => {
      console.log(page);
      try {
         const response = await rickMortyService.getAllCharacters(page);
         setCharacters(response.results);
         setPages(response.info.pages);
         setIsLoading(false);
      } catch (error) {
         console.log(error.toString());
      }
   };

   const handleChange = (e) => {
      /**
       * e.currentTarget.dataset.page ==> "next", "prev", number
       */
      const dataPage = e.currentTarget.dataset.page;

      let pageNumber;
      switch (dataPage) {
         case "next":
            return dispatch(nextPage());
         case "prev":
            return dispatch(prevPage());
         default:
            pageNumber = +dataPage;
            return dispatch(goToPage(pageNumber));
      }
   };

   return (
      <div className="CharactersList">
         <Spinner loading={isLoading} />

         {!isLoading && (
            <>
               <h1>Rick Morty Characters</h1>
               <Pagination page={page} count={pages} onChange={handleChange} />

               <div className="list">
                  {characters.map((char) => (
                     <Character key={char.id} character={char} />
                  ))}
               </div>
               <Pagination page={page} count={pages} onChange={handleChange} />
            </>
         )}
      </div>
   );
}
