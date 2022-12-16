import { Outlet, Route, Routes } from "react-router-dom"
import { ProjectList } from "../projects/ProjectList"
import { YarnList } from "../yarn/YarnList"



export const FamilyViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                  <Outlet />
                </>
            }> 

                <Route path="inventory" element={ <YarnList/> } />

                <Route path="projects" element={ <ProjectList/> } />  
             
                
            </Route>
        </Routes>
    )
}

{/* <YarnList /> */}
