import React, { useState } from "react";
import { Icon } from "antd";

function OperatorItem({ name, icon }) {
  const [isHover, setHover] = useState(false);

  const handleMouseEnter = e => {
    setHover(true);
  };

  return (
    <div className="operator-item" onMouseEnter={handleMouseEnter}>
      <Icon type={icon} style={{ fontSize: 28, color: '#fff' }} />
      <span>{name}</span>
    </div>
  );
}

export default OperatorItem;
