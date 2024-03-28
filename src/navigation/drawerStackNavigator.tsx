import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Profile from '../screens/profile';
import { SideMenu } from '../components/generic';
import ForceUpdateScreen from '../screens/appUpdateComponent';
import { NAV_FORCE_UPDATE } from './constants';

const Drawer = createDrawerNavigator();

const DrawerNavigationStack = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <SideMenu {...props} />}>
      <Drawer.Screen
        name="FirstPage"
        component={Profile}
        options={{
          drawerLabel: 'First page Option',
        }}
      />
      <Drawer.Screen
        name={NAV_FORCE_UPDATE}
        component={ForceUpdateScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigationStack;
