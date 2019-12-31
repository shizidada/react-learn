import React from "react";
import { Avatar } from "antd";

import OperatorItem from "./OperatorItem";

import "./index.less";

const operators = [
  {
    name: "消息",
    icon: "message"
  },
  {
    name: "DING",
    icon: "pushpin"
  },
  {
    name: "工作",
    icon: "rocket"
  },
  {
    name: "通讯录",
    icon: "idcard"
  }
];

function SliderOperator() {
  return (
    <div className="slider-operator-container">
      <div className="avatar">
        <Avatar size={56} icon="user" />
      </div>

      <div className="slider-operators">
        {operators.map((item, index) => (
          <OperatorItem key={index} name={item.name} icon={item.icon} />
        ))}
      </div>
    </div>
  );
}

export default SliderOperator;
