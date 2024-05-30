import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import Header from "./Header";
import MicPage from "./MicPage";
import About from "../pages/About";
import NewMicForm from "./NewMicForm";
import NavBar from "../pages/NavBar";


function App() {
  const [microphones, setMicrophones] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=>{
    fetch("http://localhost:3000/microphones")
    .then(res => res.json())
    .then(mics => setMicrophones(mics))
    .catch(error => console.error(error))
  },[])

  const micUpdate = microphones.filter(mics => {
    return mics.brand.toLowerCase().includes(search.toLowerCase()) || 
           mics.model.toLowerCase().includes(search.toLowerCase()) ||
           mics.country.toLowerCase().includes(search.toLowerCase()) ||
           mics.pattern.toLowerCase().includes(search.toLowerCase()) 
  })
function addNewMic(formData){
    setMicrophones(microphones => [...microphones, formData])

}


  return (

    <Router>
      <header>
      <Header />
      </header>
    <div className="app">
      <NavBar />
    </div>
    <Routes>
     <Route path="/" element={<About />}/>
     <Route path="/add" element={<NewMicForm addNewMic={addNewMic} />}/>
     <Route path="/microphones" element={<MicPage setSearch={setSearch} microphones={micUpdate}/>}/>
    </Routes>
    </Router>
  );
}

export default App;