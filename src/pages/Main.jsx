import React from "react";
import Send from "../components/Send";
import Title from "../components/Title";
import * as pm from "../styles/MainStyles";
import go_help from "../assets/go_help.png";

const Main = () => {
  return (
    <>
      <pm.Section>
        <Title />
        <Send />
      </pm.Section>
      <pm.HelpBox>
        <span>Chat Gpt URL 생성방법을 모르시나요?</span>
        <img src={go_help} />
      </pm.HelpBox>
    </>
  );
};

export default Main;
