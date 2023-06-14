import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React, {Component, useState} from "react";
import { TouchableOpacity,Text, TextInput, View, StyleSheet, Image, Button, Pressable } from "react-native";
import { auth } from "../firebase";
import Footer from "../components/footer";
import Homepage from "./HomePage";
import ProfilePage from "./profilePage";


export default function Login(props) {
    const navigation = useNavigation()
    const {title='LOGIN'} = props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with',user.email)
                navigation.navigate('profilePage')
            })
            .catch(error => alert(error.message))
    }
    return (
        <View style={styles.container}>
            <Image
                style= {styles.logo}
                source = {require('../assets/ypmath-logo.png')}
            />
             
            <Pressable style={styles.boxstyle}>
                <TextInput 
                    style={styles.textinput} 
                    placeholder = "Email"
                    onChangeText={text => setEmail(text)}
                    value={email}
                    />
            </Pressable>
            
            <Pressable style={styles.boxstyle}>
                <TextInput 
                    style={styles.textinput} 
                    placeholder = "Password"
                    onChangeText={text => setPassword(text)}
                    value={password}     
                    secureTextEntry               
                />
            </Pressable>
    
            <TouchableOpacity style={styles.button} onPress={handleLogin}><Text style={styles.buttontext}>{title}</Text></TouchableOpacity>
            <Text style={styles.text}>Don't have an account? <Text style={styles.linkstyle}>Register here</Text></Text>
            <Text style={styles.linkstyle}>Forgot password?</Text>
        </View>
    )
}



const styles = StyleSheet.create({
    boxstyle: {
        borderColor: '#D3D3D3',
        //shadowOffset: 4,
        height: '5%',
        width: '55%',
        borderWidth: 1,
        marginTop: 15,
        marginBottom: 15,
        // shadowOffset: {width: 4, height: 40},  
        // shadowColor: 'yellow',  
        // shadowOpacity: 50,  
        // shadowRadius: 3,
        elevation: 15,
        // borderBottomColor: '#FDE163',
        // borderBottomWidth: 5,
        // borderRightColor: '#FDE163',
        // borderRightWidth: 5,
        backgroundColor: '#FFFFFF',
        marginLeft: 20,
        borderRadius: 10,

        
    },
    
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        backgroundColor: '#FADD66',
        height: '5%',
        width: '25%',
        marginLeft: 20,
        marginTop: 20,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 3
    },

    buttontext: {
        fontWeight: 'bold',
        fontSize: 18

    },

    container: {
        flex:1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        //flexDirection: 'row'
    },

    logo: {
        width: '25%',
        height: '15%',
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 20
    },

    linkstyle: {
        color: '#4BE2F2',
        textDecorationLine: 'underline',
        fontSize: 20
    },

    // rectangle: {
    //     height: 40,
    //     width: 300,
    //     backgroundColor: '#FDE163',
    //     position: 'relative',
    //     bottom: 10,
    //     left: 52
        
    // },

    text: {
        paddingTop: 40,
        fontSize: 20
    },

    textinput: {
        paddingLeft: 10,
        paddingTop: 5
    }

})