//마이투두리스트
import "./style.css";
import styled from "styled-components";

function Header() {
  return (
    <StContainer>
      <div>my Todo List</div>
      <div>React</div>
    </StContainer>
  );
}

export default Header;

const StContainer = styled.div`
  border: 1px solid #ddd;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
