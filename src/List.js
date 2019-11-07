import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function List() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await axios("https://pokeapi.co/api/v2/pokemon");
      console.log(result);
      setData(result.data.results);
    }
    fetchData();
  }, []);
  if (!data) {
    return <div />;
  }
  return (
    <div className="container">
      <ul className="list">
        {data.map(item => (
          <li key={item.name} className="list-item">
            <Link to={item.name}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
