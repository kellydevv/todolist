//투두
import styled from "styled-components";
import React from "react";

function Todo({ todo, onEditHandler, onDeleteHandler }) {
  return (
    <StTodoContainer>
      <div>
        <h2>{todo.title}</h2>
        <div>{todo.body}</div>
      </div>
      <StButtonSet>
        <StTodoDeleteButton onClick={() => onDeleteHandler(todo.id)}>
          {" "}
          삭제하기
        </StTodoDeleteButton>
        <StTodoCompleteButton onClick={() => onEditHandler(todo.id)}>
          {todo.isDone ? "취소" : "완료"}
        </StTodoCompleteButton>
      </StButtonSet>
    </StTodoContainer>
  );
}

export default Todo;

const StTodoContainer = styled.div`
  width: 270px;
  /* height: 150px; */
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px 24px;
`;

const StButtonSet = styled.button`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

const StButton = styled.button`
  border: none;
  width: 50%;
  height: 40px;
  border-radius: 8px;
  cursor: pointer;
`;

const StTodoDeleteButton = styled.button`
  border: 2px solid green;
  background-color: #fff;
`;

const StTodoCompleteButton = styled.button`
  border: 2px solid green;
  background-color: #fff;
`;
