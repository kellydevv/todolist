//전체화면 레이아웃
import "./style.css";
import styled from "styled-components";

//header,form, list들을 children으로 받기 때문에 props로 받아야쥐!!
function Layout(props) {
  return (
<StLayout>{props.children}</StLayout>
  );
}

export default Layout;

const StLayout = styled.div`
      max-width: 1200px;
      min-width: 800px;
      margin: 0 auto;
`;

