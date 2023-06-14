import React, { useState } from "react";
import {
  Alert,
  Text,
  StyleSheet,
  Button,
  Pressable,
  View,
  TextInput,
  Modal,
} from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Footer from "../components/footer";
import firebase from "firebase";
import { useNavigation } from "@react-navigation/native";
import { showMessage } from "react-native-flash-message";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TouchableHighlight } from "react-native-web";
export default function ProfilePage() {
  const [text, setText] = useState("yashshah@gmail.com");
  const [editing, setEditing] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigation = useNavigation()
  const handleEdit = () => {
    setEditing(true);
    setShowPopup(true);
  };
  const handleSignOut = () => {
  firebase.auth().signOut()
  .then(() => {
    navigation.navigate('Start')
  })
  .catch((error) => {
      alert(error.message)
  });
  }
  const handleSave = (newText) => {
    setText(newText);
    setEditing(false);
    setShowPopup(false);
  };

  return (
    <View style={styles.main}>
      <View style={styles.upperView}>
        <Text style={styles.heading}>My Profile</Text>
        <View style={styles.iconPosition}>
          <FontAwesome5
            style={styles.icon}
            name="user-circle"
            size={180}
            color="black"
          />
        </View>
        <Text style={styles.topic}>Name</Text>
        <Text style={styles.name}>Yash Shah</Text>
        <View>
          {editing ? (
            <TextInput
              value={text}
              onChangeText={setText}
              onSubmitEditing={() => handleSave(text)}
            />
          ) : (
            <View>
              <Text style={styles.topictwo}>Email</Text>
              <Text style={styles.information}>{text}</Text>
              {/* <Button
                style={styles.buttonedit}
                title="Edit"
                onPress={handleEdit}
              /> */}
            </View>
          )}

          <Modal visible={showPopup} animationType="slide">
            <View style={styles.popup}>
              <TextInput
                value={text}
                onChangeText={setText}
                onSubmitEditing={() => handleSave(text)}
              />
              <Button title="Save" onPress={() => handleSave(text)} />
            </View>
          </Modal>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={handleSignOut}>LOG OUT</Text>
      </TouchableOpacity>
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "50%",
    height: 50,
    backgroundColor: "#fbe268",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 4,
    marginTop: "12%",
    flexDirection: "column",
    justifyContent: "flex-end",
    marginBottom: 150,
    alignSelf: "center",
  },
  buttonText: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    textAlignVertical: "center",
  },
  heading: {
    marginVertical: "15%",
    fontWeight: "bold",
    marginHorizontal: "5%",
    fontSize: 20,
  },
  icon: {
    alignSelf: "center",
  },
  information: {
    fontSize: 20,
    marginHorizontal: "5%",
    fontWeight: "bold",
  },
  main: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#F6F8FA",
  },
  name: {
    marginHorizontal: "5%",
    fontSize: 20,
    fontWeight: "bold",
  },
  topic: {
    marginHorizontal: "5%",
    fontSize: 15,
    marginTop: "10%",
  },
  topictwo: {
    marginHorizontal: "5%",
    fontSize: 15,
    marginTop: "5%",
  },
});
// import React, { useState } from "react";
// import { Text, StyleSheet, Button, Pressable, View, TextInput, Modal } from "react-native";
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import Footer from "../components/footer";



// export default function ProfilePage(){
//     const [text, setText] = useState('rucha.parekh@gmail.com');
//     const [editing, setEditing] = useState(false);
//     const [showPopup, setShowPopup] = useState(false);

//     const handleEdit = () => {
//         setEditing(true);
//         setShowPopup(true);
//     }

//     const handleSave = (newText) => {
//         setText(newText);
//         setEditing(false);
//         setShowPopup(false);
//     }

//     return(
//       <View style={{flex:1}}>
//         <View style={styles.main}>
//         <View style={styles.upperView}>
//             <View style={styles.iconPosition}><FontAwesome5 style={styles.icon} name="user-circle" size={200} color='black' /></View>
//             <Text style={styles.name}>Rucha</Text>
//             <View>
//   {editing ? (
//     <TextInput
//       value={text}
//       onChangeText={setText}
//       onSubmitEditing={() => handleSave(text)}
//     />
//   ) : (
//     <View>
//       <Button title="Edit" onPress={handleEdit} />
//       <Text>{text}</Text>
//     </View>
//   )}

//   <Modal visible={showPopup} animationType="slide">
//     <View style={styles.popup}>
//       <TextInput
//         value={text}
//         onChangeText={setText}
//         onSubmitEditing={() => handleSave(text)}
//       />
//       <Button title="Save" onPress={() => handleSave(text)} />
//     </View>
//   </Modal>
// </View>
//         </View>
//         <Pressable style={styles.button}><Text style={styles.buttonText}>LOG OUT</Text></Pressable>
//         </View>
//         <Footer/>
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     button:{
//         width: 270,
//         height: 70,
//         backgroundColor: '#fbe268',
//         borderStyle: 'solid',
//         borderColor: 'black',
//         borderWidth: 4,
//         marginTop: 100,
//         flexDirection: 'column',
//         justifyContent: 'flex-end',
//         marginBottom: 150
//     },

//     buttonText:{
//         flex: 1,
//         fontWeight: 'bold',
//         fontSize: 28,
//         textAlign: 'center',
//         textAlignVertical: 'center'
//     },

//     icon:{
//         alignSelf: 'center',
//     },

//     information:{
//         fontSize: 29,
//         textAlign: 'center'
//     },
    
//     main:{
//         // textAlign: 'center',
//         // textAlignVertical: 'center'
//         flex : 1,
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         backgroundColor: '#F6F8FA',
//         // <Text style={styles.information}>rucha.parekh@gmail.com</Text>
//         // <Text style={styles.information}>India</Text>
//     },

//     name:{
//         marginTop: 60,
//         fontSize: 35,
//         textAlign: 'center'
//     },

//     upperView:{
//         marginTop: 150
//     }

// })