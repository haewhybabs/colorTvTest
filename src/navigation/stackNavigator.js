import { createStackNavigator } from "react-navigation-stack";
import { stackNavigatorConfig } from "../configs/navigationConfig";

import Home from "../components/Home";
import User from "../components/User";


export const AppStack = createStackNavigator(
  {
    Home: {
      screen: Home
    },
    User:{
        screen:User
    }
    
  },
  {
    ...stackNavigatorConfig,
    initialRouteName: "Home"
  }
);

