import React, { useState } from "react";
import * as pm from "../styles/MainStyles";
import go_help from "../assets/go_help.png";
import help1 from "../assets/help1.png";
import help2 from "../assets/help2.png";
import help3 from "../assets/help3.png";
import help_left from "../assets/help_left.png";
import help_right from "../assets/help_right.png";

const HelpModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgNum, setImgNum] = useState(0);

  const handleOpenHelp = () => {
    setIsOpen(true);
  };

  const handleCloseHelp = () => {
    setIsOpen(false);
  };

  const handleNumDown = () => {
    if (imgNum === 0) {
      setImgNum(2);
    } else {
      setImgNum((imgNum) => imgNum - 1);
    }
    console.log(imgNum);
  };

  const handleNumUp = () => {
    if (imgNum === 2) {
      setImgNum(0);
    } else {
      setImgNum((imgNum) => imgNum + 1);
    }
    console.log(imgNum);
  };

  return (
    <>
      <pm.HelpBox onClick={handleOpenHelp}>
        <span>Chat Gpt URL 생성방법을 모르시나요?</span>
        <img src={go_help} />
      </pm.HelpBox>
      {isOpen && (
        <pm.Modal>
          <pm.ModalOverlay onClick={handleCloseHelp}></pm.ModalOverlay>
          <pm.ModalContent>
            <pm.ModalNextBtn onClick={handleNumDown} src={help_left} />
            <pm.ModalImg>
              {imgNum === 0 && <img src={help1} />}
              {imgNum === 1 && <img src={help2} />}
              {imgNum === 2 && <img src={help3} />}
            </pm.ModalImg>
            <pm.ModalNextBtn onClick={handleNumUp} src={help_right} />
          </pm.ModalContent>
        </pm.Modal>
      )}
    </>
  );
};

export default HelpModal;
