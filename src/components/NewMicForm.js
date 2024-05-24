import React from "react";

function NewMicForm() {
  return (
    <div className="new-mic-form">
      <h2>New Mic</h2>
      <form>
        <input type="text" name="name" placeholder="Plant name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Mic</button>
      </form>
    </div>
  );
}

export default NewMicForm;