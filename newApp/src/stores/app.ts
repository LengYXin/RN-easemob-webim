import { Platform } from 'react-native';
import { observable, action } from 'mobx';

export default class Store {
    @observable rootNavigator = null; // so we can nagigate from DRAWER
    @observable str = "哈哈哈哈 你好啊"; // so we can nagigate from DRAWER
    @observable isAndroid = Platform.OS === 'android';
    @observable isIOS = Platform.OS === 'ios';
    update(str) {
        if (this.str == str) {
            return this.str = "哈哈哈哈 你好啊";
        }
        this.str = str;
    }
}
