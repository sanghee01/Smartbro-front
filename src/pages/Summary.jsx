import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import MoonLoader from "react-spinners/MoonLoader";
import Send from "../components/Send";
import Title from "../components/Title";
import * as ps from "../styles/SummaryStyles";
import clip from "../assets/clip.png";
import clip_done from "../assets/clip_done.png";

const instance = axios.create();

const Summary = () => {
  const location = useLocation();
  const url = location.state.url;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isCliped, setIsCliped] = useState(false);
  const initRef = useRef(false);

  const handleCopy = () => {
    setIsCliped(true);
  };

  // instance.defaults.timeout = 2500;
  useEffect(() => {
    const search = async () => {
      try {
        setData(null);
        setLoading(true); //로딩이 시작됨
        await instance
          .post("http//184.169.230.38:8080/upload", {
            url: url,
          })
          .then((response) => {
            setData(response.data.response);
            console.log(response);
          });
      } catch (e) {}
      setLoading(false);
    };

    if (!initRef.current) {
      initRef.current = true;
      console.log("first");
      search();
    }
  }, [url]);

  if (loading) return <MoonLoader color="#000000" size={30} />;

  return (
    <>
      <ps.Header>
        <Title />
        <Send />
      </ps.Header>
      <ps.Section>
        <div>{JSON.stringify(data)}</div>
        <CopyToClipboard text={data} onCopy={handleCopy}>
          {isCliped ? <img src={clip_done} /> : <img src={clip} />}
        </CopyToClipboard>
      </ps.Section>
    </>
  );
};

export default Summary;
