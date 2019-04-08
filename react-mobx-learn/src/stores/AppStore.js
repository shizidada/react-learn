import { observable, computed, action } from 'mobx';

class AppStore {
    // 被观察者
    @observable name;

    @observable list;

    @computed get getList() {
        return this.list.filter(v => v.id !== 1)
    }

    @action addList = obj => this.list.push(obj)

    constructor() {
        this.name = '江景';

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
export default appStore;