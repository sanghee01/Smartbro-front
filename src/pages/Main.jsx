import React from "react";
import Summary from "./Summary";
import HelpModal from "../components/HelpModal";
import * as pm from "../styles/MainStyles";
import logo_title from "../assets/logo_title.png";

const Main = () => {
  return (
    <>
      <pm.Section>
        <pm.Logo src={logo_title} />
        <Summary />
      </pm.Section>
      <HelpModal />
    </>
  );
};

export default Main;
