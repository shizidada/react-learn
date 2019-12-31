import React, { useState } from "react";

import { Icon } from "antd";

function ActionBarItem({ type }) {
  const [isHover, setHover] = useState(false);
  const handleMouseEnter = e => {
    e.preventDefault();
    setHover(true);
  };
  const handleMouseLeave = e => {
    e.preventDefault();
    setHover(false);
  };

  const styles = { color: isHover ? "#0089ff" : "#ccc" };

  return (
    <Icon
      type={type}
      style={styles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  );
}

export default ActionBarItem;
