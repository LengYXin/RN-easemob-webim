import { Platform } from 'react-native';
import { observable, action } from 'mobx';

export default class Store {
    @observable rootNavigator = null; // so we can nagigate from DRAWER
    @observable isAndroid = Platform.OS === 'android';
    @observable isIOS = Platform.OS === 'ios';
}
