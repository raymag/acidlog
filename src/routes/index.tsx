import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Write from '../pages/Write';
import Read from '../pages/Read';
import Settings from '../pages/Settings';
import Lock from '../pages/Lock';
import FirstIn from '../pages/FirstIn';

const {Navigator, Screen} = createNativeStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Navigator initialRouteName="Lock">
      <Screen name="Home" component={Home} options={{headerShown: false}} />
      <Screen name="Write" component={Write} options={{headerShown: false}} />
      <Screen name="Read" component={Read} options={{headerShown: false}} />
      <Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <Screen name="Lock" component={Lock} options={{headerShown: false}} />
      <Screen
        name="FirstIn"
        component={FirstIn}
        options={{headerShown: false}}
      />
    </Navigator>
  </NavigationContainer>
);

export default Routes;
