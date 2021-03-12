/**
 * Color Tv React Native App Test
 * https://github.com/haewhybabs/colorTvTest
 * Author : Ayobami Babalola
 */
 import React,{Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { switchNavigator } from './src/navigation/switchNavigator';

const AppNav = createAppContainer(switchNavigator);



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  render() {
    return (
      <AppNav />
    )
  }
}

export default App
