import React from 'react';
import { createAppContainer, createDrawerNavigator } from 'react-navigation';
import SideMenu from '../components/SideMenu';

import HomeStack from '../navigation/HomeStack';
import SearchStack from '../navigation/SearchStack';
import MonumentsStack from '../navigation/MonumentsStack';
import MapStack from '../navigation/MapStack';
import MaintenanceStack from '../navigation/MaintenanceStack';

import AppFont from "../constants/AppFont.js";

const RootNavigator = createDrawerNavigator(
  {
  Homepage: {
    screen: HomeStack,
  },

  Searching: {
    screen: SearchStack,
  },

  Monuments: {
    screen: MonumentsStack,
  },

  Map: {
    screen: MapStack,
    },
  Maintenance: {
    screen: MaintenanceStack,
    },
  },
  {
    contentComponent: SideMenu,
    drawerWidth: 300,
    contentOptions: {
     style: {
      backgroundColor: 'red',
      flex: 1
     }
    },
  },
);

const RootNavigation = createAppContainer(RootNavigator);

export default RootNavigation;