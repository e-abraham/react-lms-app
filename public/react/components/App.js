import React, { useState, useEffect } from 'react';
import {Route, Link 
} from 'react-router-dom'
import { ViewStudentContainer } from './ViewStudentContainer';
import { LoginContainer } from './LoginContainer';
import { EnrollStudent } from './EnrollStudent';

export const App = () => {

	const [newStudents, setNewStudents] = useState([]);

	function addStudent(student){
		console.log("New students: ", newStudents, "student to add: ", student);
		setNewStudents([...newStudents, student]);
		console.log("Updated new student list: ", newStudents)
		
	}

	

	return (
		<div>
			<Route exact path="/">
				<LoginContainer />
			</Route>
			<Route path="/viewStudents">
				<ViewStudentContainer newStudents={newStudents} />
			</Route>
			<Route path="/enrollStudent">
				<EnrollStudent addStudent={addStudent} newStudents={newStudents} />
			</Route>
		</div>
	)
}