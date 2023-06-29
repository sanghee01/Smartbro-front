import logo from "../assets/logo.png";
import * as s from "../styles/SendStyles";
import * as st from "../styles/TitleStyles";

const Title = () => {
  return (
    <st.Header>
      <st.Title>이 해커톤에 사용해줘</st.Title>
      <st.Logo src={logo} />
    </st.Header>
  );
};

export default Title;
