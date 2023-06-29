import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import MoonLoader from "react-spinners/MoonLoader";

const Summary = () => {
  const location = useLocation();
  const url = location.state.url;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const search = async () => {
    try {
      setData(null);
      setLoading(true); //로딩이 시작됨
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/"
      );
      setData(response.data);
    } catch (e) {}
    setLoading(false);
  };

  useEffect(() => {
    search();
  }, [url]);

  if (loading) return <MoonLoader color="#000000" size={30} />;

  return (
    <div>
      {url}
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default Summary;
