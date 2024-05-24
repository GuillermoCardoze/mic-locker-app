import React, {useState} from "react";

function NewMicForm({addNewMic, microphones, setMicrophones}) {
  const defaultState = {
    brand: "",
    model: "",
    pattern: "",
    quantity: "",
    country: "",
    image: ""
  }
  const [formData, setFormData] = useState(defaultState)

  function handleOnSubmit(e){
    e.preventDefault()
    addNewMic(formData)

    setMicrophones(microphones => [...microphones, formData])
    setFormData(defaultState)
    
   
  }

  function handleChange(e){
    const changeKey = e.target.name
    setFormData((updateData)=> ({...updateData, [changeKey]: e.target.value}))

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
        <button type="submit">Add Mic</button>
      </form>
    </div>
  );
}

export default NewMicForm;