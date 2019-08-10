import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import LanguageScreen from '../screens/LanguageScreen';

const HomeStack = createStackNavigator({
  Homepage: {
    screen: HomeScreen,
  },
  ChangeLanguage:{
    screen: LanguageScreen,
  },
},
{
  mode: "modal",
  headerMode: "none",
},
);

export default HomeStack;
