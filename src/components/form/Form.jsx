//투두리스트 입력창
import "../form/style.css";
import React, { useState } from "react";

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
    <form className="add-form" onSubmit={onSubmitHandler}>
      <div className="input-group">
        <label className="form-label">제목</label>
        <input
          className="add-input"
          type="text"
          name="title"
          value={todo.title}
          onChange={onChangeHandler}
        />
        <label className="form-label">내용</label>
        <input
          className="add-input"
          type="text"
          name="body"
          value={todo.body}
          onChange={onChangeHandler}
        />
        <button className="add-button">
          추가하기
        </button>
      </div>
    </form>
  );
}

export default Form;
