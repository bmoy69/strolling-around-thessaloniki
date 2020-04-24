import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation';
import './constants/Language.js';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
          <RootNavigation />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/menubackground.jpg'),
        require('./assets/flags/greek.png'),
        require('./assets/flags/english.png'),
        require('./assets/monuments/1/monument.jpg'),
        require('./assets/monuments/2/monument.jpg'),
        require('./assets/monuments/3/monument.jpg'),
        require('./assets/monuments/4/monument.jpg'),
        require('./assets/monuments/5/monument.jpg'),
        require('./assets/monuments/5/monument-more.jpg'),
        require('./assets/monuments/6/monument.jpg'),
        require('./assets/monuments/6/monument-more.jpg'),
        require('./assets/monuments/7/monument.jpg'),
        require('./assets/monuments/8/monument.jpg'),
        require('./assets/monuments/9/monument.jpg'),
        require('./assets/monuments/10/monument.jpg'),
        require('./assets/monuments/10/monument-more.jpg'),
        require('./assets/monuments/11/monument.jpg'),
        require('./assets/monuments/12/monument.jpg'),
        require('./assets/monuments/13/monument.jpg'),
        require('./assets/monuments/14/monument.jpg'),
        require('./assets/monuments/15/monument.jpg'),
        require('./assets/monuments/16/monument.jpg'),
        require('./assets/monuments/17/monument.jpg'),
        require('./assets/monuments/18/monument.jpg'),
        require('./assets/monuments/19/monument.jpg'),
        require('./assets/monuments/20/monument.jpg'),
        require('./assets/monuments/21/monument.jpg'),
        require('./assets/monuments/22/monument.jpg'),
        require('./assets/monuments/23/monument.jpg'),
        require('./assets/monuments/24/monument.jpg'),
        require('./assets/monuments/25/monument.jpg'),
        require('./assets/monuments/26/monument.jpg'),
        require('./assets/monuments/27/monument.jpg'),
        require('./assets/monuments/28/monument.jpg'),
        require('./assets/monuments/29/monument.jpg'),
        require('./assets/monuments/30/monument.jpg'),
        require('./assets/monuments/31/monument.jpg'),
        require('./assets/monuments/32/monument.jpg'),
        require('./assets/monuments/33/monument.jpg'),
        require('./assets/monuments/34/monument.jpg'),
        require('./assets/monuments/35/monument.jpg'),
        require('./assets/monuments/36/monument.jpg'),
        require('./assets/monuments/37/monument.jpg'),
        require('./assets/monuments/38/monument.jpg'),
        require('./assets/monuments/39/monument.jpg'),
        require('./assets/monuments/40/monument.jpg'),
        require('./assets/monuments/41/monument.jpg'),
        require('./assets/monuments/42/monument.jpg'),
        require('./assets/monuments/43/monument.jpg'),
        require('./assets/monuments/44/monument.jpg'),
        require('./assets/monuments/45/monument.jpg'),
        require('./assets/monuments/46/monument.jpg'),
        require('./assets/monuments/47/monument.jpg'),
        require('./assets/monuments/48/monument.jpg'),
        require('./assets/monuments/49/monument.jpg'),
        require('./assets/monuments/50/monument.jpg'),
        require('./assets/monuments/51/monument.jpg'),
        require('./assets/monuments/52/monument.jpg'),
        require('./assets/monuments/53/monument.jpg'),
        require('./assets/monuments/54/monument.jpg'),
        require('./assets/monuments/55/monument.jpg'),
        require('./assets/monuments/56/monument.jpg'),
        require('./assets/sounds/sound1.mp3'),
        require('./assets/sounds/sound2.mp3'),
        require('./assets/sounds/sound3.mp3'),
        require('./assets/sounds/sound4.mp3'),
        require('./assets/sounds/sound5.mp3'),
        require('./assets/sounds/sound6.mp3'),
        require('./assets/sounds/sound7.mp3'),
        require('./assets/sounds/sound8.mp3'),
        require('./assets/sounds/sound9.mp3'),
        require('./assets/sounds/sound10.mp3'),
        require('./assets/sounds/sound11.mp3'),
        require('./assets/sounds/sound12.mp3'),
        require('./assets/sounds/sound13.mp3'),
        require('./assets/sounds/sound14.mp3'),
        require('./assets/sounds/sound15.mp3'),
        require('./assets/sounds/sound16.mp3'),
        require('./assets/sounds/sound17.mp3'),
        require('./assets/sounds/sound18.mp3'),
        require('./assets/sounds/sound19.mp3'),
        require('./assets/sounds/sound20.mp3'),
        require('./assets/sounds/sound21.mp3'),
        require('./assets/sounds/sound22.mp3'),
        require('./assets/sounds/sound23.mp3'),
        require('./assets/sounds/sound24.mp3'),
        require('./assets/sounds/sound25.mp3'),
        require('./assets/sounds/sound26.mp3'),
        require('./assets/sounds/sound27.mp3'),
        require('./assets/sounds/sound28.mp3'),
        require('./assets/sounds/sound29.mp3'),
        require('./assets/sounds/sound30.mp3'),
        require('./assets/sounds/sound31.mp3'),
        require('./assets/sounds/sound32.mp3'),
        require('./assets/sounds/sound33.mp3'),
        require('./assets/sounds/sound34.mp3'),
        require('./assets/sounds/sound35.mp3'),
        require('./assets/sounds/sound36.mp3'),
        require('./assets/sounds/sound37.mp3'),
        require('./assets/sounds/sound38.mp3'),
        require('./assets/sounds/sound39.mp3'),
        require('./assets/sounds/sound40.mp3'),
        require('./assets/sounds/sound41.mp3'),
        require('./assets/sounds/sound42.mp3'),
        require('./assets/sounds/sound43.mp3'),
        require('./assets/sounds/sound44.mp3'),
        require('./assets/sounds/sound45.mp3'),
        require('./assets/sounds/sound46.mp3'),
        require('./assets/sounds/sound47.mp3'),
        require('./assets/sounds/sound48.mp3'),
        require('./assets/sounds/sound49.mp3'),
        require('./assets/sounds/sound50.mp3'),
        require('./assets/sounds/sound51.mp3'),
        require('./assets/sounds/sound52.mp3'),
        require('./assets/sounds/sound53.mp3'),
        require('./assets/sounds/sound54.mp3'),
        require('./assets/sounds/sound55.mp3'),
        require('./assets/sounds/sound56.mp3'),
        require('./assets/sounds/sound57.mp3'),
        require('./assets/sounds/sound1en.mp3'),
        require('./assets/sounds/sound2en.mp3'),
        require('./assets/sounds/sound3en.mp3'),
        require('./assets/sounds/sound4en.mp3'),
        require('./assets/sounds/sound5en.mp3'),
        require('./assets/sounds/sound6en.mp3'),
        require('./assets/sounds/sound7en.mp3'),
        require('./assets/sounds/sound8en.mp3'),
        require('./assets/sounds/sound9en.mp3'),
        require('./assets/sounds/sound10en.mp3'),
        require('./assets/sounds/sound11en.mp3'),
        require('./assets/sounds/sound12en.mp3'),
        require('./assets/sounds/sound13en.mp3'),
        require('./assets/sounds/sound14en.mp3'),
        require('./assets/sounds/sound15en.mp3'),
        require('./assets/sounds/sound16en.mp3'),
        require('./assets/sounds/sound17en.mp3'),
        require('./assets/sounds/sound18en.mp3'),
        require('./assets/sounds/sound19en.mp3'),
        require('./assets/sounds/sound20en.mp3'),
        require('./assets/sounds/sound21en.mp3'),
        require('./assets/sounds/sound22en.mp3'),
        require('./assets/sounds/sound23en.mp3'),
        require('./assets/sounds/sound24en.mp3'),
        require('./assets/sounds/sound25en.mp3'),
        require('./assets/sounds/sound26en.mp3'),
        require('./assets/sounds/sound27en.mp3'),
        require('./assets/sounds/sound28en.mp3'),
        require('./assets/sounds/sound29en.mp3'),
        require('./assets/sounds/sound30en.mp3'),
        require('./assets/sounds/sound31en.mp3'),
        require('./assets/sounds/sound32en.mp3'),
        require('./assets/sounds/sound33en.mp3'),
        require('./assets/sounds/sound34en.mp3'),
        require('./assets/sounds/sound35en.mp3'),
        require('./assets/sounds/sound36en.mp3'),
        require('./assets/sounds/sound37en.mp3'),
        require('./assets/sounds/sound38en.mp3'),
        require('./assets/sounds/sound39en.mp3'),
        require('./assets/sounds/sound40en.mp3'),
        require('./assets/sounds/sound41en.mp3'),
        require('./assets/sounds/sound42en.mp3'),
        require('./assets/sounds/sound43en.mp3'),
        require('./assets/sounds/sound44en.mp3'),
        require('./assets/sounds/sound45en.mp3'),
        require('./assets/sounds/sound46en.mp3'),
        require('./assets/sounds/sound47en.mp3'),
        require('./assets/sounds/sound48en.mp3'),
        require('./assets/sounds/sound49en.mp3'),
        require('./assets/sounds/sound50en.mp3'),
        require('./assets/sounds/sound51en.mp3'),
        require('./assets/sounds/sound52en.mp3'),
        require('./assets/sounds/sound53en.mp3'),
        require('./assets/sounds/sound54en.mp3'),
        require('./assets/sounds/sound55en.mp3'),
        require('./assets/sounds/sound56en.mp3'),
        require('./assets/sounds/sound57en.mp3'),
        require('./assets/sounds/sound5More.mp3'),
        require('./assets/sounds/sound6More.mp3'),
        require('./assets/sounds/sound10More.mp3'),
        require('./assets/sounds/sound5enMore.mp3'),
        require('./assets/sounds/sound6enMore.mp3'),
        require('./assets/sounds/sound10enMore.mp3'),                
      ]),
      Font.loadAsync({
        'DidactGothic': require('./assets/fonts/DidactGothic-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
