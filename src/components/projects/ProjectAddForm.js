import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import '../yarn/Yarn.css'

export const ProjectAddForm = () => {

    /*
       TODO: Add the correct default properties to the
       initial state object
   */
    const [project, update] = useState({
        name: "", //These properties are updated when the form is filled out by the customer.  These are default values set up in the initial state.
        yarnUsed: "",
        yarnAmountUsed: 0, //These are properties for each form field QUESTION: HOW DO I GET PROPERITES FOR SECONDARY KEYS - do not need secondary keys here - want all primary keys.
        pattern: "",
        description: "",
        img: ""

    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */

    const navigate = useNavigate() //Works like a refresh - allows you to navigate back to another page



    const handleSaveButtonClick = (event) => { //function tied to button in return below
        event.preventDefault()



        if (project.name && project.yarnUsed && project.yarnAmountUsed > 0 && project.pattern && project.description && project.img) {
            // TODO: Create the object to be saved to the API

            const projectToSendToAPI = {
                name: project.name,
                yarnUsed: project.yarnUsed,
                yarnAmountUsed: project.yarnAmountUsed,
                pattern: project.pattern,
                description: project.description,
                img: project.img


            }
            // TODO: Perform the fetch() to POST the object to the API

            return fetch('http://localhost:8088/projects', { //URL sending post(newly created object) to
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(projectToSendToAPI)
            })
                .then(response => response.json())
                .then(() => { //Directing user back to ticket list to see new ticket that has been created
                    navigate("/projects") //navigates you back to inventory page and automatically refreshes screen so don't have to press refresh
                })
        } else {

            window.alert("Please fill out the form!")
        }
    }

    return ( //Two form fields, one for description and a checkbox for emergencies.  Each w/in a <fieldset></fieldset>
        <form className="addYarnForm">
            <h2 className="addYarnForm__title">Add to my Projects!</h2>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Project:   </label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        placeholder=""
                        value={project.name} //QUESTION: WHAT IS THE KEY/VALUE PAIR NEEDED HERE??
                        onChange={
                            (evt) => {
                                const copy = { ...project } //Created copy of existing state.
                                copy.name = evt.target.value//QUESTION: WHAT KEY/VALUE PAIR IS NEEDED HERE?? Modifying copy made in above line.  New value will be what is typed in form - whatever is currently in input field.
                                update(copy) //Passing copy to be the new state.
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
                        placeholder=""
                        value={project.yarnUsed} //QUESTION: WHAT IS THE KEY/VALUE PAIR NEEDED HERE??
                        onChange={
                            (evt) => {
                                const copy = { ...project } //Created copy of existing state.
                                copy.yarnUsed = evt.target.value//QUESTION: WHAT KEY/VALUE PAIR IS NEEDED HERE?? Modifying copy made in above line.  New value will be what is typed in form - whatever is currently in input field.
                                update(copy) //Passing copy to be the new state.
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
                        placeholder=""
                        value={project.yarnAmountUsed} //QUESTION: WHAT IS THE KEY/VALUE PAIR NEEDED HERE??
                        onChange={
                            (evt) => {
                                const copy = { ...project } //Created copy of existing state.
                                copy.yarnAmountUsed = evt.target.value//QUESTION: WHAT KEY/VALUE PAIR IS NEEDED HERE?? Modifying copy made in above line.  New value will be what is typed in form - whatever is currently in input field.
                                update(copy) //Passing copy to be the new state.
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
                        placeholder=""
                        value={project.pattern} //QUESTION: WHAT IS THE KEY/VALUE PAIR NEEDED HERE??
                        onChange={
                            (evt) => {
                                const copy = { ...project } //Created copy of existing state.
                                copy.pattern = evt.target.value//QUESTION: WHAT KEY/VALUE PAIR IS NEEDED HERE?? Modifying copy made in above line.  New value will be what is typed in form - whatever is currently in input field.
                                update(copy) //Passing copy to be the new state.
                            }

                        } />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description:   </label>
                    <input
                        required
                        type="text"
                        className="form-control"
                        placeholder=""
                        value={project.description} //QUESTION: WHAT IS THE KEY/VALUE PAIR NEEDED HERE??
                        onChange={
                            (evt) => {
                                const copy = { ...project } //Created copy of existing state.
                                copy.description = evt.target.value//QUESTION: WHAT KEY/VALUE PAIR IS NEEDED HERE?? Modifying copy made in above line.  New value will be what is typed in form - whatever is currently in input field.
                                update(copy) //Passing copy to be the new state.
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
                        placeholder=""
                        value={project.img}
                        onChange={
                            (evt) => {
                                const copy = { ...project } //Created copy of existing state.
                                copy.img = evt.target.value//QUESTION: WHAT KEY/VALUE PAIR IS NEEDED HERE?? Modifying copy made in above line.  New value will be what is typed in form - whatever is currently in input field.
                                update(copy) //Passing copy to be the new state.
                            }

                        } />
                </div>
            </fieldset>

            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)} //To invoke the handleSaveButtonClick function must pass clickEvent - do this because event was passed to function above.
                className="btn-add">
                Add my Project!
            </button>
        </form>
    )
}