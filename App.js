  import React from 'react';
  import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
    
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
    return (
      
      <SafeAreaView style={styles.container}>
        <Banner title={schedule.title} />
        <CourseList courses={schedule.courses} />
      </SafeAreaView>
    );
  }
  //banner component
  const Banner = ({title}) => (
    <Text style={styles.bannerStyle}> {title} </Text>
  );
  //Courselist componenet 
  const CourseList = ({courses}) => (
    //defines a view for multiple Course components mapped from courses
    <ScrollView>
      <View style={styles.courseList}>
        {courses.map(course => <Course key={course.id} course={course} />)}
      </View>
    </ScrollView>
  );
  //arrow function to get coursNumb
  const getCourseNumber = course => (
    course.id.slice(1)
  );
  //Course comp
  const Course = ({course}) => (
    <TouchableOpacity style={styles.courseButton}>
      <Text style={styles.courseText}> 
        {`CS ${getCourseNumber(course)} \n ${course.meets}`} 
      </Text>
    </TouchableOpacity>
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
    courseList: {
      flex: 1, 
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    courseButton: {
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
      height: 60,
      padding: 10,
      minWidth: 90,
      maxWidth: 90,
      backgroundColor: '#66b0ff',
    },
    courseText: {
      color: '#fff',
      fontSize: 12,
      textAlign: 'center',
    }
  });

  export default App;