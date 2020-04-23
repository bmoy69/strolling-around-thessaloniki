import React from 'react';
import { Linking, StyleSheet, View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import HTML from 'react-native-render-html';
import call from 'react-native-phone-call';
import { Audio } from 'expo-av';
import { Platform } from '@unimodules/core';

import BmoyButton from '../components/BmoyButton.js';
import PhoneButton from '../components/PhoneButton.js';
import info from '../constants/info.js';
import images from '../constants/images.js';
import AppFont from "../constants/AppFont.js";
import commonHeaderTitleStyle from "../constants/HeaderTitleStyle.js";

export default class MonumentsScreen extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      mySoundObject: null,
      playIcon: "play-circle-outline",
      mapIcon: "map-marker-circle",
      directionsIcon: "map-marker-distance",
      playing: false,
    };
  }

  async componentDidMount() {
    if (((language==='gr' && info[this.props.navigation.state.params.MonumentKey].gr.sound!=null) || (language==='en' && info[this.props.navigation.state.params.MonumentKey].en.sound!=null))){
      const soundObject = new Audio.Sound();
      try {
        await soundObject.loadAsync(language==='gr'?info[this.props.navigation.state.params.MonumentKey].gr.sound:info[this.props.navigation.state.params.MonumentKey].en.sound);
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
        title: language==='gr'?info[navigation.state.params.MonumentKey].gr.title:info[navigation.state.params.MonumentKey].en.title,
        headerTitleStyle: commonHeaderTitleStyle,
      };
  };

  ShowThisMonumentMap(MapTitle, MapLongitude, MapLatitude, comingFrom){

    if (comingFrom=='Search'){
      this.props.navigation.navigate(
        'SearchShowSingleMap',
        { MapTitle, MapLongitude, MapLatitude },
      );
    } else {
      this.props.navigation.navigate(
        'ShowSingleMap',
        { MapTitle, MapLongitude, MapLatitude },
      );
    }
  }

  ShowMonumentMore(monumentKey, comingFrom){
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
    if (comingFrom=='Search'){
      this.props.navigation.navigate(
        'SearchShowMonumentMore',
        { monumentKey },
      );

    } else {
      this.props.navigation.navigate(
        'ShowMonumentMore',
        { monumentKey },
      );
    }
  }

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

  openMapNavigation(){
    const lat = info[this.props.navigation.state.params.MonumentKey].coordinates.latitude;
    const lon = info[this.props.navigation.state.params.MonumentKey].coordinates.longitude;

    if (Platform.OS === 'android'){
      Linking.openURL(`google.navigation:q=${lat}+${lon}`);
    } else {
      // Linking.openURL('maps://app?saddr=100+101&daddr=100+102'); saddr start address - dadd destination
      Linking.openURL(`maps://app?daddr=${lat}+${lon}`);
    }

  }

  render() {

  const mKey = this.props.navigation.state.params.MonumentKey;
  const args = {
    number: info[mKey].phone, // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
  }

  return (
      <View style={styles.container}>
        <ScrollView>
            <View style={styles.upperSpace}>
              <Image
                style={styles.bigImage}
                source={images[mKey]}
              />
            </View>

            <View style={{position:'absolute', top: 20, left: 3}}>
              <MaterialCommunityIcons name={this.state.mapIcon} size={50} color="#62c8f7"
              onPress = {() => {  
                  this.ShowThisMonumentMap(global.language==='gr'?info[mKey].gr.title:info[mKey].en.title, info[mKey].coordinates.longitude, info[mKey].coordinates.latitude, this.props.navigation.state.params.comingFrom)
                  this.setState({ mapIcon: "map-marker"});
                  setTimeout(() => {
                    this.setState({ mapIcon: "map-marker-circle"});
                  }, 100);
                }
              }/>
            </View>

            {((language==='gr' && info[mKey].gr.sound!=null) || (language==='en' && info[mKey].en.sound!=null)) &&
            <View style={{position:'absolute', top: 80, left: 3}}>
              <MaterialIcons name={this.state.playIcon} size={50} color="#62c8f7"
              onPress = {() =>this.PlayTheSound()}/>
            </View>}

            <View style={{position:'absolute', top: 140, left: 3}}>
              <MaterialCommunityIcons name={this.state.directionsIcon} size={50} color="#62c8f7"
              onPress = { () => this.openMapNavigation() }/>
            </View>

            {info[mKey].gr.history!=null &&
              <TouchableOpacity
                onPress = {() =>this.ShowMonumentMore(mKey,this.props.navigation.state.params.comingFrom)}
                >
                <BmoyButton
                   caption={language==='gr'?'Ιστορικά στοιχεία':'Historic details'}
                />
              </TouchableOpacity>}

            {(info[mKey].gr.category || info[mKey].gr.sculpturist || info[mKey].gr.carrier || info[mKey].year || info[mKey].gr.location || info[mKey].phone || info[mKey].address || info[mKey].gr.timeTable) &&
            <View style={styles.monumentInfo}>
              {info[mKey].gr.category!=null &&
              <Text style={styles.other}>
                {language==='gr'?'Θεματική κατηγορία:':'Category:'} {language==='gr'?info[mKey].gr.category:info[mKey].en.category}
                </Text>}
              {info[mKey].gr.sculpturist!=null &&
              <Text style={styles.other}>
                {language==='gr'?'Δημιουργός:':'Creator:'} {language==='gr'?info[mKey].gr.sculpturist:info[mKey].en.sculpturist}
                </Text>}
              {info[mKey].gr.carrier!=null &&
              <Text style={styles.other}>
                {language==='gr'?'Φορέας ανάθεσης:':'Carrier:'} {language==='gr'?info[mKey].gr.carrier:info[mKey].en.carrier}
                </Text>}
              {info[mKey].year!=null &&
              <Text style={styles.other}>
                {language==='gr'?'Χρονολογία εγκατάστασης:':'Year:'} {info[mKey].year}
                </Text>}
              {info[mKey].gr.location!=null &&
                <Text style={styles.other}>
                  {language==='gr'?'Τοποθεσία:':'Location:'} {language==='gr'?info[mKey].gr.location:info[mKey].en.location}
                </Text> }
                {info[mKey].gr.address!=null &&
                  <Text style={[styles.other,]}>
                    {language==='gr'?'Διεύθυνση: ':'Address: '}
                    {language==='gr'?info[mKey].gr.address:info[mKey].en.address}
                  </Text> }
                  {info[mKey].gr.timeTable!=null &&
                    <Text style={styles.other}>
                      {language==='gr'?'Ωράριο:':'Opening hours:'} {language==='gr'?info[mKey].gr.timeTable:info[mKey].en.timeTable}
                    </Text> }
                  {info[mKey].phone!=null &&
                  <TouchableOpacity
                    onPress = {() => call(args).catch(console.error)}
                    >
                    <PhoneButton
                      caption= {info[mKey].phone}
                    />
                  </TouchableOpacity>}
            </View>

            }
            <View style={{padding:10}} >
              <HTML baseFontStyle={{ fontFamily: AppFont, fontSize: 16}} html={language==='gr'?info[mKey].gr.description:info[mKey].en.description} />
              {info[mKey].gr.sourceTitle1!=null && // if there is source title
                <View>
                  <Text style={styles.sourceMain}>
                    {language==='gr'?'Πηγές':'Sources'}
                  </Text>
                  {info[mKey].sourceLink1 !=null && // if there is a scource link
                  <TouchableOpacity
                    onPress = {() => Linking.openURL(info[mKey].sourceLink1).catch(err => console.error('An error occurred', err))}
                    >
                    <Text style={styles.sourceTitle}>
                        {language==='gr'?info[mKey].gr.sourceTitle1:info[mKey].en.sourceTitle1}
                      </Text>
                      <Text style={styles.sourceLink}>
                        {info[mKey].sourceLink1}
                      </Text>
                  </TouchableOpacity>}
                  {info[mKey].sourceLink1 == null && // if there is no source link
                  <View>
                    <Text style={styles.sourceTitle}>
                      {language==='gr'?info[mKey].gr.sourceTitle1:info[mKey].en.sourceTitle1}
                    </Text>
                    <Text style={styles.sourceLink}>
                      {info[mKey].sourceLink1}
                    </Text>
                  </View>}
                </View>}
                {info[mKey].gr.sourceTitle2!=null && // if there is source title
                <View>
                  {info[mKey].sourceLink2 !=null && // if there is a scource link
                  <TouchableOpacity
                    onPress = {() => Linking.openURL(info[mKey].sourceLink2).catch(err => console.error('An error occurred', err))}
                    >
                    <Text style={styles.sourceTitle}>
                        {language==='gr'?info[mKey].gr.sourceTitle2:info[mKey].en.sourceTitle2}
                      </Text>
                      <Text style={styles.sourceLink}>
                        {info[mKey].sourceLink2}
                      </Text>
                  </TouchableOpacity>}
                  {info[mKey].sourceLink2 == null && // if there is no source link
                  <View>
                    <Text style={styles.sourceTitle}>
                      {language==='gr'?info[mKey].gr.sourceTitle2:info[mKey].en.sourceTitle2}
                    </Text>
                    <Text style={styles.sourceLink}>
                      {info[mKey].sourceLink2}
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
    backgroundColor: '#125496',
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
    color:'white',
  },
  description: {
    fontFamily: AppFont,
    fontSize: 16,
    padding:20,
    textAlign: 'justify',
  },
  sourceMain: {
    fontFamily: AppFont,
    fontSize: 16,
    paddingLeft:10,
    paddingTop:10,
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
  showMore: {
    fontFamily: AppFont,
    fontSize: 20,
    paddingTop:5,
    paddingBottom:10,
    paddingLeft:0,
    paddingRight:0,
    color:'#44f',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

