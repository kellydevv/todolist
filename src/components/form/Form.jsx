//투두리스트 입력창
import "../form/style.css";
import React, { useState } from "react";
import styled from "styled-components";

// id number 1,2가 initialState로 TodoList에 있으므로 새로 추가되는 todo는 id.number가 3부터 시작되어야 함
let number = 3;
function Form({ setTodos, todos }) {
  const initialState = { id: 0, title: "", body: "", isDone: false };

  const [todo, setTodo] = useState(initialState);
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    //trim()은 문자열 양 끝의 공백을 제거함.
    if (todo.titile.trim() === "" || todo.body.trim() === "") return;
    setTodos([...todos, { ...todo, id: number }]);
    setTodo(initialState);
    number++;
  };

  return (
    <StAddForm onSubmitHandler={onSubmitHandler} type="form">
      <StInputGroup>
        <StFormLabel>제목</StFormLabel>
        <StAddForm
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
        />
        <StFormLabel>내용</StFormLabel>
<StAddForm type="text"
          name="body"
          value={todo.body}
          onChange={onChangeHandler}/>
        <StAddButton>추가하기</StAddButton>
      </StInputGroup>
    </StAddForm>
  );
}

export default Form;

const StAddForm = styled.div`
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`;

const StInputGroup = styled.input`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StFormLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

const StAddInput = styled.input`
  height: 40px;
  width: 240px;
  border: none;
  border-radius: 12px;
  padding: 0 12px;
`;

const StAddButton = styled.button`
  border: none;
  height: 40px;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`;
