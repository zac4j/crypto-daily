import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("");
        setData(response.data);
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <p>Error fetching data: {error.message}</p>
      ) : (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      )}
    </div>
  );
};

export default DataFetcher;
