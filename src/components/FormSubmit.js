import React, { useState } from "react";

function FormSubmit({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="newitem">Add to the todo list</label>
      <input type="text" id="newitem" />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default FormSubmit;
