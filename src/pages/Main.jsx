import React, { useState } from "react";
import Summary from "./Summary";
import HelpModal from "../components/HelpModal";
import * as pm from "../styles/MainStyles";
import logo_title from "../assets/logo_title.png";
import subscript_box from "../assets/subscript_box.png";

const Main = () => {
  const [display, setDisplay] = useState(true);

  return (
    <>
      <pm.Section>
        <div>
          {display && <pm.Subscript src={subscript_box} />}
          <pm.Logo src={logo_title} />
        </div>
        <Summary setDisplay={setDisplay} />
      </pm.Section>
      <HelpModal />
    </>
  );
};

export default Main;
