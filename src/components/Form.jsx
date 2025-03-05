import { useState, useEffect } from "react";

function Form(props) {
  // State to hold the data of our form
  const [formData, setFormData] = useState({
    searchterm: "",
  });

  // handleChange - updates formData when we type into form
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.movieSearch(formData.searchterm);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchterm"
        onChange={handleChange}
        value={formData.searchterm}
      />
      <input type="submit" value="submit" />
    </form>
  );
}

export default Form;
