import React from 'react';
import {getCourseNumber} from '../utils/course.js';
import {StyleSheet, Text, TouchableOpacity } from 'react-native';

//actual componenet 
const Course = ({course, isSelected, select, isDisabled, view}) => (
  <TouchableOpacity 
  style={styles[isSelected ? 'courseButtonSelected': isDisabled ? 'courseButtonDisabled' : 'courseButton']} 
  //should be isDisabled not disabled. tutorial is wrong
  onPress={() => {if (!isDisabled) select(course);}}
  onLongPress= {() => view(course)}>
    <Text style={styles.courseText}> 
      {`CS ${getCourseNumber(course)} \n ${course.meets}`} 
    </Text>
    </TouchableOpacity>
  );
  //stylesheet
const courseButtonBase = {
  flex: 1,
  borderRadius: 5,
  justifyContent: 'center',
  alignItems: 'center',
  margin: 10,
  height: 60,
  padding: 10,
  minWidth: 90,
  maxWidth: 90,
};
const styles = StyleSheet.create({
    courseButton: {
        ...courseButtonBase,
        backgroundColor: '#66b0ff',
    },
    courseButtonSelected: {
      ...courseButtonBase,
      backgroundColor: '#004a99',
    },
    courseButtonDisabled: {
      ...courseButtonBase,
      backgroundColor: '#d3d3d3',
    },
    courseText:{
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
    },
});
export default Course;