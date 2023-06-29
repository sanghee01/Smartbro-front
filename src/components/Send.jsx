import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as cs from "../styles/SendStyles";
import send from "../assets/send.png";

const Send = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handleSend = (url) => {
    if (location.pathname === "/summary") {
    }
    navigate("/summary", { state: { url } });
  };
  const [query, setQuery] = useState();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <cs.Form>
        <cs.InputDiv>
          <cs.UrlInput placeholder="send a message" onChange={handleChange} />
          <cs.SendIcon src={send} onClick={() => handleSend(query)} />
        </cs.InputDiv>
      </cs.Form>
    </>
  );
};

export default Send;
