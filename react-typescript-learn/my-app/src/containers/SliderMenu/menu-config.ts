export interface SliderMenuConfig {
  type: string;
  activeKey: string;
  name: string;
  path?: string;
  childs?: SliderMenuConfig[];
}

export const menus: SliderMenuConfig[] = [
  { type: "book", activeKey: "home", name: "首页", path: "/" },
  { type: "user", activeKey: "login", name: "Login", path: "/login" },
  { type: "skin", activeKey: "skin", name: "Skin", path: "/skin" },
  { type: "setting", activeKey: "setting", name: "Setting", path: "/setting" },
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
      },
      {
        type: "",
        activeKey: "option2",
        name: "option2",
        path: "/option1",
      },
    ],
  },
];

// <Menu.Item key="1" onClick={this.menuItemClick}>
//   <Icon type="book" />
//   <span className="nav-text">Home</span>
//   <Link to="/">Home</Link>
// </Menu.Item>
// <Menu.Item key="2">
//   <Icon type="user" />
//   <span className="nav-text">Login</span>
//   <Link to="/login">Login</Link>
// </Menu.Item>
// <Menu.Item key="3">
//   <Icon type="skin" />
//   <span className="nav-text">Skin</span>
// </Menu.Item>
// <Menu.Item key="4">
//   <Icon type="setting" />
//   <span className="nav-text">Setting</span>
// </Menu.Item>
