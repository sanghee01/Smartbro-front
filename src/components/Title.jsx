import React from "react";
import logo from "../assets/logo.png";
import * as ct from "../styles/TitleStyles";

const Title = () => {
  return (
    <ct.Header>
      <ct.Title>세상을 바꾸는 지피티</ct.Title>
      <ct.Logo src={logo} />
    </ct.Header>
  );
};

export default Title;
