import React, {useContext, useState, useEffect} from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CourseList from '../components/CourseList';
import CourseEditScreen from './CourseEditScreen';
import UserContext from '../UserContext';
  //Main component
  const ScheduleScreen = ({navigation}) => {
    const [schedule, setSchedule] = useState({title: '', courses: []});
    const url = 'https://courses.cs.northwestern.edu/394/data/cs-courses.php';
    const user = useContext(UserContext);
    const canEdit = user && user.role  === 'admin';
    const view = (course) => {
      navigation.navigate( canEdit ? 'CourseEditScreen': 'CourseDetailsScreen', {course});
    };
    useEffect(() => {
      const fetchSchedule = async () => {
        const response = await fetch(url);
        if (!response.ok) throw response;
        const json = await response.json();
        setSchedule(json);
      }
      fetchSchedule();
    } , []);
    return (

      <SafeAreaView style={styles.container}>
        <Banner title={schedule.title} />
        <CourseList courses={schedule.courses} view={view}/>
      </SafeAreaView>
    );
  }

  export default ScheduleScreen;
 //banner component
  const Banner = ({title}) => (
    <Text style={styles.bannerStyle}> {title || '[Loading...]'} </Text>
  );



  //CSS Stylesheet
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 20,
    },
    bannerStyle: {
      color: '#888',
      fontSize: 32,
    }, 
  });