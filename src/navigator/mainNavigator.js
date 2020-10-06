import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen211783Navigator from '../features/BlankScreen211783/navigator';
import BlankScreen010909Navigator from '../features/BlankScreen010909/navigator';
import BlankScreen210908Navigator from '../features/BlankScreen210908/navigator';
import BlankScreen010906Navigator from '../features/BlankScreen010906/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen211783: { screen: BlankScreen211783Navigator },
BlankScreen010909: { screen: BlankScreen010909Navigator },
BlankScreen210908: { screen: BlankScreen210908Navigator },
BlankScreen010906: { screen: BlankScreen010906Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
