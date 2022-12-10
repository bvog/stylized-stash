import { Outlet, Route, Routes } from "react-router-dom"
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
             
                
            </Route>
        </Routes>
    )
}

{/* <YarnList /> */}
