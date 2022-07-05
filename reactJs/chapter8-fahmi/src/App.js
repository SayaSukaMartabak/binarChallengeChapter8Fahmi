import React from "react";
import Daftar from "./components/pages/register";
import Edit from "./components/pages/edit";
import Cari from "./components/pages/search";
import Navbar from "./components/pages/navbar";
import{BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route exact path = "/register" element = {<Daftar/>} />
      <Route exact path = "/edit" element = {<Edit/>} />
      <Route exact path = "/search" element = {<Cari/>} />
      </Routes>

    </Router>
  );
}

export default App;
