import { observable } from "mobx";

class UserStore {
  @observable userInfo = {
    accountName: "jiangjing",
    avator: "https://github.com/shizidada"
  };
}
export default UserStore;
export { UserStore };
