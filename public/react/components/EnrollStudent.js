import React, {useState} from "react";
import {Route, Link 
} from 'react-router-dom';

export const EnrollStudent = (props) => {
    
    const [student, setStudent] = useState({id : '', firstName : '', lastName : '', campus : ''});
    const [message, setMessage] = useState('')
    

    function handleFirst(e){
        const newStudent = student;
        newStudent.firstName = e.target.value;
        setStudent(newStudent);
        console.log("New student: ", student);
    }

    function handleLast(e){
        const newStudent = student;
        newStudent.lastName = e.target.value;
        setStudent(newStudent);
        console.log("New student: ", student);
    }

    function handleCampus(e){
        const newStudent = student;
        newStudent.campus = e.target.value;
        setStudent(newStudent);
        console.log("New student: ", student);
    }

    function handleSubmit(e){
        e.preventDefault()
        props.addStudent(student);
        e.target.reset();
        setMessage(`New Student ${student.firstName} ${student.lastName} successfully enrolled at the ${student.campus} Campus`)
        setStudent({id : '', firstName : '', lastName : '', campus : ''})
    }

    return (
        <div className="container">
            <header className="header">
				<div className="header-info">
                <Link to="/" className="navbar-logo" >
						{/* class "fas fa-laptop-code" refs online stylesheet */}
						<i id="logo" className="fas fa-laptop-code" />
					</Link>
					<h2>MHAC</h2>
				</div>
				<nav className="header-nav">
                    <h2 className="nav-item">
                    <Link to="/viewStudents">
                        View Students
                    </Link>
                    </h2>
                    <h2 className="nav-item">
                        <Link to="/enrollStudent">Enroll Students</Link>
                    </h2>
					<h2 className="nav-item">
                    <Link to="/">
						Log Out
                    </Link>
                    

                    </h2>
                    <img src="https://icons-for-free.com/iconfiles/png/512/avatar+person+profile+user+icon-1320166578424287581.png" className="icon-avatar2" alt="person icon"/>
				</nav>
			</header>
            <div className="container">
                <div>
                    <h2>Student Registration Form</h2>
                </div>
                <div>
                {
                    message ? (
                        <div>
                            <h4 className="enroll-msg">{message}</h4>
                            <Link to="/viewStudents">
                                <button className="enroll-btn">
                                    View Students
                                </button>
					        </Link>
                            <button className="enroll-btn" onClick={()=>{setMessage('')}}>Add another student</button>
                        </div>
                                ) : (
                                    <form onSubmit={handleSubmit} >
                                        <input id="first-name" className="input-enroll" placeholder="First Name" type="text" onChange={handleFirst} required />
                                        <br/>
                                        <input id="last-name" className="input-enroll" placeholder="Last Name" type="text" onChange={handleLast} required />
                                        <br/>
                                        <label htmlFor="campus">Location</label>
                                        <select name="campus" id="campus" defaultValue={'default'} onChange={handleCampus} required>
                                            <option value="default" disabled hidden>Select a campus</option>
                                            <option value="Mars">Mars</option>
                                            <option value="Moon">Moon</option>
                                            <option value="Saturn">Saturn</option>
                                        </select>
                                        <br/>
                                        <button className="enroll-btn" type="submit">Submit</button>
                                        <button className="enroll-btn" type="reset" value="reset" >Cancel</button>
                                    </form>
                                )
                }
                </div>
            </div>
        </div>
    )

}