import React, { useState } from "react";
import {Route, Link 
} from 'react-router-dom';

export const LoginContainer = (props) => {


	return (
		<div>	
			<div className="header-container">
				<header className="header">
					<div className="header-info">
					<Link to="/" className="navbar-logo" >
						{/* class "fas fa-laptop-code" refs online stylesheet */}
						<i id="logo" className="fas fa-laptop-code" />
					</Link>
					<h2>MHAC</h2>
					</div>
				</header>
        		<h2 className="teacher-connect">Teachers Connect</h2>
    		</div>
    		<div className="main-container">
        		<div className="avatar-container">
            		<img className="icon-avatar"  src="https://icons-for-free.com/iconfiles/png/512/avatar+person+profile+user+icon-1320166578424287581.png" alt="person logo"/>
        		</div>
        
        		<div className="login">
            		<form action="">
                		<label htmlFor="username">Username: </label>
						<input className="login-input" id="username" placeholder="Username" type="text" required/> <br/>
                		<label htmlFor="password">Password: </label>
						<input className="login-input" id="password" placeholder="Password" type="text" required/><br/>
						<Link to="/viewStudents">
                		<button className="login-btn" type="submit">Login</button>
						</Link>
            		</form>
        		</div>
    		</div>
		</div>
	)

}