import React, { useState } from "react";
import Send from "../components/Send";
import Title from "../components/Title";
import HelpModal from "../components/HelpModal";
import * as pm from "../styles/MainStyles";

const Main = () => {
  return (
    <>
      <pm.Section>
        <Title />
        <Send />
      </pm.Section>
      <HelpModal />
    </>
  );
};

export default Main;
