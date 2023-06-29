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

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;
export const ModalOverlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  position: relative;
  border-radius: 10px;
  width: 70%;
`;

export const ModalImg = styled.div`
  & > img {
    width: 90%;
    height: 90%;
    margin: auto;
  }
`;

export const ModalNextBtn = styled.img`
  width: 40px;
  height: 80px;
`;
