import styled from "styled-components";

export const Section = styled.section`
  height: 80vh;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  & > header {
    margin-top: 50px;
    margin-bottom: 15px;
    opacity: 0.5;
  }

  & > header > h1 {
    font-size: 15px;
  }
  & > header > img {
    width: 20px;
    height: 20px;
  }
`;
