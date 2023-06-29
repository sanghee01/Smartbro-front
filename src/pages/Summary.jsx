import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import MoonLoader from "react-spinners/MoonLoader";
import Send from "../components/Send";
// import * as s from "../styles/SummaryStyles";
import Title from "../components/Title";

const Summary = () => {
  const location = useLocation();
  const url = location.state.url;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const instance = axios.create();
  instance.defaults.timeout = 2500;
  const search = async () => {
    try {
      setData(null);
      setLoading(true); //로딩이 시작됨
      await instance
        .post("http://184.169.230.38:5000/upload", {
          url: url,
        })
        .then((response) => {
          setData(response.response);
        });
    } catch (e) {}
    setLoading(false);
  };

  useEffect(() => {
    search();
  }, [url]);

  if (loading) return <MoonLoader color="#000000" size={30} />;

  return (
    <div>
      <Title />
      <Send />
      {url}
      <div>{JSON.stringify(data)}</div>
    </div>
  );
};

export default Summary;
