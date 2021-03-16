import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/home';
import Contacts from '../screens/contacts';

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Contacts" component={Contacts} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
