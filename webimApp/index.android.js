// import { AppRegistry } from 'react-native';
import { Navigation } from 'react-native-navigation';
// import App from './App';
import { registerScreens } from './src/screens';
// AppRegistry.registerComponent('webimApp', () => App);
registerScreens(); // this is where you register all of your app's screens
Navigation.startTabBasedApp({
    tabs: [
      {
        label: 'One',
        screen: 'example.FirstTabScreen', // this is a registered name for a screen
        icon: require('./img/one.png'),
        selectedIcon: require('./img/one_selected.png'), // iOS only
        title: 'Screen One'
      },
      {
        label: 'Two',
        screen: 'example.SecondTabScreen',
        icon: require('./img/one.png'),
        selectedIcon: require('./img/one_selected.png'), // iOS only
        title: 'Screen Two'
      }
    ]
  });