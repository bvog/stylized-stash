import { BonnieNav } from "./BonnieNav"
import { FamilyNav } from "./FamilyNav"
//import "./NavBar.css"

export const NavBar = () => {
    const currentStashUser = localStorage.getItem("stash_user")
    const stashUserObject = JSON.parse(currentStashUser)

    if (stashUserObject.administrator) { //How does it know that administrator is true?
        
        return <BonnieNav />
    }
    else {
       
        return <FamilyNav />
    }
    
}
