import { Route, Routes } from "react-router-dom"
import { Login } from "../login/login"
import { NavBar } from "../nav/Navbar"
import { ApplicationViews } from "../views/ApplicationViews"
import { Authorized } from "../views/Authorized"




export const Stash = () => {
	return <Routes>
		<Route path="/login" element={<Login />} />
		

		<Route path="*" element={
			<Authorized>
				<>
					
					<NavBar />
					<ApplicationViews />
				</>
			</Authorized>

		} />
	</Routes>
}




//<Route path="/register" element={<Register />} />
//<ApplicationViews />