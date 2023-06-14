import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity, AppRegistry } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackNavigator } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
export default function Navbar() {
    const navigation = useNavigation()
    return (
        
        <View style={styles.navbarOuterGroup}>
            <TouchableHighlight  onPress={()=> navigation.navigate('UploadData')}>
                <Image
                style={styles.logo}
                source={require('../assets/ypmath-logo.png')}
                />
            </TouchableHighlight>
            <View style={styles.navbarInnerTextGroup}>        
                <View style={styles.navbarInnerInnerTextGroup}>
                    <Text onPress={()=> navigation.navigate('onlineTuitions')} style={{fontWeight: 'bold', fontSize:20}}>Online Tuitions</Text>
                </View>    
                <TouchableHighlight style={styles.navbarInnerInnerTextGroup} >
                    <Text onPress={()=>navigation.navigate('login')} style={{fontWeight: 'bold', marginRight:10,fontSize:20}}>Log in</Text>
                </TouchableHighlight>
                <TouchableHighlight style={styles.navbarInnerInnerTextGroup} >
                    <Text onPress={()=>navigation.navigate('Sign up')} style={{fontWeight: 'bold', marginRight:10,fontSize:20}}>Sign up</Text>
                </TouchableHighlight>
            </View>
        </View>
    
    )
}

const styles = StyleSheet.create({
    logo:{
        flex: 1,
        width: 80,
        height: 80,
        resizeMode: 'contain',
        marginLeft:10,
        marginTop: 10,
        marginBottom: 10,
        
    },
    navbarInnerTextGroup:{
        flexDirection:'row',
        justifyContent:'flex-end',
        flex:1
    },
    navbarInnerInnerTextGroup:{
        marginHorizontal:10,
        
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center'
        // alignItems:'baseline'
    },
    navbarOuterGroup: {
        backgroundColor:"#FFFFFF",
        // position:'absolute',
        // borderBottomWidth: 1,
        marginTop:25,
        width: 'auto',
        minHeight: 80,        
        minWidth: '100%',
        flexDirection: 'row',
        
    }    
})


