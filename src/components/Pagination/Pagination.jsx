import React from "react";
import "./Pagination.scss";

export default function Pagination({ page, count, onChange }) {
   return (
      <nav className="Pagination">
         <ul className="pagination-list">
            <li>
               <button data-page="prev" onClick={onChange} disabled={page == 1}>
                  <svg className="nav-icon" viewBox="0 0 24 24">
                     <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                  </svg>
               </button>
            </li>
            <li>
               <button data-page="1" onClick={onChange} disabled={page == 1}>
                  {1}
               </button>
            </li>
            <li>
               <div>...</div>
            </li>
            <li>
               <div className="current-page">{page}</div>
            </li>
            <li>
               <div>...</div>
            </li>
            <li>
               <button
                  data-page={count}
                  onClick={onChange}
                  disabled={page == count}
               >
                  {count}
               </button>
            </li>
            <li>
               <button
                  data-page="next"
                  onClick={onChange}
                  disabled={page == count}
               >
                  <svg className="nav-icon" viewBox="0 0 24 24">
                     <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                  </svg>
               </button>
            </li>
         </ul>
      </nav>
   );
}
