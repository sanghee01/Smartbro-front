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

export const InputDiv = styled.div`
  padding: 6px 10px;
  width: 40%;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  box-shadow: 0 0 2px 0.1rem rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 900px) {
    width: 70%;
    ::placeholder {
      font-size: 10px;
    }
  }
`;

export const UrlInput = styled.input`
  width: 100%;
  border: 0;
  outline: none;
`;

export const SendIcon = styled.img`
  cursor: pointer;
  width: 20px;
  height: 20px;
`;

export const TextBox = styled.div`
  width: 52%;
  padding: 40px 0px;
  @media screen and (max-width: 900px) {
    width: 70%;
  }
`;

export const TextList = styled.div`
  font-weight: 600;
  padding: 1px 0;
`;

export const LoadingText = styled.span`
  margin-top: 30px;
  opacity: 0.4;
`;
