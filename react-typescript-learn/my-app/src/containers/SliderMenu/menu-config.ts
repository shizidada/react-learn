import { SliderMenuConfig } from "../../typings";

export const menus: SliderMenuConfig[] = [
  { type: "book", activeKey: "home", name: "首页", path: "/" },
  { type: "user", activeKey: "login", name: "Login", path: "/login", closable: true },
  {
    type: "laptop",
    activeKey: "options",
    name: "Options",
    childs: [
      {
        type: "",
        activeKey: "option1",
        name: "option1",
        path: "/option1",
        closable: true,
      },
      {
        type: "",
        activeKey: "option2",
        name: "option2",
        path: "/option2",
        closable: true,
      },
      {
        type: "",
        activeKey: "option3",
        name: "option3",
        path: "/option3",
        closable: true,
      },
      {
        type: "",
        activeKey: "option4",
        name: "option4",
        path: "/option4",
        closable: true,
      },
      {
        type: "",
        activeKey: "option5",
        name: "option5",
        path: "/option5",
        closable: true,
      },
      {
        type: "",
        activeKey: "option6",
        name: "option6",
        path: "/option6",
        closable: true,
      },
      {
        type: "",
        activeKey: "option7",
        name: "option7",
        path: "/option7",
      },
      {
        type: "",
        activeKey: "option8",
        name: "option8",
        path: "/option8",
      },
      {
        type: "",
        activeKey: "option9",
        name: "option9",
        path: "/option9",
      },
      {
        type: "",
        activeKey: "option10",
        name: "option10",
        path: "/option10",
      },
      {
        type: "",
        activeKey: "option11",
        name: "option11",
        path: "/option11",
      },
    ],
  },
];
