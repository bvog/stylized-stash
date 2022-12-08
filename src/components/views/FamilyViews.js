import { Outlet, Route, Routes } from "react-router-dom"
import { YarnList } from "../yarn/YarnList"



export const FamilyViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                  <YarnList />

                    <Outlet />
                </>
            }>              
                
            </Route>
        </Routes>
    )
}
