import { View, Text } from "react-native";
import React, { useState } from "react";
// import { SelectList } from "react-native-dropdown-select-list";
import { SelectList } from "react-native-dropdown-select-list";
// import firestore from "@react-native-firebase/firestore";
import firebase from "firebase";

const drop = [
  { key: "1", value: "yash" },
  { key: "2", value: "rucha" },
  { key: "3", value: "prateeti" },
];
export default function AddQuestion() {
  const [selected, setSelected] = useState()
  // Function to upload selected value to Firestore
  const uploadSelectedValue = async (value) => {
    try {
      console.log(drop[value-1].value);
      await firebase.firestore().collection("Question").doc("dropdownMY").set({
        selectedValue: drop[value-1].value,
      });
      console.log("Selected value uploaded to Firestore");
    } catch (error) {
      console.log("Error uploading selected value to Firestore: ", error);
    }
  };

  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 100, flex: 1 }}>
      <SelectList
      data={drop}    
      setSelected={setSelected} 
      onSelect={()=>uploadSelectedValue(selected)}
      />
    </View>
  );
}

// import React, { useEffect, useState } from "react";
// import { Text, View, Image, Button, StyleSheet, TextInput } from "react-native";
// import * as ImagePicker from "expo-image-picker";
// import firebase from "firebase";
// export default function AddQuestion() {
//     const [images, setImages] = useState([]);
//     const [imgName, setName] = useState();
//     useEffect(() => {
//       (async () => {
//         if (Platform.OS !== 'web') {
//           const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//           if (status !== 'granted') {
//             alert('Sorry, we need camera roll permissions to make this work!');
//           }
//         }
//       })();
//     }, []);
    
//     const uploadImage = async (uri, imageName) => {
//       try {
//         const storageRef = firebase.storage().ref();
//         const imageRef = storageRef.child(`images/${imageName}`);
//         const response = await fetch(uri);
//         const blob = await response.blob();
//         await imageRef.put(blob);
//         console.log('Image uploaded to Firebase Storage!');
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     const handleChoosePhotos = async () => {
//       let result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         aspect: [4, 3],
//         quality: 1,
//         allowsMultipleSelection: true,
//       });
  
//       if (!result.cancelled) {
//         setImages([...images, result.uri]);
//         // uploadImage(result.uri, 'imageByYash');
//       }
//     };
//     const fireUpload = ()=> {
//       uploadImage(images, imgName);
//     }
//     console.log(images)
//   return (
//     <View style={styles.container}>
//       {images.map(image => (
//         <Image key={image} source={{ uri: image }} style={styles.image} />
//       ))}
//       <TextInput 
//         placeholder="Add Name of the image"
//         value={imgName}
//         onChangeText={setName}
//         style={{width:50}}
//       ></TextInput>
//       <Button title="Choose Photos" onPress={handleChoosePhotos} />
//       <Button title="Upload" onPress={fireUpload} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginBottom: 10,
//   },
// });

// import { useNavigation } from '@react-navigation/native'
// import React, { Component, useState } from 'react'
// import { Text, StyleSheet, View, TextInput, Pressable } from 'react-native'


// export default function ddQuestion()  {
//     const [id, setId] = useState()
//     const navigation = useNavigation()
//     return (
//       <View>
//         <TextInput 
//          value={id}
//          onChangeText={(id)=>setId(id)}
//          placeholder='YO'
//          style={styles.textInput}
//         />
//         <Pressable onPress={()=>navigation.navigate("AnswerPage", {
//           paramKey:id
//         })}><Text>Hey</Text></Pressable>        
//       </View>
//     )
//   }

// const styles = StyleSheet.create({
//   textInput:{
//     width:80
//   }
// })

