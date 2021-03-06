import React from "react";

function Form(props){
return (
  <div className="container">
  <form>
    <div className="text-center form-group">
      <label htmlFor="search"><h2>Search for Books on Google!</h2></label>
      <input
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control inputField"
        placeholder="Search for a Book"
        id="search"
      />
      <button onClick={props.handleFormSubmit} className="btn btn-outline-success mt-3 mb-5">
        Search
      </button>
    </div>
  </form>
  </div>
);
}

export default Form;