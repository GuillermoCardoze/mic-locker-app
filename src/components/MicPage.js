import React, { useState, useEffect } from "react";
import NewMicForm from "./NewMicForm";
import MicList from "./MicList";
import Search from "./Search";

function MicPage() {
  const [microphones, setMicrophones] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/microphones")
    .then(res => res.json())
    .then(mics => setMicrophones(mics))
    .catch(error => console.error(error))
  },[])


  return (
    <main>
      <NewMicForm />
      <Search />
      <MicList microphones={microphones}/>
    </main>
  );
}

export default MicPage;