import React from "react";
import Send from "../components/Send";
import * as sm from "../styles/MainStyles";
import Title from "../components/Title";

const Main = () => {
  return (
    <>
      <sm.Section>
        <Title />
        <Send />
      </sm.Section>
    </>
  );
};

export default Main;
