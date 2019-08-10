import { createStackNavigator } from 'react-navigation';

import MuseumsScreen from '../screens/MuseumsScreen';
import SculpturesScreen from '../screens/SculpturesScreen';
import ChurchesScreen from '../screens/ChurchesScreen';
import BuildingsScreen from '../screens/BuildingsScreen';
import LandmarksScreen from '../screens/LandmarksScreen';
import UnescoScreen from '../screens/UnescoScreen';
import ShowTheMonumentScreen from '../screens/ShowTheMonumentScreen';
import ShowMonumentMoreScreen from '../screens/ShowMonumentMoreScreen';
import MapSingleScreen from '../screens/MapSingleScreen';

const MonumentsStack = createStackNavigator({
  ShowMuseums: {
    screen: MuseumsScreen,
  },  
  ShowChurches: {
    screen: ChurchesScreen,
  },
  ShowSculptures: {
    screen: SculpturesScreen,
  },
  ShowLandmarks: {
    screen: LandmarksScreen,
  },
  ShowBuildings: {
    screen: BuildingsScreen,
  },
  ShowUnesco: {
    screen: UnescoScreen,
  },

  ShowThisMonument:{
    screen: ShowTheMonumentScreen,
  },
  ShowMonumentMore:{
    screen: ShowMonumentMoreScreen,
  },
  ShowSingleMap:{
    screen: MapSingleScreen,
  },
})

export default MonumentsStack;
