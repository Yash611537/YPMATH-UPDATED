import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity
} from "react-native";
import FontAwesom from 'react-native-vector-icons/FontAwesome'
import AntDesign from "react-native-vector-icons/AntDesign"
export default function AnswerLayout({route}) {
  const [isIconActive, setIsIconActive] = useState(false);
  const [iconActive, setIconActive] = useState(false);
  const [modalquestVisible, setModalquestVisible] = useState(false);
  const [modalansVisible, setModalansVisible] = useState(false);

  const handleIconPress = () => {
    setIsIconActive(!isIconActive);
  };
  console.log(route)
  return (
    <ScrollView>
      <View>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.headtopic}>Topic:</Text>
        <Text style={styles.subheadtopic}>{route.params.topic}</Text>

      </View>
        <View style={styles.inline}>
          <Text style={styles.subdiff}>({route.params.subject}-{route.params.difficulty})</Text>
          <Pressable
                style={styles.icon}
                onPress={() => handleIconPress("bookmark")}
              >
                <FontAwesom
                  
                  name={isIconActive ? "bookmark" : "bookmark-o"}
                  size={30}
                  color={"black"}
                />
          </Pressable>
        </View>
        <View style={styles.outerContainer}>
        <Text style={styles.questTxt}>Question</Text>
          <View style={styles.qsrectangle}>
          <TouchableOpacity onPress={() => setModalquestVisible(true)}>
              <Image
                style={styles.qsimage}
                source={{uri: route.params.questImg}}
              ></Image>
            </TouchableOpacity>
            </View>
          </View>
          </View>
        <Text style={styles.ansTxt}>Answer</Text>
          <View style={styles.ansrectangle}>
          <TouchableOpacity onPress={() => setModalansVisible(true)}>
              <Image
                style={styles.qsimage}
                source={{uri: route.params.ansImg}}
                resizeMode="contain"
              ></Image>
            </TouchableOpacity>
            </View>
          <Pressable style={styles.trans}>
            <Text style={{ marginLeft: 2, fontWeight:'bold' }}>Transcript of this question:</Text>
            <Text style={{ marginLeft: 2 }}>{route.params.transcript}</Text>
          </Pressable>



          <Modal
          animationType="fade"
          visible={modalquestVisible}
          onRequestClose={() => setModalquestVisible(false)}
        >
        <TouchableOpacity style={styles.closeButton} onPress={() => setModalquestVisible(false)}>
          <AntDesign name="close" size={30} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalquestVisible(false)}>
            <Image source={{uri: route.params.questImg}} style={styles.modalImage} />
          </TouchableOpacity>
        </Modal>

        <Modal
          animationType="fade"
          visible={modalansVisible}
          onRequestClose={() => setModalansVisible(false)}
        >
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalansVisible(false)}>
          <AntDesign name="close" size={30} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setModalansVisible(false)}>
            <Image source={{uri: route.params.ansImg}} style={styles.modalImage} />
          </TouchableOpacity>
        </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  ansimage: {
    width: "100%",
    maxHeight: "80%",
    // flex: 2,
    alignSelf: "center",
    position: "relative",
    // flex: 2,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20
  },
  ansrectangle: {
    width: "90%",
    Height: 'auto',
    backgroundColor: "#F6F8FA",
    justifyContent: "space-between",
    borderColor: "#45bac4",
    borderWidth: 3,
    shadowColor: "light-grey",
    elevation: 5,
    alignSelf: "center",
    // flexDirection: "column",
  },
  down: {
    flexDirection: "column",
  },
  icon: {
    marginRight: 20,
    marginTop: -20,
    marginBottom:10,
  },
  inline: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:'center',
    marginBottom:10
    // flex: 1,
  },
  innertext: {
    color: "black",
    fontSize: 15,
    marginLeft: 2,
  },
  outerContainer: {
    flex: 1,
    maxHeight: "25%",
  },
  modalImage: {
    width: '100%',
    height: '90%',
    resizeMode: 'contain'
  },
  outline: {
    alignSelf: "center",
    borderColor: "black",
    borderRadius: 10,
  },
  qsimage: {
    // width: "100%",
    width: '100%', 
    height: 200,
    resizeMode: 'contain',
    // flex: 1,
    // maxHeight: "80%",
    alignSelf: "center",
    // position: "relative",
    // flex: 5 / 7,
  },
  qsrectangle: {
    width: '90%', 
    Height: 'auto',
    backgroundColor: "#F6F8FA",
    margin: 20,
    marginTop: 10,
    borderColor: "#ffe066",
    borderWidth: 3,
    shadowColor: "light-grey",
    elevation: 5,
    // flexDirection: "column",
  },
  subdiff: {
    color: "black",
    fontSize: 18,
    marginLeft: 20,
  },
  headtopic: {
    color: "black",
    fontSize: 20,
    marginTop: 50,
    marginLeft: 20,
    fontWeight: "bold",
  },
  subheadtopic: {
    color: "black",
    fontSize: 20,
    marginTop: 50,
    marginLeft: 5,
    fontWeight: "400",
  },
  trans: {
    alignSelf: "center",
    height: "auto",
    width: "90%",
    marginTop: 15,
    borderColor: "#000000",
    borderStyle: "solid",
    padding:10,
    borderWidth: 1,
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  questTxt:{
    color:'#F4C430',
    fontSize:25,
    width:'90%',
    marginLeft:20,
    fontWeight:'500'
  },
  ansTxt:{
    color:"#45bac4",
    fontSize:25,
    width:'90%',
    marginLeft:20,
    fontWeight:'500'
  }
});
