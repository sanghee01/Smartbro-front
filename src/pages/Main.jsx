import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import send from "../assets/send.png";
import * as s from "../styles/MainStyles";

const Main = () => {
  const navigate = useNavigate();
  const handleSend = () => {
    navigate("/summary");
  };

  return (
    <>
      <s.Section>
        <div>
          <s.Header>
            <s.Title>NOR GPT</s.Title>
            <s.Logo src={logo} />
          </s.Header>
          <s.Form>
            <s.InputDiv>
              <s.UrlInput placeholder="send a message" />
              <s.SendIcon src={send} onClick={handleSend} />
            </s.InputDiv>
          </s.Form>
        </div>
      </s.Section>
    </>
  );
};

export default Main;
