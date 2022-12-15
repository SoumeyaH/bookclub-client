import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./styles.css";

const SearchBooks = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query");

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );

      const { items } = await response.json();

      // TODO handle errors instead of items
      if (items) {
        setLoading(false);
        setResults(items);
      }
    };

    fetchData();
  }, [query]);

  console.log(results);
  return (
    <div className="search-page-container">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste nam sint
        corrupti nisi voluptates sit, asperiores et voluptatibus vel aut eaque
        ipsum ullam? Ad incidunt similique qui minus, ea dolor praesentium
        itaque ratione qui officiis voluptates quia, iste vel ea libero? Quaerat
        voluptatibus
      </p>
    </div>
  );
};

export default SearchBooks;
