import React from 'react';
import SignupLoginScreen from './screens/SignupLoginScreen';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'

export default function App() {
  return (
      <AppContainer/>
  );
}

const switchNavigator = createSwitchNavigator({
  SignupLogin:{screen: SignupLoginScreen},
  Drawer:{screen: AppDrawerNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);