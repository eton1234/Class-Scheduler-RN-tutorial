  import React, {useState, useEffect} from 'react';
  import UserContext from './UserContext';
  //for Navigation Controller
  import 'react-native-gesture-handler';
  import { NavigationContainer, StackActions} from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  //custom componenets
  import ScheduleScreen from './screens/ScheduleScreen.js';
  import CourseDetailScreen from './screens/CourseDetailScreen.js';
  import CourseEditScreen from './screens/CourseEditScreen.js';
  //Main component
  
  const App = () => {
    const [user, setUser ] = useState({role:'admin'});
    const Stack = createStackNavigator();
    return (
      <UserContext.Provider value = {user}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="ScheduleScreen" 
                          component = {ScheduleScreen}
                          options={{  title: 'Schedule' }}/>

            <Stack.Screen name="CourseDetailsScreen"
                              component = {CourseDetailScreen}
                              options={{title: "Course Details"}} />
            <Stack.Screen name="CourseEditScreen"
            component={CourseEditScreen}
            options={{ title: 'Course Editor'}} 
          />
          </Stack.Navigator>
        </NavigationContainer>
      </UserContext.Provider>
    );
  }

  
  export default App;