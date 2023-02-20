import React, { useEffect, useState } from "react";
import ImageList from "./ImageList";

const clientId = `?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`;
const baseUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

  const fetchData = async () => {
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    const urlSearch = `&query=${search}`;

    if (search) {
      url = `${searchUrl}${clientId}${urlPage}${urlSearch}`;
      console.log("url1: " + url);
    } else {
      url = `${baseUrl}${clientId}${urlPage}`;
      console.log("url2: " + url);
    }
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData((oldData) => {
        if (search) {
          return [...oldData, ...data.results];
        } else {
          return [...oldData, ...data];
        }
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      if (
        !loading &&
        window.innerHeight + window.scrollY >= document.body.scrollHeight - 2
      ) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    return () => window.removeEventListener("scroll", event);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([]);
    fetchData();
  };

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <form className="w-full p-4 flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search"
          value={search}
          className="w-full max-w-[500px] bg-white shadow-lg rounded-lg p-2 border border-gray-50 "
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="capitalize text-white bg-blue-400 rounded-lg shadow-lg p-2"
          onClick={handleSubmit}
        >
          search
        </button>
      </form>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {data?.map((item, index) => {
          return <ImageList key={index} {...item} />;
        })}
      </div>
      {loading && (
        <div className="animate-ping rounded-full bg-gray-500 w-4 h-4 flex justify-center items-center" />
      )}
    </div>
  );
};

export default App;
