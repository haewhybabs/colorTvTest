import { createSwitchNavigator } from 'react-navigation';
import { drawerNavigator } from './drawerNavigator';

export const switchNavigator = createSwitchNavigator(
  {
    App: drawerNavigator,
  },
  {
    initialRouteName: 'App'
  }
);
