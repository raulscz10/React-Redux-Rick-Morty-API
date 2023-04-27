import "./App.scss";
import Header from "./components/Header/Header";
import About from "./containers/About/About";
import CharacterDetail from "./containers/CharacterDetail/CharacterDetail";
import CharactersList from "./containers/CharactersList/CharactersList";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
   return (
      <>
         <BrowserRouter>
            <Header />
            <Routes>
               <Route path="/" element={<Navigate to="/character" />} />
               <Route path="/character" element={<CharactersList />} />
               <Route path="/character/:id" element={<CharacterDetail />} />
               <Route path="/about" element={<About />} />
            </Routes>
            {/* Footer */}
         </BrowserRouter>
      </>
   );
}

export default App;
