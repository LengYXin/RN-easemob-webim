
import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import stores from './stores';
import Provider from './utils/MobxRnnProvider';

registerScreens(stores, Provider); // this is where you register all of your app's screens
Navigation.startTabBasedApp({
    tabs: [
        {
            label: 'One',
            screen: 'example.FirstTabScreen', // this is a registered name for a screen
            icon: require('../img/one.png'),
            selectedIcon: require('../img/one_selected.png'), // iOS only
            title: '消息'
        },
        {
            label: 'Two',
            screen: 'example.SecondTabScreen',
            icon: require('../img/one.png'),
            selectedIcon: require('../img/one_selected.png'), // iOS only
            title: '联系人'
        }
    ],
    tabsStyle: { // optional, add this if you want to style the tab bar beyond the defaults
        tabBarButtonColor: '#ffff00', // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
        tabBarSelectedButtonColor: '#ff9900', // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
        tabBarBackgroundColor: '#551A8B', // optional, change the background color of the tab bar
        initialTabIndex: 1, // optional, the default selected bottom tab. Default: 0. On Android, add this to appStyle
      },
      appStyle: {
        orientation: 'portrait', // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
        bottomTabBadgeTextColor: 'red', // Optional, change badge text color. Android only
        bottomTabBadgeBackgroundColor: 'green', // Optional, change badge background color. Android only
        // backButtonImage: require('./pathToImage.png') // Change the back button default arrow image with provided image. iOS only
        // hideBackButtonTitle: true/false // Hide back button title. Default is false. If `backButtonTitle` provided so it will take into account and the `backButtonTitle` value will show. iOS only
      },
      drawer: { // optional, add this if you want a side menu drawer in your app
        left: { // optional, define if you want a drawer from the left
          screen: 'example.FirstSideMenu', // unique ID registered with Navigation.registerScreen
        //   passProps: {}, // simple serializable object that will pass as props to all top screens (optional),
        //   fixedWidth: 500, // a fixed width you want your left drawer to have (optional)
        },
        // right: { // optional, define if you want a drawer from the right
        //   screen: 'example.SecondSideMenu', // unique ID registered with Navigation.registerScreen
        //   passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
        //   fixedWidth: 500, // a fixed width you want your right drawer to have (optional)
        // },
        style: { // ( iOS only )
          drawerShadow: true, // optional, add this if you want a side menu drawer shadow
          contentOverlayColor: 'rgba(0,0,0,0.25)', // optional, add this if you want a overlay color when drawer is open
        //   leftDrawerWidth: 50, // optional, add this if you want a define left drawer width (50=percent)
        //   rightDrawerWidth: 50, // optional, add this if you want a define right drawer width (50=percent)
          shouldStretchDrawer: true // optional, iOS only with 'MMDrawer' type, whether or not the panning gesture will “hard-stop” at the maximum width for a given drawer side, default : true
        },
        type: 'MMDrawer', // optional, iOS only, types: 'TheSideBar', 'MMDrawer' default: 'MMDrawer'
        animationType: 'door', //optional, iOS only, for MMDrawer: 'door', 'parallax', 'slide', 'slide-and-scale'
                                            // for TheSideBar: 'airbnb', 'facebook', 'luvocracy','wunder-list'
        disableOpenGesture: false // optional, can the drawer be opened with a swipe instead of button
      },
      passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
      animationType: 'fade' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
});