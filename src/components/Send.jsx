import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "../styles/SendStyles";
import send from "../assets/send.png";

const Send = () => {
  const navigate = useNavigate();
  const handleSend = (url) => {
    navigate("/summary", { state: { url } });
  };
  const [query, setQuery] = useState();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <div>
        <s.Form>
          <s.InputDiv>
            <s.UrlInput placeholder="send a message" onChange={handleChange} />
            <s.SendIcon src={send} onClick={() => handleSend(query)} />
          </s.InputDiv>
        </s.Form>
      </div>
    </>
  );
};

export default Send;
