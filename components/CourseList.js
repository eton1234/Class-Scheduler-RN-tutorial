  //Courselist componenet 
  import React, {useState} from 'react'
  import {ScrollView, View, StyleSheet} from 'react-native'
  import {getCourseTerm} from '../utils/course.js';
  import Course from './Course';
  import {hasConflict} from '../utils/course.js';
  import TermSelector from './TermSelector';
  const CourseList = ({courses, view}) => {
    //defines a view for multiple Course components mapped from courses
    const [selectedTerm, setSelectedTerm] = useState('Fall');
    //filter for selected Term
    const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));

    return (
    <View>
      <ScrollView>
        <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
        <CourseSelector courses={termCourses} view={view}/>
      </ScrollView>
    </View>
    );
  };
//gets the term based of first letter course ids
const termMap = { F: 'Fall', W: 'Winter', S: 'Spring'};
const terms = Object.values(termMap);

const CourseSelector = ({courses,view}) => {
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
                      isSelected={selected.includes(course)} select={toggle}
                      view={view} />
              ))
          }
       </View>
  );
};

const styles = StyleSheet.create({
    courseList: {
        flex: 1, 
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
}); 
export default CourseList;

