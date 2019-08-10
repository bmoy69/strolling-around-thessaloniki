import { createStackNavigator } from 'react-navigation';

import MapScreen from '../screens/MapScreen';
import ShowTheMonumentScreen from '../screens/ShowTheMonumentScreen';
import MapSingleScreen from '../screens/MapSingleScreen';

const MapStack = createStackNavigator({
  Home: {
    screen: MapScreen,
  },
  ShowThisMonument:{
    screen: ShowTheMonumentScreen,
  },
  ShowSingleMap:{
    screen: MapSingleScreen,
  },
})

export default MapStack;
