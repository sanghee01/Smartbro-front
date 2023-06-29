import styled from "styled-components";

export const Section = styled.section`
  height: 80vh;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HelpBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1062ff;
  & > img {
    width: 15px;
    height: 13px;
    margin-left: 5px;
  }
`;
