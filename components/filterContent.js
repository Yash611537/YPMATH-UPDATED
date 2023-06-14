import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { SelectList } from 'react-native-dropdown-select-list';

export default function FilterContent() {
  const [subject, setSubject] = useState();
  const [topic, setTopic] = useState();
  const [difficulty, setDifficulty] = useState();
  // const{title='SUBMIT'}=props;
  

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
      { key: "4", value: "Statistics" },
      { key: "5", value: "Probability" },
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

  return (
    <View>
      <Text style={styles.filter}>Filter Content</Text>
      <View style={{paddingHorizontal: 20}}>
        <SelectList
          setSelected={setSubject}
          boxStyles={{ marginTop: 20, borderRadius: 1, paddingHorizontal: 20, paddingVertical:20}}
          data={subjects}
          placeholder="Choose Subject"
        />
        <SelectList
          setSelected={setTopic}
          boxStyles={{ marginTop: 20, borderRadius: 1, paddingHorizontal: 20, paddingVertical:20}}
          data={topics[subject]}
          placeholder="Choose Topic"
        />
        <SelectList
          setSelected={setDifficulty}
          boxStyles={{ marginTop: 20, borderRadius: 1, paddingHorizontal: 20, paddingVertical:20}}
          data={difficulties}
          placeholder="Choose Difficulty"
        />
        </View>
        <Pressable 
          style={styles.buttonreg}>
            <Text style= {styles.regtext}>SUBMIT</Text>
        </Pressable>
    </View>
    )
  }

const styles=StyleSheet.create({
  buttonreg: {
    alignSelf: 'center',
    justifyContent: 'center',
    height:'8%',
    width: '35%',
    // marginLeft: 10,
    marginTop: 30,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 3,
    backgroundColor: '#fadd66',
    // marginBottom: 15
  },
  filter:{
    fontSize: 23,
    color:'black',
    fontWeight:'bold',
    marginTop: 70,
    marginLeft:20
  },
  regtext:{
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center'
  },
})