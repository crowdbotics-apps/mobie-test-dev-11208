import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen210908Navigator from '../features/BlankScreen210908/navigator';
import BlankScreen110907Navigator from '../features/BlankScreen110907/navigator';
import BlankScreen010906Navigator from '../features/BlankScreen010906/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen210908: { screen: BlankScreen210908Navigator },
BlankScreen110907: { screen: BlankScreen110907Navigator },
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
