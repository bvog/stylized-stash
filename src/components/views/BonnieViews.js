import { Outlet, Route, Routes } from "react-router-dom"
import { YarnList } from "../yarn/YarnList"
import { YarnAddForm } from "../yarn/YarnAddForm"
import { YarnEditForm } from "../yarn/YarnEditForm"
import { ProjectList } from "../projects/ProjectList"
import { ProjectEditForm } from "../projects/ProjectEditForm"
import { ProjectAddForm } from "../projects/ProjectAddForm"



export const BonnieViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                  <Outlet /> 
                </>
            }>
                <Route path="create" element={ <YarnAddForm/> } />

                <Route path="inventory" element={ <YarnList/> } />

                <Route path="inventory/update/:yarnId" element={ <YarnEditForm /> } />   

                <Route path="projects" element={ <ProjectList/> } />

                <Route path="projects/update/:projectId" element={ <ProjectEditForm /> } />

                <Route path="projects/create" element={ <ProjectAddForm /> } />             
                
            </Route>
        </Routes>
    )
}

//Outlet stops default default is whatever is on page load - outlet allows child routes to inherit route path

// "/" allows for multiple pages 8088/ takes you to homepage 

// can put tagline, title, etc. here - it will appear on every single page.  Must put above Outlet
