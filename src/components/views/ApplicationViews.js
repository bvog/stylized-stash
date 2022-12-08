import { BonnieViews } from "./BonnieViews"
import { FamilyViews } from "./FamilyViews"





export const ApplicationViews = () => {
	
    const currentStashUser = localStorage.getItem("stash_user")
    const stashUserObject = JSON.parse(currentStashUser)

    if (stashUserObject.administrator) {
        
        return <BonnieViews />
    }
    else {
        
        return <FamilyViews />
    }
    
}

