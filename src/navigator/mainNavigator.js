import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen54089Navigator from '../features/BlankScreen54089/navigator';
import ArticleList54088Navigator from '../features/ArticleList54088/navigator';
import UserProfile54065Navigator from '../features/UserProfile54065/navigator';
import Maps54061Navigator from '../features/Maps54061/navigator';
import Add-Item54057Navigator from '../features/Add-Item54057/navigator';
import Maps54056Navigator from '../features/Maps54056/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
BlankScreen54089: { screen: BlankScreen54089Navigator },
ArticleList54088: { screen: ArticleList54088Navigator },
UserProfile54065: { screen: UserProfile54065Navigator },
Maps54061: { screen: Maps54061Navigator },
Add-Item54057: { screen: Add-Item54057Navigator },
Maps54056: { screen: Maps54056Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
