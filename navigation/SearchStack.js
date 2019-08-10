import { createStackNavigator } from 'react-navigation';

import SearchScreen from '../screens/SearchScreen';
import ShowTheMonumentScreen from '../screens/ShowTheMonumentScreen';
import ShowMonumentMoreScreen from '../screens/ShowMonumentMoreScreen';
import MapSingleScreen from '../screens/MapSingleScreen';

const SearchStack = createStackNavigator({
  SearchHome: {
    screen: SearchScreen,
  },
  SearchShowThisMonument:{
    screen: ShowTheMonumentScreen,
  },
  SearchShowMonumentMore:{
    screen: ShowMonumentMoreScreen,
  },
  SearchShowSingleMap:{
    screen: MapSingleScreen,
  },
})

export default SearchStack;
