import { useEffect, useState } from "react";
import React from "react";
import Header from "./Header";
import MicPage from "./MicPage";
import NewMicForm from "./NewMicForm";

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

    <div className="app">
      <Header />
      <NewMicForm addNewMic={addNewMic}/>
      <MicPage setSearch={setSearch} microphones={micUpdate}/>
    </div>
  );
}

export default App;