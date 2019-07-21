import * as React from "react";
import { Button } from "antd";

const HookItem: React.FC = () => {
  const [hide, setHide] = React.useState(false);
  // console.log("HookItem :: ", hide);
  return (
    <Button
      onClick={() => {
        setHide(!hide);
      }}
    >
      {HookItem.name}
    </Button>
  );
};

export default HookItem;
