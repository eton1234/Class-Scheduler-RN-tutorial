import React from 'react';

import {StyleSheet, Text, TouchableOpacity } from 'react-native';
//arrow function to get coursNumb
const getCourseNumber = course => (
course.id.slice(1)
);
//actual componenet 
const Course = ({course}) => (
    <TouchableOpacity style={styles.courseButton}>
      <Text style={styles.courseText}> 
        {`CS ${getCourseNumber(course)} \n ${course.meets}`} 
      </Text>
    </TouchableOpacity>
  );
  //stylesheet
const styles = StyleSheet.create({
    courseButton: {
        flex: 1,
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
    courseText:{
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
    },
});
export default Course;