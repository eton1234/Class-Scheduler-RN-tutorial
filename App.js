  import React, {useState, useEffect} from 'react';
  import 'react-native-gesture-handler';
  import { NavigationContainer, StackActions} from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';

  import ScheduleScreen from './screens/ScheduleScreen.js';
  const schedule = { //json data i think
    "title": "CS Courses for 2018-2019",
    //array of courses
    
    "courses": [
      {
        "id": "F101", 
        "title": "Computer Science: Concepts, Philosophy, and Connections",
        "meets": "MWF 11:00-11:50"
      },
      {
        "id": "F110",
        "title": "Intro Programming for non-majors",
        "meets": "MWF 10:00-10:50"
      },
      {
        "id": "F111",
        "title": "Fundamentals of Computer Programming I",
        "meets": "MWF 13:00-13:50"
      },
      {
        "id": "F211",
        "title": "Fundamentals of Computer Programming II",
        "meets": "TuTh 12:30-13:50"
      }
    ]
  };


  //Main component
  const App = () => {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="ScheduleScreen" 
                          component = {ScheduleScreen}
                          options={{  title: 'Schedule' }}/>
        </Stack.Navigator>
      </NavigationContainer>
       
    );
  }

  
  export default App;