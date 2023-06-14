import { StyleSheet, Text, View, ScrollView, TouchableHighlight, Image, Pressable, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Navbar from './navbar'; 
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StackNavigator } from 'react-navigation';
export default function Homepage(props) {
    const {title='START STUDYING'}=props;
    // const {title='CONTACT NOW'} = props;
    const navigation = useNavigation();
    return (
    <View>
        <Navbar />
        <ScrollView>
        <View style={styles.topContainer}>
            <Image
                source={require('../assets/homepagelogo.png')}
                style={styles.topLogo} 
            />
            <Text style={[styles.topHeading,styles.topSpace]}>
                <Text>Important </Text><Text style={styles.topIbdp}>IBDP </Text>
                <Text>exam questions & answers</Text>
            </Text>
            <Text style={styles.topSubheading}>Hand-picked by expert teachers!</Text>
            <Pressable onPress={()=>navigation.navigate('Question Page')} style={styles.topButton}><Text style={styles.topButtonText}>{title}</Text></Pressable>
        </View>
        <View style={styles.midContainer}>
            <Text style={styles.midHeader}>All main subjects covered</Text>
            <Text style={styles.midSubHeader}>With over 3000 questions answered. and a growing user base</Text>
            <View style={styles.midBoxContainer}>   
                <View style={styles.midBox1}>
                    <Text style={styles.midBoxText}>Math</Text>
                    <Pressable style={styles.midBoxbutton}><Text style={styles.midButtontext}>{title}</Text></Pressable>
                </View>        
                <View style={styles.midBox2}>
                    <Text style={styles.midBoxText}>Chemistry</Text>
                    <Pressable style={styles.midBoxbutton}><Text style={styles.midButtontext}>{title}</Text></Pressable>
                </View>
            </View>
            <View style={styles.midBoxContainer}>
                <View style={styles.midBox3}>
                    <Text style={styles.midBoxText}>Physics</Text>
                    <Pressable style={styles.midBoxbutton}><Text style={styles.midButtontext}>{title}</Text></Pressable>
                </View>
                <View style={styles.midBox4}>
                    <Text style={styles.midBoxText}>biology</Text>
                    <TouchableHighlight style={styles.midBoxbutton}><Text style={styles.midButtontext}>{title}</Text></TouchableHighlight>
                </View>
            </View>
        </View>
        <View style = {styles.bottomContainer}>
            <Image 
            style={styles.bottomLogo}
            source={require('../assets/mid.png')}
            />
        <Text style = {styles.bottomMaintext}>Online Tuitions</Text>
        <Text style = {styles.bottomSubtext}>We offer 1 on 1 tutoring for Ib Diploma program. Learn from expert 
            teachers and creators of this website:</Text>
        <Text style = {styles.bottomSubtext}>• To arrange a class, contact our Whatsapp number: +919820006286</Text>
        <Text style = {styles.bottomSubtext}>• Fill out the registration form and make the payment</Text>
        <Pressable style={styles.bottomButton}><Text style={styles.bottomButtontext}>{title}</Text></Pressable>    
            
        </View>
        </ScrollView>
    </View>
    )
}


const styles = StyleSheet.create({
    topButton:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fbe268',
        height:45,
        width: 190,
        marginLeft: 20,
        marginTop: 20,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 4
    },
    topButtonText:{
        fontWeight: 'bold',
        fontSize: 18
    },
    topContainer: {
        flex:1,
        alignContent: 'center',
        justifyContent: 'center',
        paddingTop: 70,
        paddingBottom: 30,
        backgroundColor: '#FFFFFF'
    },
    topHeading:{
        fontSize: 30,
        textAlign: 'left',
        fontWeight: '800'
    },
    topIbdp:{
        color: '#4be2f2'
    },
    topLogo:{
        alignSelf: 'center',
        width: 300,
        height: 200
    },
    topSpace:{
        paddingLeft: 20,
        marginTop: 20
    },
    topSubheading:{
        paddingTop: 5,
        marginLeft: 20
    },
    midBoxbutton:{        
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#fbe268',
        minHeight: '20%',
        minWidth: '80%',
        marginLeft: 10,
        marginTop: 20,
        marginBottom: 20,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 5,
        position: 'absolute',
        bottom: 0,
        flex: 1
    },
    midBox1:{
        width: '40%',
        backgroundColor: '#FF5353',
        minHeight: 200,
        marginTop: 20,
        marginHorizontal: 20,
        borderWidth: 5
    },
    midBox2:{
        width: '40%',
        backgroundColor: '#FEFF59',
        minHeight: 200,
        marginTop: 20,
        marginHorizontal: 20,
        borderWidth: 5
    },
    midBox3:{
        width: '40%',
        backgroundColor: '#78E6FF',
        minHeight: 200,
        marginTop: 20,
        marginHorizontal: 20,
        borderWidth: 5
    },
    midBox4:{
        width: '40%',
        backgroundColor: '#CD7CFF',
        minHeight: '10%',
        marginTop: 20,
        marginHorizontal: 20,
        borderWidth: 5
    },
    midBoxContainer: {
        flexDirection: 'row',
        width: 'auto',
    },
    midBoxText:{
        textAlign: 'center',
        marginTop: 20,
        fontSize: 15,
        fontWeight: '700'
    },
    midButtontext:{
        fontWeight: '800',
        fontSize: 19,
        textAlign: 'center'
    },
    midContainer:{
        minHeight: 300,
        width: 'auto',
        // borderWidth: 1,
        alignItems: 'center',
        paddingTop: 100,
        paddingBottom: 100,
        backgroundColor: '#FFFFFF'
    },
    midHeader: {
        fontSize: 30,
        marginTop: 10,
        fontWeight: '600',
        textAlign: 'center'
    },
    midSubHeader:{
        fontSize: 20,
        marginTop: 10,
        fontWeight: '350',
        maxWidth: '80%',
        textAlign: 'center'
    },
    bottomButton: {
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        backgroundColor: '#FADD66',
        height:50,
        width: 190,
        marginLeft: 20,
        marginTop: 20,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 5,
        marginBottom: 30
    },

    bottomButtontext: {
        fontWeight: 'bold',

    },

    bottomContainer: {
        flex:1,
        alignContent: 'center',
        justifyContent: 'center',
        //alignItems: 'center',
        paddingBottom: 100,
        backgroundColor: '#FFFFFF'
    },

    bottomMaintext: {
        fontSize: 35,
        textAlign: 'left',
        paddingLeft: 20,
        fontWeight: 'bold'
    },

    bottomLogo: {
        height:350,
        width: '90%',
        alignSelf: 'center'
    },

    bottomSubtext: {
        fontSize: 13.5, 
        textAlign: 'left',
        paddingLeft: 20,
        
    }
});