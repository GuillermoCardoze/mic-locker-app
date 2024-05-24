import React from "react";

function NewMicForm() {
  return (
    <div className="new-mic-form">
      <h2>New Mic Form</h2>
      <form>
        <input type="text" name="name" placeholder="Mic Brand" />
        <input type="text" name="name" placeholder="Mic Model" />
        <input type="text" name="name" placeholder="Polar Pattern" />
        <input type="text" name="name" placeholder="Country" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="quantity" step="0.01" placeholder="Quantity" />
        <button type="submit">Add Mic</button>
      </form>
    </div>
  );
}

export default NewMicForm;