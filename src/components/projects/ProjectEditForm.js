import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import  '../yarn/Yarn.css'

export const ProjectEditForm = () => {
    // TODO: creat default state object

    const [project, setEditProject] = useState({
        name: "", //These properties are updated when the form is filled out by the customer.  These are default values set up in the initial state.
        yarnUsed: "",
        yarnAmountUsed: 0, //These are properties for each form field QUESTION: HOW DO I GET PROPERITES FOR SECONDARY KEYS - do not need secondary keys here - want all primary keys.
        pattern: "",
        description: "",
        img: ""

    })
  

    // TODO: What is the variable in which you stored the route parameter?
    const { projectId } = useParams() //Access the parameters of the current route
    const navigate = useNavigate() //Works like a refresh - allows you to navigate back to another page

    // TODO: Get the ticket state from the API.
    useEffect(() => {
        fetch(`http://localhost:8088/projects/${projectId}`)
        .then(response => response.json())
        .then((data) => {
            setEditProject(data)
        })

    }, [ projectId ])


    
    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        if (project.name && project.yarnUsed && project.yarnAmountUsed > 0 && project.pattern && project.description && project.img) {    

        // TODO: Write the fetch for the PUT request to replace the object being edited
        fetch(`http://localhost:8088/projects/${project.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(project)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/projects")
            })
        } else {
            window.alert("Please fill out the form!")
        }
    }




     //Button to delete a ticket:
     const deleteButton = (clickEvent) => {
       clickEvent.preventDefault()
                fetch(`http://localhost:8088/projects/${project.id}`, {
                    method:"DELETE"
                })
                    .then(() => {
                       navigate("/projects")
                    })
            }
        
       

    


    return <form className="editForm">
        <h2 className="editForm__title">Update my Projects!</h2>  

        <fieldset> 
                <div className="form-group">
                    <label htmlFor="project">Project:   </label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Project"
                        value={project.name}
                        onChange={
                            (evt) => {
                                const copy = {...project} //Created copy of existing state.
                                copy.name =  evt.target.value//QUESTION: WHAT KEY/VALUE PAIR IS NEEDED HERE?? Modifying copy made in above line.  New value will be what is typed in form - whatever is currently in input field.
                                setEditProject(copy) //Passing copy to be the new state.
                            }

                        } />
                </div>
            </fieldset>

            <fieldset> 
                <div className="form-group">
                    <label htmlFor="yarnUsed">Yarn Used:   </label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="yarnUsed"
                        value={project.yarnUsed}
                        onChange={
                            (evt) => {
                                const copy = {...project} //Created copy of existing state.
                                copy.yarnUsed =  evt.target.value//QUESTION: WHAT KEY/VALUE PAIR IS NEEDED HERE?? Modifying copy made in above line.  New value will be what is typed in form - whatever is currently in input field.
                                setEditProject(copy) //Passing copy to be the new state.
                            }

                        } />
                </div>
            </fieldset>


        <fieldset> 
                <div className="form-group">
                    <label htmlFor="yarnAmountUsed">Amount of Yarn Used:   </label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Yarn Amount Used"
                        value={project.yarnAmountUsed}
                        onChange={
                            (evt) => {
                                const copy = {...project} //Created copy of existing state.
                                copy.yarnAmountUsed =  evt.target.value//QUESTION: WHAT KEY/VALUE PAIR IS NEEDED HERE?? Modifying copy made in above line.  New value will be what is typed in form - whatever is currently in input field.
                                setEditProject(copy) //Passing copy to be the new state.
                            }

                        } />
                </div>
        </fieldset>

        <fieldset> 
                <div className="form-group">
                    <label htmlFor="pattern">Pattern:   </label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Pattern"
                        value={project.pattern}
                        onChange={
                            (evt) => {
                                const copy = {...project} //Created copy of existing state.
                                copy.pattern =  evt.target.value//QUESTION: WHAT KEY/VALUE PAIR IS NEEDED HERE?? Modifying copy made in above line.  New value will be what is typed in form - whatever is currently in input field.
                                setEditProject(copy) //Passing copy to be the new state.
                            }

                        } />
                </div>
            </fieldset>

            <fieldset> 
                <div className="form-group">
                    <label htmlFor="notes">Description:   </label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        placeholder="Description"
                        value={project.description}
                        onChange={
                            (evt) => {
                                const copy = {...project} //Created copy of existing state.
                                copy.description =  evt.target.value//QUESTION: WHAT KEY/VALUE PAIR IS NEEDED HERE?? Modifying copy made in above line.  New value will be what is typed in form - whatever is currently in input field.
                                setEditProject(copy) //Passing copy to be the new state.
                            }

                        } />
                </div>
            </fieldset>

            <fieldset> 
                <div className="form-group">
                    <label htmlFor="picture">Picture:   </label>
                    <input
                        required
                        type="img"
                        className="form-control"
                        placeholder="Picture"
                        value={project.img}
                        onChange={
                            (evt) => {
                                const copy = {...project} //Created copy of existing state.
                                copy.img =  evt.target.value//QUESTION: WHAT KEY/VALUE PAIR IS NEEDED HERE?? Modifying copy made in above line.  New value will be what is typed in form - whatever is currently in input field.
                                setEditProject(copy) //Passing copy to be the new state.
                            }

                        } />
                </div>
            </fieldset>

                       
      <div className="both-project-buttons">  
        <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn-project-update">
            Update Project
        </button>


        <button
            onClick={(clickEvent) => deleteButton(clickEvent)}
            className="btn-project-delete">
            Delete Project
        </button>

    </div>

    </form>
}