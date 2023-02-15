import React, { useEffect, useState } from "react";
const clientId = `?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`;
const url = `https://api.unsplash.com/photos/${clientId}`;

const App = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return <div>Hi!</div>;
};

export default App;
