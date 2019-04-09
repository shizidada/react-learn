import { observable, computed, action } from 'mobx';

class AppStore {
    // 被观察者
    // @observable name;

    @observable list;

    // @computed get getList() {
    //     return this.list.filter(v => v.id !== 1);
    // }

    // @computed get getList2() {
    //     return this.list;
    // }

    @action.bound
    addList(payload) {
        this.list.push(payload)
        console.log("addList payload =>", payload, this.list);
    }

    constructor() {
        // this.name = '江景';

        this.list = [{
            name: '香蕉',
            id: 0
        }, {
            name: '苹果',
            id: 1
        }, {
            name: '西瓜',
            id: 2
        }]
    }
}
const appStore = new AppStore();
// console.log(appStore);
export default appStore;