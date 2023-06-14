import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Pressable,
  Button,
  KeyboardAvoidingView,
  Image
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import * as ImagePicker from "expo-image-picker";
import { firestore } from "../firebase";
import { getTimestamp } from "react-native-reanimated/lib/reanimated2/core";
import firebase from "firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import Footer from "../components/footer";
export default function UploadData() {
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [addtranscript, setAddTranscript] = useState("");
  const [Questimages, setQuestImages] = useState([]);
  const [Ansimages, setAnsImages] = useState([]);
  const subjects = [
    { key: "Math", value: "Mathematics" },
    { key: "Phy", value: "Physics" },
    { key: "Chem", value: "Chemistry" },
  ];

  const topics = {
    Math: [
      { key: "1", value: "Number & Algebra" },
      { key: "2", value: "Functions" },
      { key: "3", value: "Trigonometry & Geometry" },
      { key: "4", value: "Statistics & Probability" },
    ],
    Phy: [
      { key: "1", value: "Electricity & Magnetism" },
      { key: "2", value: "Nuclear & Particle Physics" },
      { key: "3", value: "Circular Motion & Gravitation" },
      { key: "4", value: "Waves" },
      { key: "5", value: "Atomic" },
    ],
    Chem: [
      { key: "1", value: "Stoichiometric Relationship" },
      { key: "2", value: "Periodicity" },
      { key: "3", value: "Atomic Structure" },
      { key: "4", value: "Chemical Kinetics" },
      { key: "5", value: "Chemical Bonding & Structure" },
    ],
  };
  const difficulties = [
    { key: "1", value: "Easy" },
    { key: "2", value: "Medium" },
    { key: "3", value: "Hard" },
  ];

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const QuesthandleChoosePhotos = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      setQuestImages([...Questimages, result.uri]);

    }
  };

  const AnshandleChoosePhotos = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      setAnsImages([...Ansimages, result.uri]);

    }
  };

  const fireUpload = () => {
    uploadImage(Questimages, imgName);
  };
  const uploadSelectedValue = async (value) => {
    try {
      const stamp = firebase.firestore.FieldValue.serverTimestamp()
      await firestore
        .collection("Question")
        .doc()
        .set({
          Subject: subject,
          Topic: topics[value][topic-1].value,
          QuestImg:Questimages,
          AnsImg:Ansimages,
          Difficulty: difficulties[difficulty-1].value,
          Transcript: addtranscript,
          timestamp:stamp,
        });
      alert("Selected value uploaded to Firestore");
    } catch (error) {
      console.log("Error uploading selected value to Firestore: ", error);
    }
  };

  return (
    <View style={{flex:1}}>
    <KeyboardAvoidingView
      behavior="padding"
      style={{ paddingHorizontal: 20, paddingVertical: 100 }}
    >
      <SelectList
        setSelected={setSubject}
        boxStyles={{ borderRadius: 1 }}
        data={subjects}
        placeholder="Choose Subject"
      />
      <SelectList
        setSelected={setTopic}
        boxStyles={{ marginTop: 30, borderRadius: 1 }}
        data={topics[subject]}
        placeholder="Choose Topic"
        defaultOption={topics[subject]}
      />
      <SelectList
        setSelected={setDifficulty}
        boxStyles={{ marginTop: 30, borderRadius: 1 }}
        data={difficulties}
        placeholder="Choose Difficulty"
      />
      <Pressable style={styles.outline}>
        <TextInput
          style={styles.input}
          placeholder="Transcript"
          multiline
          onChangeText={(transcript) => setAddTranscript(transcript)}
          value={addtranscript}
        />
      </Pressable>
      {Questimages.map(image => (
        <Image key={image} source={{ uri: image }} style={styles.image} />
        ))}

        <Button title="Choose question Photos" onPress={QuesthandleChoosePhotos} />
        <Button title="Choose Answer Photos" onPress={AnshandleChoosePhotos} />

        
      <Button
        style={styles.button}
        title="Submit Data"
        onPress={() => uploadSelectedValue(subject, topic, difficulty)}
      ></Button>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: "20%",
    width: "100%",
    marginTop: "10%",
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    marginBottom: "10%",
  },
  outline: {
    borderColor: "black",
  },
  input: {
    height: "30%",
    borderRadius: 5,
    borderBottomColor: "black",
    paddingLeft: 5,
  },
  alignment: {
    alignContent: "center",
    flex: 1,
    marginTop: "10%",
  },
  upload: {
    marginTop: "5%",
  },
});
