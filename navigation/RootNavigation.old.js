import { Notifications } from 'expo';
import React from 'react';
import { createDrawerNavigator } from 'react-navigation';
import SideMenu from '../components/SideMenu';

import HomeStack from '../navigation/HomeStack';
import SearchStack from '../navigation/SearchStack';
import MonumentsStack from '../navigation/MonumentsStack';
import MapStack from '../navigation/MapStack';
import MaintenanceStack from '../navigation/MaintenanceStack';

import AppFont from "../constants/AppFont.js";
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

const RootNavigation = createDrawerNavigator(
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

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    // return <RootNavigation />;
    return(
          <RootNavigation
            style={{backgroundColor: '#c3abd3'}}
          />
    );
  }


  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(this._handleNotification);
  }

  _handleNotification = ({ origin, data }) => {
    console.log(`Push notification ${origin} with data: ${JSON.stringify(data)}`);
  };
}
