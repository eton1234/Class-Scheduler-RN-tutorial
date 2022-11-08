  //Courselist componenet 
  import React, {useState} from 'react'
  import Course from './Course';
  import TermSelector from './TermSelector';
  import {ScrollView, View, StyleSheet} from 'react-native'

  const CourseList = ({courses}) => {
    //defines a view for multiple Course components mapped from courses
    const [selectedTerm, setSelectedTerm] = useState('Fall');
    //filter for selected Term
    const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
   // 

    return (
    <View>
      <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm}/>
      
      <ScrollView>
        <View style={styles.courseList}>
          {termCourses.map(course => <Course key={course.id} course={course} />)}
        </View>
      </ScrollView>
    </View>
    );
  };
//gets the term based of first letter course ids
const termMap = { F: 'Fall', W: 'Winter', S: 'Spring'};
const terms = Object.values(termMap);
const getCourseTerm = course => (
  termMap[course.id.charAt(0)]
);
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

