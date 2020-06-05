import React, { useState, FunctionComponent } from "react";
import { Input, Button, Timeline, Row, Col, message, Form } from "antd";

import { TodoItemConfig } from "../../typings";

import "./index.less";

interface TodoItemProps {}

const TodoItem: FunctionComponent<TodoItemProps> = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoItemConfig[]>([]);

  // val: React.MouseEvent<HTMLButtonElement, MouseEvent>
  const addTodoHandle = () => {
    if (inputValue === "") {
      message.info("Please input value ...");
      return;
    }
    const lists = todoList.concat();
    lists.push({
      title: inputValue,
      time: Date.now(),
    });
    setTodoList(lists);
    setInputValue("");
  };

  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <div className="todo-container">
      <Form.Item>
        <Row>
          <Col span={10}>
            <Input type="text" value={inputValue} onChange={val => inputChange(val)} />
          </Col>
          <Col span={2}>
            <Button onClick={() => addTodoHandle()}>添加</Button>
          </Col>
        </Row>
      </Form.Item>
      <Form.Item>
        <Timeline>
          {todoList.map((item: TodoItemConfig, index: number) => {
            return (
              <Timeline.Item key={index}>
                <p>title : {item.title}</p>
                <p>time :{item.time}</p>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </Form.Item>
    </div>
  );
};
export default TodoItem;
