/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/screens/home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Contact from './src/screens/contacts';
import {init} from '@rematch/core';
import {contacts} from './src/redux/models';
import {Provider} from 'react-redux';

const models = {
  contacts,
};

const store = init({
  models,
});

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Contact" component={Contact} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
