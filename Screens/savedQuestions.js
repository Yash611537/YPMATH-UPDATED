import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import FirestoreData from '../components/Fetch'
import Footer from '../components/footer'

export default function Saved() {
  
    return (
      <View style={{flex:1, }}>
      <Text style={styles.text}>Saved Questions</Text>
        <ScrollView>
            <FirestoreData/>      
        </ScrollView>
        <Footer/>
      </View>
    )
  }


const styles = StyleSheet.create({
    text:{
        marginTop:25,
        fontSize:34,
        fontWeight:'700',
        textDecorationLine:'underline',
        alignSelf:'center'
    }
})
