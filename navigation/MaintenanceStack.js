import { createStackNavigator } from 'react-navigation';

import MaintenanceScreen from '../screens/MaintenanceScreen';

const MaintenanceStack = createStackNavigator({
  Home: {
    screen: MaintenanceScreen,
  },
})

export default MaintenanceStack;
