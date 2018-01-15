// @flow

import { create } from 'mobx-persist';
import { AsyncStorage } from 'react-native';
import AppStore from './app';
// const hydrate = create({ storage: AsyncStorage });

// const stores = {

// }
// // you can hydrate stores here with mobx-persist
// // hydrate('Account', stores.Account);
// export default {
//   ...stores
// };
class Stores {
    constructor() {
        this.init();
    }
    AppStore=new AppStore();
    hydrate = create({ storage: AsyncStorage });
    init() {
        // this.hydrate('Account', stores.Account);
    }

};
export default new Stores();