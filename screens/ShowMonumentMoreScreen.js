import React from 'react';
import { Linking, StyleSheet, View, TouchableOpacity, Text, Image, FlatList, Modal, TouchableHighlight, ScrollView } from 'react-native';
import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import HTML from 'react-native-render-html';
import { Audio } from 'expo-av';

import info from '../constants/info.js';
import imagesmore from '../constants/imagesmore.js';
import AppFont from "../constants/AppFont.js";
import commonHeaderTitleStyle from "../constants/HeaderTitleStyle.js";

export default class MonumentsScreen extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      mySoundObject: null,
      playIcon: "play-circle-outline",
      playing: false,
    };
  }

  async componentDidMount() {
    if (((language==='gr' && info[this.props.navigation.state.params.monumentKey].gr.soundMore!=null) || (language==='en' && info[this.props.navigation.state.params.monumentKey].en.soundMore!=null))){
      const soundObject = new Expo.Audio.Sound();
      try {
        await soundObject.loadAsync(language==='gr'?info[this.props.navigation.state.params.monumentKey].gr.soundMore:info[this.props.navigation.state.params.monumentKey].en.soundMore);
      } catch (error) {
        // An error occurred!
        console.log('Sound error will mount')
      }

      this.setState({
        mySoundObject: soundObject,
      });
    }
  }

  componentWillUnmount() {
    if (this.state.playing){
      try {
        this.state.mySoundObject.stopAsync()
      } catch (error) {
        console.log('Sound error stop')
      }
      this.setState({
        playing: true,
      });
    }
  }

  static navigationOptions = ({navigation}) => {
      return {
        title: language==='gr'?info[navigation.state.params.monumentKey].gr.historytitle:info[navigation.state.params.monumentKey].en.historytitle,
        headerTitleStyle: commonHeaderTitleStyle,
      };
  };

  PlayTheSound(){
    if (!this.state.playing){
      try {
        this.state.mySoundObject.playAsync();
      } catch (error) {
        console.log('Sound error play')
      }
      this.setState({
        playIcon: "play-circle-filled",
        playing: true,
      });
    } else {
      this.state.mySoundObject.stopAsync();
      this.setState({
        playIcon: "play-circle-outline",
        playing: false,
      });
    }
  }

  render() {

  const mKey = this.props.navigation.state.params.monumentKey;

  return (
      <View style={styles.container}>
        <ScrollView>
            <View style={styles.upperSpace}>
              <Image
                style={styles.bigImage}
                source={imagesmore[mKey]}
              />
            </View>

            {((language==='gr' && info[mKey].gr.soundMore!=null) || (language==='en' && info[mKey].en.soundMore!=null)) &&
            <View style={{position:'absolute', top: 20, left: 3}}>
              <MaterialIcons name={this.state.playIcon} size={50} color="#62c8f7"
              onPress = {() =>this.PlayTheSound()}/>
            </View>}

            <View style={{padding:10}} >
              <HTML baseFontStyle={{ fontFamily: AppFont, fontSize: 16, textAlign: 'justify'}} html={language==='gr'?info[mKey].gr.history:info[mKey].en.history} />
              
              {info[mKey].gr.sourceTitleMore!=null && // if there is source title
                <View>
                  <Text style={styles.sourceMain}>
                    {language==='gr'?'Πηγές':'Sources'}
                  </Text>
                  {info[mKey].sourceLinkMore !=null && // if there is a scource link
                  <TouchableOpacity
                    onPress = {() => Linking.openURL(info[mKey].sourceLinkMore).catch(err => console.error('An error occurred', err))}
                    >
                    <Text style={styles.sourceTitle}>
                        {language==='gr'?info[mKey].gr.sourceTitleMore:info[mKey].en.sourceTitleMore}
                      </Text>
                      <Text style={styles.sourceLink}>
                        {info[mKey].sourceLinkMore}
                      </Text>
                  </TouchableOpacity>}
                  {info[mKey].sourceLinkMore == null && // if there is no source link
                  <View>
                    <Text style={styles.sourceTitle}>
                      {language==='gr'?info[mKey].gr.sourceTitleMore:info[mKey].en.sourceTitleMore}
                    </Text>
                    <Text style={styles.sourceLink}>
                      {info[mKey].sourceLinkMore}
                    </Text>
                  </View>}
                </View>}

            </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container :{
      justifyContent: 'center',
      flex:1,
  },
  upperSpace: {
    alignItems: 'center',
  },
  bigImage: {
    resizeMode: 'contain',
    borderRadius: 5,
    marginBottom:10,
    marginTop:10,
  },
  monumentInfo: {
    paddingTop:5,
    paddingBottom:10,
    backgroundColor: 'lightgrey',
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor: 'grey',
  },
  other: {
    fontFamily: AppFont,
    fontSize: 18,
    paddingTop:5,
    paddingLeft:8,
    paddingRight:8,
  },
  sourceMain: {
    fontFamily: AppFont,
    fontSize: 16,
    paddingLeft:10,
    paddingTop:0,
    fontStyle: 'italic',
  },
  sourceTitle: {
    fontFamily: AppFont,
    fontSize: 16,
    paddingLeft:10,
    paddingTop:5,
    fontWeight: 'bold',
  },
  sourceLink: {
    fontFamily: AppFont,
    fontSize: 16,
    paddingLeft:10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  HTMLdescription: {
    padding:20,
  },
  description: {
    fontFamily: AppFont,
    fontSize: 16,
    padding:20,
    textAlign: 'justify',
  },
  description2: {
    //flex:1,
    height: 600,
  },
});
