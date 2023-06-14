import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text, View, TextInput, FlatList, TouchableHighlight,TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MenuDrawer from 'react-native-side-drawer';
import React, { Component, useState, useEffect } from 'react';
import Drawer from 'react-native-drawer';
import FilterContent from '../components/filterContent';
import firebase from 'firebase/app';
import 'firebase/firestore';

import Fetch from '../components/Fetch';
import FirestoreData from '../components/Fetch';
import Footer from '../components/footer';
class MyScreen extends Component {
  
  closeDrawer = () => {
    this.drawer.close();
  }
  
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  openDrawer = () => {
    this.drawer.open();
  }

  render() {

    return (
      <View style={{flex:1}}>
      <Drawer
      ref={(ref) => { this.drawer = ref; }}
      content={
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <FilterContent/>
            </View>
          }
        onClose={() => this.closeDrawer()}
        type="overlay"
        tapToClose={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        negotiatePan={true}
        tweenHandler={(ratio) => ({
          main: { opacity: (2 - ratio) / 2 }
        })}
      >
      <View style={styles.navbarOuterGroup}>
      <TouchableHighlight>
      <Image
        style={styles.logo}
        source={require('../assets/ypmath-logo.png')}
        />
        </TouchableHighlight>
        <TouchableOpacity onPress={()=>this.openDrawer()}>
        <Icon style={styles.filterIcon}  name="filter" size={40} color="black" />
        </TouchableOpacity>
        </View>
        <ScrollView>
          <FirestoreData/>      
        </ScrollView>
        </Drawer>
        <Footer/>
        </View>
    );
  }
}

export default MyScreen;










const styles = StyleSheet.create({
  navbarOuterGroup: {
      backgroundColor:"#FFFFFF",
      // position:'absolute',
      // borderBottomWidth: 1,
      marginTop:25,
      width: 'auto',
      minHeight: 80,        
      minWidth: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    filterIcon:{
      marginHorizontal:10,
    },
    logo:{
      flex: 1,
      width: 80,
      height: 80,
      resizeMode: 'contain',
      marginLeft:10,
      marginTop: 10,
      marginBottom: 10,  
      
    },
    questionLayout:{
      flex:0.5,
      minHeight:"20%",
      width:"90%",
      backgroundColor:'blue',
      alignSelf: 'center',
      marginVertical: 20,        
    },
})
