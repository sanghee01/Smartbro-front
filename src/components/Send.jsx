import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as cs from "../styles/SendStyles";
import send from "../assets/send.png";

const Send = () => {
  const navigate = useNavigate();
  const handleSend = (url) => {
    console.log("hi");
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
