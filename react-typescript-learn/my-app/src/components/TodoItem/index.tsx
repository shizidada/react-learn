import React, { useState, FunctionComponent } from "react";
import { Input, Button, Timeline } from "antd";

import "./index.less"

interface TodoItemProps {}

const TodoItem: FunctionComponent<TodoItemProps> = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [todoList, setTodoList] = useState<string[]>([]);

  // val: React.MouseEvent<HTMLButtonElement, MouseEvent>
  const addTodoHandle = () => {
    if (inputValue === "") return;
    const lists = todoList.concat();
    lists.push(inputValue);
    setTodoList(lists);
    setInputValue("");
  };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <div className="todo-container">
      <Input type="text" value={inputValue} onChange={val => inputChange(val)} />
      <Button onClick={() => addTodoHandle()}>添加</Button>
      <Timeline>
        {todoList.map((item: string, index: number) => {
          return <Timeline.Item key={index}>{item}</Timeline.Item>;
        })}
      </Timeline>
    </div>
  );
};
export default TodoItem;
