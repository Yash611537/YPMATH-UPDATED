import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Button, Pressable, View, StyleSheet, Text, TextInput, Linking, Image } from "react-native";
import { auth } from "../firebase";
import firebase from "firebase";
export default function SignUp(props){
    const navigation = useNavigation()
    const{title='REGISTER'}=props;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Registered with ',user.email)
                navigation.navigate('profilePage')
            })
            .catch(error => alert(error.message))
    }


    return(
        <View style={styles.container}>
                <Image style={styles.pic} source={require('../assets/ypmath-logo.png')}/>
                <Pressable style={styles.button}>
                    <TextInput style={styles.phtext} placeholder='Name'/>
                </Pressable>
                <Pressable style={styles.button}>
                    <TextInput style={styles.phtext} textContentType='emailAddress' placeholder='Email' onChangeText={text=>setEmail(text)} value={email}/>
                </Pressable>
                <Pressable style={styles.button}>
                    <TextInput style={styles.phtext} secureTextEntry={true} onChangeText={text=>setPassword(text)} value={password} placeholder='Password'/>
                </Pressable>
                <Pressable 
                style={styles.buttonreg}
                onPress={handleSignUp}>
                    <Text style= {styles.regtext}>{title}</Text>
                </Pressable>
                <Text style={styles.subtext}><Text>Already have an account? </Text>
                <Text style={{color: '#4be2f2', textDecorationLine: 'underline'}}onPress={() => navigation.navigate('login')}>Login Here</Text></Text>
                <Text style={{color: '#4be2f2', alignSelf: 'center', fontSize: 20, textDecorationLine: 'underline'}}
                onPress={() => Linking.openURL('http://google.com')}>Forgot Password?</Text>
            </View>
    );
};

const styles = StyleSheet.create({
    button:{
        alignSelf: 'center',
        justifyContent: 'center',
        height:'7%',
        width: '80%',
        marginLeft: 10,
        marginTop: 20,
        borderColor: '#d3d3d3',
        borderStyle: 'solid',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        elevation: 7,
        borderRadius: 10
    },
    buttonreg: {
        alignSelf: 'center',
        justifyContent: 'center',
        height:'7%',
        width: '35%',
        marginLeft: 10,
        marginTop: 20,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 3,
        backgroundColor: '#fadd66',
        marginBottom: 15
    },
    container: {
        flex:1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    phtext:{
        fontWeight:'bold',
        fontsize: 20,
        marginLeft: 5
    },
    pic:{
        alignSelf:'center',
        width: '20%',
        height: '13%'
        },
    regtext:{
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center'
    },
    subtext:{
        alignSelf:'center',
        justifyContent:'center',
        fontSize: 20
    }
});
