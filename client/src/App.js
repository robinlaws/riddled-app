import './App.css';
import React from "react";
import { Home } from "./pages/Home";
import { Rules } from "./pages/Rules";
import { Stats } from "./pages/Stats";
import { NotFoundPage } from "./pages/NotFoundPage";
import { Nav } from './components/nav.js';
import { Footer } from './components/footer.js';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
      <div className="App">
        <Nav />
          <Routes>
              <Route exact path="/" element={<Home/> }/>
              <Route exact path="/rules" element={<Rules/>}/>
              <Route exact path="/stats" element={<Stats/>}/>
              <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        <Footer />
      </div>
    );
}

export default App;