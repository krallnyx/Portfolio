
import React from 'react'  
import {NavLink} from 'react-router-dom'

function HeaderNavbar () {  
    return (
        <div>
        	<nav className="navbar navbar-expand-md bg-dark navbar-dark rounded-0 shadow-lg">
    			<a className="navbar-brand" href="/">
					Arnaud Jeanroch
				</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div id="navbarContent" className="collapse navbar-collapse">
					<ul className="navbar-nav mx-2 my-3 navbar-right">
						<li className="nav-item ">
            				<NavLink className="text-white mx-4" to="/" exact>Home</NavLink>
						</li>
						<li className="nav-item">
           		 			<NavLink className="text-white mx-4" to="/About" exact>About</NavLink>
						</li>
            			<li className="nav-item">
            				<NavLink className="text-white mx-4" to="/Contact" exact>Contact</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
    )  
}  
export default HeaderNavbar  