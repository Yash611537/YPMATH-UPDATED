import { useNavigation } from '@react-navigation/native'
import React, { Component } from 'react'
import { Text, StyleSheet, View, Pressable, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Start(){
    const navigation = useNavigation()
    return (
    <View style={styles.main}>
        <View style={styles.upperView}>
            <Image style={styles.logo} source={require('../assets/ypmath-logo.png')}/>
            <Text style={{color:'black', fontSize:20, marginTop:10, fontWeight:'900', alignSelf:'center'}}>YP-Math Academy</Text>
        </View>
        <View style={styles.lowerview}>
            <TouchableOpacity onPress={()=>navigation.navigate('login')} style={styles.button}><Text style={styles.buttonText}>LOG IN</Text></TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Sign up')} style={styles.button}><Text style={styles.buttonText}>SIGN IN</Text></TouchableOpacity>
        </View>
    </View>
    )
  }


  const styles = StyleSheet.create({
    button:{
        minWidth: '60%',
        height: 60,
        backgroundColor: '#fbe268',
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 3,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginTop:10
    },

    buttonText:{
        flex: 1,
        fontWeight: 'bold',
        fontSize: 28,
        textAlign: 'center',
        textAlignVertical: 'center'
    },

    logo: {
        height: 200,
        width: 200,
        borderColor: 'black',
        borderWidth: 1
    },

    lowerview: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop:90
    },
    
    main:{
        flex : 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F6F8FA',
        },

    name:{
        marginTop: 60,
        fontSize: 35,
        textAlign: 'center'
    },

    upperView:{
        marginTop: 200,
    }

})
