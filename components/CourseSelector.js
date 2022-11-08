import React, {useState} from 'react';
import Course from './Course';
import {hasConflict} from '../utils/course.js';
import ReactNative, {Text, TouchableOpacity, View, ScrollView} from 'react-native';
const CourseSelector = ({courses}) => {
    //selected courses state 
    const [selected, setSelected] = useState([]);
    const toggle = course => setSelected(selected => (
        selected.includes(course) ? selected.filter(other => other  != course) : [...selected, course]));

    return (
        <View style={styles.courseList}>
            {
                courses.map(course => (

            
            
                    <Course key={course.id} course={course} 
                        isDisabled={hasConflict(course, selected)}
                        isSelected={selected.includes(course)} select={toggle} />
                ))
            }
         </View>
    );
};
export default CourseSelector;