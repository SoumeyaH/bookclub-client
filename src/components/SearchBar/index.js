import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";

import { useNavigate } from "react-router-dom";

import "./styles.css";
// todo style - input text gap from left side
//todo style - placeholder text fainter

// todo add on click of icon as well as submit
const SearchBar = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/books/search?query=${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="search a book title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <BiSearchAlt className="search-icon" />
    </form>
  );
};

export default SearchBar;

<div className="search-container">
  <input type="text" name="" id="" className="search-input" />
  <BiSearchAlt className="search-icon" />
</div>;
