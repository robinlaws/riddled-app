import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";
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
  const getRiddle = () => {
    Axios.get(`/api/getRiddle`).then((response) => {
      setRiddle(response.data)});
  }
  const [riddle, setRiddle] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getRiddle();
    setLoading(false);
  }, []);
  
  if (loading) return <h1>Loading...</h1>;

  return (
      <div className="App">
        <Nav />
          <Routes>
              <Route exact path="/" element={<Home riddle={riddle}/>}/>
              <Route exact path="/rules" element={<Rules/>}/>
              <Route exact path="/stats" element={<Stats/>}/>
              <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        <Footer />
      </div>
    );
}

export default App;