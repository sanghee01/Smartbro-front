import styled from "styled-components";

export const Title = styled.h1`
  font-size: 30px;
`;

export const Section = styled.section`
  height: 80vh;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
