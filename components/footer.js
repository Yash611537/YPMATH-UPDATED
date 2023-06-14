import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { TouchableHighlight } from "react-native";
import { Text, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Footer() {


        const navigation = useNavigation()
        const [isPressed1, setIsPressed1] = useState(false);
        const [isPressed2, setIsPressed2] = useState(false);
        const [isPressed3, setIsPressed3] = useState(false);
        const [isPressed4, setIsPressed4] = useState(false);
      
        const handlePress1 = () => {
          setIsPressed1(true);
          setIsPressed2(false);
          setIsPressed3(false);
          setIsPressed4(false);
          navigation.navigate('UploadData')
        };

        const handlePress2 = () => {
            setIsPressed1(false);
            setIsPressed2(true);
            setIsPressed3(false);
            setIsPressed4(false);
            navigation.navigate('profilePage')
          };

        const handlePress3 = () => {
            setIsPressed1(false);
            setIsPressed2(false);
            setIsPressed3(true);
            setIsPressed4(false);
            navigation.navigate('Saved')
          };

        const handlePress4 = () => {
            setIsPressed1(false);
            setIsPressed2(false);
            setIsPressed3(false);
            setIsPressed4(true);
            navigation.navigate('Question Page')      
          };


    return(
    
   <View style={styles.outerContainer}>     
    <View style={[styles.iconsPosition, styles.contentContainer, styles.line]}> 

        <TouchableOpacity onPress={handlePress1} underlayColor="transparent">
        <Feather style={styles.icons} name="settings" size={30} color={isPressed1 ? 'gray' : 'gray'} />     
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePress2} underlayColor="transparent">
        <Feather style={styles.icons} name="user" size={30} color={isPressed2 ? 'gray' : 'gray'} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePress3} underlayColor="transparent">
        <Feather style={styles.icons} name="bookmark" size={30} color={isPressed3 ? 'gray' : 'gray'} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePress4} underlayColor="transparent">
        <MaterialIcons style={styles.icons} name="question-answer" size={30} color={isPressed4 ? 'gray' : 'gray'} />
        </TouchableOpacity>
    </View>
    </View>
)
    
}

const styles = StyleSheet.create({
    outerContainer:{
        flexDirection: 'column', // inner items will be added vertically
        // flexGrow: 1,            // all the available vertical space will be occupied by it
        justifyContent: 'flex-end',

         // will create the gutter between body and footer
    },
    contentContainer: {
        backgroundColor: '#F6F8FA'
    },

    iconsPress: {
        color: 'gray'
    },

    iconsNotPress: {
        color:'gray'
    },

    iconsPosition: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    line: {
        borderTopColor: 'light-gray',
        borderTopWidth: 0.3,
        paddingBottom: 10,
        paddingTop: 10
    }

})
