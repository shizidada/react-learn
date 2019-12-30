import React from "react";
import { Avatar } from "antd";

import OperatorItem from "./OperatorItem";

import "./index.less";

const operators = [
  {
    name: "推荐",
    icon: "rocket"
  },
  {
    name: "发现",
    icon: "eye"
  },
  {
    name: "收藏",
    icon: "pushpin"
  },
  {
    name: "消息",
    icon: "message"
  }
];

function SliderOperator() {
  return (
    <div className="slider-operator-container">
      <div className="avatar">
        <Avatar size={64} icon="user" />
      </div>

      <div className="slider-operators">
        {operators.map((item) => (
          <OperatorItem name={item.name} icon={item.icon}/>
        ))}
      </div>
    </div>
  );
}

export default SliderOperator;
