import React from "react";
import Send from "../components/Send";
import Title from "../components/Title";
import * as pm from "../styles/MainStyles";

const Main = () => {
  return (
    <>
      <pm.Section>
        <Title />
        <Send />
        <span>Chat Gpt URL 생성방법을 모르시나요?</span>
      </pm.Section>
    </>
  );
};

export default Main;
