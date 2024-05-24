import React, { useState, useEffect } from "react";
import NewMicForm from "./NewMicForm";
import MicList from "./MicList";
import Search from "./Search";

function MicPage() {
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
function addNewMic(micData){



}

  return (
    <main>
      <NewMicForm 
      micropohones={microphones} 
      setMicrophones={setMicrophones} 
      addNewMic={addNewMic}
      />
      <Search setSearch={setSearch}/>
      <MicList microphones={micUpdate}/>
    </main>
  );
}

export default MicPage;