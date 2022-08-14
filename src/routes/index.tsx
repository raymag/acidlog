import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Write from '../pages/Write';
import Read from '../pages/Read';

const {Navigator, Screen} = createNativeStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={Home} options={{headerShown: false}} />
      <Screen name="Write" component={Write} options={{headerShown: false}} />
      <Screen name="Read" component={Read} options={{headerShown: false}} />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
