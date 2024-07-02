import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

function NewMicForm({ addNewMic }) {
  const defaultState = {
    brand: "",
    model: "",
    pattern: "",
    quantity: "",
    country: "",
    image: ""
  }
  const [formData, setFormData] = useState(defaultState)
  const stateReturn = useState("")
  console.log(stateReturn)
  const navigate = useNavigate()

  function handleOnSubmit(e){
    e.preventDefault()
    // addNewMic(formData)

    const configObj ={
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }

    fetch("http://localhost:3000/microphones", configObj)
      .then(res => res.json())
      .then(newMicData => {
        addNewMic(newMicData)
        navigate("/microphones") //directs form to MicPage to see all mics includeing new mic after submitting form

      });

    // clears out form to defalutState
    setFormData(defaultState)
  }

  function handleChange(e){
    const { name, value } = e.target //destrudctured name and value set to const
    setFormData(({...formData, [name]: value})) 
    // console.log(formData)
  }


  return (
    <div className="new-mic-form">
      <h2>New Mic Form</h2>
      <form onSubmit={handleOnSubmit}>
        <input 
         type="text"
         name="brand"
         placeholder="Mic Brand" 
         value={formData.brand}
         onChange={handleChange}
        />
        <input 
         type="text"
         name="model"
         placeholder="Mic Model" 
         value={formData.model}
         onChange={handleChange}
        />
        <input 
         type="text"
         name="pattern"
         placeholder="Polar Pattern"
         value={formData.pattern}
         onChange={handleChange} 
        />
        <input 
         type="text"
         name="country"
         placeholder="Country"
         value={formData.country}
         onChange={handleChange} 
        />
        <input 
         type="text"
         name="image"
         placeholder="Image URL"
         value={formData.image}
         onChange={handleChange} 
        />
        <input 
         type="number"
         name="quantity"
         placeholder="Quantity"
         value={formData.quantity}
         onChange={handleChange} 
        />
        <button className="add-button" type="submit">Add Mic</button>
      </form>
    </div>
  );
}

export default NewMicForm;