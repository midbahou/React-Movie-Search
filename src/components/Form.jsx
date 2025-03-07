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

    if (!formData.searchterm.trim()) {
      alert("Please enter a movie title");
      return;
    }

    props.movieSearch(formData.searchterm);
    setFormData({searchterm: ""}); // Clear input after submission
  }
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="searchterm"
        onChange={handleChange}
        value={formData.searchterm}
        placeholder="Enter movie title..."
        className="search-input"
      />
      <button type="submit" className="search-btn">Search</button>
    </form>
  );
}

export default Form;
