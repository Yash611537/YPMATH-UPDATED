import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { useNavigation } from '@react-navigation/native';

import {
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "react-native-vector-icons/FontAwesome";


const FirestoreData = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  const [num, setNum] = useState()
  const [isIconActive, setIsIconActive] = useState(false);
  const [isIconActive2, setIsIconActive2] = useState(false);

  const handleIconPress = () => {
    setIsIconActive(!isIconActive);
  };

  const handleIconPress2 = () => {
    setIsIconActive2(!isIconActive2);
  };
  useEffect(() => {
    const subscriber = firebase.firestore()
      .collection('Question')
      // .where('questionNumber', '==', 1)
      // .where('transcript', '==', '')
      .onSnapshot(querySnapshot => {
        const newData = [];
        querySnapshot.forEach(documentSnapshot => {
          newData.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setData(newData);
        
      });
      console.log("data",data)
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  return (
    <View style={{flexGrow:1}}>
      {data.map(item => (
        <View  style={{ flexGrow: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center" }}>
          <Pressable
            style={styles.rectangle}
            onPress={()=>navigation.navigate("AnswerPage", {
              topic:item.Topic,
              questImg:item.QuestImg[0],
              ansImg:item.AnsImg[0],
              transcript:item.Transcript,
              difficulty:item.Difficulty,
              subject:item.Subject
            })}
          >
            <View style={styles.inline}>
            <View style={{flexDirection:'column'}}>
              <View style={{flexDirection:'row'}}>
                <Text style={styles.headtext}>Topic:</Text>
                <Text style={styles.subtext}>{item.Topic}</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={styles.headtext}>Difficulty:</Text>
                <Text style={styles.subtext}>{item.Difficulty}</Text>
              </View>
            </View>
            <Pressable
              style={styles.icon}
              onPress={() => handleIconPress("bookmark")}
            >
              <FontAwesome
                name={isIconActive ? "bookmark" : "bookmark-o"}
                size={30}
                color={"black"}
              />
            </Pressable>
            </View>
            <View>
              <Image source={{uri: item.QuestImg[0]}} style={{height:300, width:'100%', resizeMode:'contain'}}/>
            </View>
          </Pressable>        
        </ScrollView>
      </View>
        ))}
      
    </View>
  );
};

export default FirestoreData;

const styles = StyleSheet.create({
  down: {
    flexDirection: "column",
    
  },

  icon: {
    marginRight: 10,
    marginTop: 10,
    alignSelf:'center'
  },

  image: {
    width: "100%",
    height: "50%",
    alignSelf: "center",
    position: "relative",
    resizeMode:'contain',
  },

  inline: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth:1,
    borderBottomColor:'black',
    paddingBottom:5
    // flex: 1,
  },

  outerContainer: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  rectangle: {
    height: 'auto',
    width: "90%",
    backgroundColor: "#FFFFFF",
    margin: 20,
    justifyContent: "space-between",
    borderColor: "#ffe066",
    borderWidth: 3,
    flexDirection: "column",
  },
  headtext:{
    color: "black",
    fontSize: 13,
    fontWeight:'600',
    maxWidth:'80%',
    marginLeft: 10,
    marginTop: 10,
  },
  subtext: {
    color: "black",
    fontSize: 13,
    fontWeight:'400',
    maxWidth:'80%',
    marginLeft: 3,
    marginTop: 10,
  },
  container: {
    borderWidth: 3,
    borderColor: 'blue',
    borderRadius: 10,
    padding: 10,
    marginHorizontal:20,
    marginVertical:20,
    justifyContent: 'center',
    alignItems: 'center'
  },
})
