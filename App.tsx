import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './src/global/theme';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/pages/Home';

const {Navigator, Screen} = createNativeStackNavigator();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Navigator initialRouteName="Home">
          <Screen name="Home" component={Home} options={{headerShown: false}} />
        </Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
