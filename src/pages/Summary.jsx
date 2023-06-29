import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import MoonLoader from "react-spinners/MoonLoader";
import * as ps from "../styles/SummaryStyles";
import clip from "../assets/clip.png";
import clip_done from "../assets/clip_done.png";
import send from "../assets/send.png";
import send_focus from "../assets/send_focus.png";

const instance = axios.create();

const Summary = () => {
  const [url, setUrl] = useState();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isCliped, setIsCliped] = useState(false);
  const [query, setQuery] = useState();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSend = (queryUrl) => {
    setUrl(queryUrl);
  };

  const handleEnterSend = (queryUrl) => {
    setUrl(queryUrl);
  };

  const handleCopy = () => {
    setIsCliped(true);
  };

  useEffect(() => {
    const search = async () => {
      try {
        setData(null);
        setLoading(true); //로딩이 시작됨
        await instance
          .post("https://smartbro-back.fly.dev/upload", {
            url: url,
          })
          .then((response) => {
            setData(response.data.response);
            console.log(response);
          });
      } catch (e) {}
      setLoading(false);
    };
    search();
  }, [url]);

  if (url && loading) return <MoonLoader color="#000000" size={30} />;

  return (
    <>
      <ps.InputDiv>
        <ps.UrlInput
          placeholder="ChatGPT 대화내용 공유하기 URL 을 넣어주세요 !"
          onChange={handleChange}
          onKeyPress={(e) => {
            e.key === "Enter" && handleEnterSend(query);
          }}
        />
        <ps.SendIcon
          src={query ? send_focus : send}
          onClick={() => handleSend(query)}
        />
      </ps.InputDiv>
      {data && (
        <>
          <ps.TextBox>{JSON.stringify(data)}</ps.TextBox>
          <CopyToClipboard text={data} onCopy={handleCopy}>
            {isCliped ? <img src={clip_done} /> : <img src={clip} />}
          </CopyToClipboard>
        </>
      )}
    </>
  );
};

export default Summary;
