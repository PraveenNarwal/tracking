import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screeens/HomeScreen';
const RootNavigator = props => {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
};

export default RootNavigator;
