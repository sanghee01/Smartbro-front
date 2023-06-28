import styled from "styled-components";

export const Section = styled.section`
  height: 100vh;
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

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: 50px;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 10px;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
