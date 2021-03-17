/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {createDrawerNavigator} from '@react-navigation/drawer';
import {init, RematchDispatch, RematchRootState} from '@rematch/core';
import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import Navigation from './src/navigation/navigation';
import {contacts} from './src/redux/models';

export type RootModel = typeof models;

const models: RematchRootState<any> = {
  contacts,
};

export type Dispatch = RematchDispatch<RootModel>;

const store = init({
  models,
});

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
