import { StyleSheet, Text, View, Pressable, Image, LogBox } from 'react-native';
import Homepage from './Screens/HomePage';
import Login from './Screens/login';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import OnlineTuitions from './Screens/onlineTuitions';
import SignUp from './Screens/signUp';
import React, { useState, useEffect } from 'react';
import MultiSelectComponent from './Screens/addQuestion';
import QuestionPage from './Screens/questions';
import AddQuestion from './Screens/addQuestion';
import AnswerPage from './Screens/answerPage';
import Footer from './components/footer';
import ProfilePage from './Screens/profilePage';
import { Button } from 'react-native-elements';
import { auth } from './firebase';
import Start from './Screens/start';
import UploadData from './Screens/upload';
import Saved from './Screens/savedQuestions';


const Stack = createStackNavigator()


function App() {
  return (
    <Stack.Navigator>
    <Stack.Screen options={{headerShown: false}} name="Saved" component={Saved}/>             
      <Stack.Screen options={{headerShown: false}} name="Start" component={Start}/>
      <Stack.Screen options={{headerShown: false}} name='login' component={Login} />
      <Stack.Screen options={{headerShown: false}} name='home' component={Homepage} />
      <Stack.Screen options={{headerShown: false}} name='onlineTuitions' component={OnlineTuitions} />
      <Stack.Screen options={{headerShown: false}} name='Sign up' component={SignUp} />
      <Stack.Screen options={{headerShown: false}} name='Question Page' component={QuestionPage} />
      <Stack.Screen options={{headerShown: false}}  name="Add question" component={AddQuestion}/>    
      <Stack.Screen name="AnswerPage" component={AnswerPage}/>
      <Stack.Screen options={{headerShown: false}} name="profilePage" component={ProfilePage}/>
      <Stack.Screen name="UploadData" component={UploadData}/>        
    </Stack.Navigator>
    
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
export default ()=> {
  LogBox.ignoreLogs(['Warning: Async Storage has been extracted from react-native core']);
  const [user, setUser] = useState(null);
  const checkUserAuth = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        return (
          <NavigationContainer>
            <Homepage/>
            <Footer/>
          </NavigationContainer>
        )
      } else {
        return (
          <NavigationContainer>
            <SignUp/>
            <Footer/>
          </NavigationContainer>
        )
        // user is signed out
      }
    });
  checkUserAuth()  
  };
  
  return (
    <NavigationContainer>
      <App/>
    </NavigationContainer>
  )
}

