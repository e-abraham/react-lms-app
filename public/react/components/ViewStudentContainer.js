import React, { useState, useEffect } from "react";
import { StudentTable } from "./StudentTable";
import {Route, Link 
} from 'react-router-dom';

export const ViewStudentContainer = (props) => {


	return (
		<div className="container">
			<header className="header">
				<div className="header-info">
					<Link to="/" className="navbar-logo" alt="comp logo" >
						{/* class "fas fa-laptop-code" refs online stylesheet */}
						<i id="logo" className="fas fa-laptop-code" />
					</Link>
					<h2>MHAC</h2>
				</div>
				<nav className="header-nav">
                    <h2 className="nav-item">
		    			<Link to="/viewStudents" >
                        	View Students
						</Link>
			
                    </h2>
                    <h2 className="nav-item">
		    			<Link to="/enrollStudent">
                        	Enroll Students
		    			</Link>
                    </h2>
					<h2 className="nav-item">
					<Link to="/">
						Log Out
					</Link>
                    </h2>
                    <img src="https://icons-for-free.com/iconfiles/png/512/avatar+person+profile+user+icon-1320166578424287581.png" className="icon-avatar2" alt="avatar icon"/>
				</nav>
			</header>
			<main className="main">
				<StudentTable newStudents={props.newStudents} />
			</main>
			<footer className="footer">
			</footer>
		</div>
	)


}
