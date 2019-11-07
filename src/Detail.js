import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// Placeholder for detail data
function Detail({
  match: {
    params: { id }
  }
}) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const result = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
      console.log(result);
      setData(result.data);
      setIsLoading(false);
    }
    fetchData();
  }, [id]);
  if (isLoading || !data.sprites) {
    return <div>Loading...</div>;
  }
  return (
    <div className="container">
      <div className="card">
        <h1>ID: {id}</h1>
        <div className="img-container">
          <img src={data.sprites.front_default} alt={data.name} />
        </div>
        <Link to="/">Return to List View</Link>
      </div>
    </div>
  );
}

export default Detail;
