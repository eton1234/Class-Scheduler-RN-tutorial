import React from 'react';
import * as Yup from 'yup';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import Form from '../components/expo-form-starter-main/Form';
const Field = ({label, value}) => { 
    return (
        <View style={styles .fieldContainer}>
            <Text style={styles.label}> {label} </Text>
            <Text style={styles.field}> {value} </Text>
         </View>
    );
};
const validationSchema = Yup.object().shape({
    id: Yup.string()
      .required()
      .matches(/(F|W|S)\d{3,}/, 'Must be a term and 3-digit number')
      .label('ID'),
    meets: Yup.string()
      .required()
      .matches(/(M|Tu|W|Th|F)+ +\d\d?:\d\d-\d\d?:\d\d/, 'Must be weekdays followed by start and end time')
      .label('Meeting times'),
    title: Yup.string()
      .required()
      .label('Title'),
  });
const CourseEditScreen = ({navigation, route}) => {
    const course = route.params.course;
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Form
                validationSchema={validationSchema}
                initialValues = {{
                        id: course.id,
                        meets: course.meets,
                        title: course.title,
                }}>

                    <Form.Field 
                        name="id"
                        leftIcon="identifier"
                        placeholder="F110"
                        autoCapitalize="none"
                        autoFocus={true}
                    />
                    <Form.Field
                        name="meets"
                        leftIcon="calendar-range"
                        placeholder="MThu 12:00-13:50"
                        autoCapitalize="none"
                    />
                    <Form.Field 
                        name="title"
                        leftIcon="format-title"
                        placeholder="Introduction to Programming"
                    />
                </Form>
                <Field label="ID" value={course.id} />
                <Field label="Meeting Times" value={course.meets} />
                <Field label="Title" value={course.title} />
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ccccb3',
    },
    field: {
        height: 40,
        width: 300,
        padding: 5,
        backgroundColor: 'white',
    },
    fieldContainer: {
        marginButton: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    label: {
        fontWeight: 'bold',
    }
});
export default CourseEditScreen;