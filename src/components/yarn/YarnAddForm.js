import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const YarnAddForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [yarn, update] = useState({
        brandNameId: 0, //These properties are updated when the form is filled out by the customer.  These are default values set up in the initial state.
        typeId: 0,
        yardAmount: 0, //These are properties for each form field QUESTION: HOW DO I GET PROPERITES FOR SECONDARY KEYS??
        colorId: 0,
        notes: "",
        price: 0,
        img: ""

    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
    const navigate = useNavigate()
    const currentYarnUser = localStorage.getItem("yarn_user")
    const yarnUserObject = JSON.parse(currentYarnUser)

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // TODO: Create the object to be saved to the API
/* 
    "userId": 3,
    "description": "Vero est adipisci sed natus quasi consectetur occaecati. Modi maxime sunt officia cumque. Vel at culpa. Sint accusamus deserunt dolorem qui.",
    "emergency": true,
    "dateCompleted": ""
*/
        const yarnToSendToAPI = {
            userId: yarnUserObject.id,
            description: yarn.description,
            
        }
        // TODO: Perform the fetch() to POST the object to the API

        return fetch('http://localhost:8088/serviceTickets', { //URL sending post(newly created object) to
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(yarnToSendToAPI)
        }) 
            .then(response => response.json())
            .then(() => { //Directing user back to ticket list to see new ticket that has been created
                navigate("/tickets")
            })
    }

    return ( //Two form fields, one for description and a checkbox for emergencies.  Each w/in a <fieldset></fieldset>
        <form className="addYarnForm">
            <h2 className="addYarnForm__title">Add to Stash!</h2>
            <fieldset> 
                <div className="form-group">
                    <label htmlFor="brandName">Brand Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Brand Name"
                        value={yarn.brandName} //QUESTION: WHAT IS THE KEY/VALUE PAIR NEEDED HERE??
                        onChange={
                            (evt) => {
                                const copy = {...yarn} //Created copy of existing state.
                                copy.brandName =  evt.target.value//QUESTION: WHAT KEY/VALUE PAIR IS NEEDED HERE?? Modifying copy made in above line.  New value will be what is typed in form - whatever is currently in input field.
                                update(copy) //Passing copy to be the new state.
                            }

                        } />
                </div>
            </fieldset>

            <fieldset> 
                <div className="form-group">
                    <label htmlFor="type">Type:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Type"
                        value={yarn.type} //QUESTION: WHAT IS THE KEY/VALUE PAIR NEEDED HERE??
                        onChange={
                            (evt) => {
                                const copy = {...yarn} //Created copy of existing state.
                                copy.type =  evt.target.value//QUESTION: WHAT KEY/VALUE PAIR IS NEEDED HERE?? Modifying copy made in above line.  New value will be what is typed in form - whatever is currently in input field.
                                update(copy) //Passing copy to be the new state.
                            }

                        } />
                </div>
            </fieldset>

            <fieldset> 
                <div className="form-group">
                    <label htmlFor="yardAmount">Amount in Yards:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Yard Amount"
                        value={yarn.yardAmount} //QUESTION: WHAT IS THE KEY/VALUE PAIR NEEDED HERE??
                        onChange={
                            (evt) => {
                                const copy = {...yarn} //Created copy of existing state.
                                copy.yardAmount =  evt.target.value//QUESTION: WHAT KEY/VALUE PAIR IS NEEDED HERE?? Modifying copy made in above line.  New value will be what is typed in form - whatever is currently in input field.
                                update(copy) //Passing copy to be the new state.
                            }

                        } />
                </div>
            </fieldset>

            <fieldset> 
                <div className="form-group">
                    <label htmlFor="color">Color:</label>
                    <input
                        required autoFocus
                        type="text" //QUESTION: HOW DO I MAKE THIS A DROP DOWN MENU??
                        className="form-control"
                        placeholder="Color"
                        value={yarn.color} //QUESTION: WHAT IS THE KEY/VALUE PAIR NEEDED HERE??
                        onChange={
                            (evt) => {
                                const copy = {...yarn} //Created copy of existing state.
                                copy.color =  evt.target.value//QUESTION: WHAT KEY/VALUE PAIR IS NEEDED HERE?? Modifying copy made in above line.  New value will be what is typed in form - whatever is currently in input field.
                                update(copy) //Passing copy to be the new state.
                            }

                        } />
                </div>
            </fieldset>
            
            <fieldset> 
                <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Price"
                        value={yarn.price} //QUESTION: WHAT IS THE KEY/VALUE PAIR NEEDED HERE??
                        onChange={
                            (evt) => {
                                const copy = {...yarn} //Created copy of existing state.
                                copy.price =  evt.target.value//QUESTION: WHAT KEY/VALUE PAIR IS NEEDED HERE?? Modifying copy made in above line.  New value will be what is typed in form - whatever is currently in input field.
                                update(copy) //Passing copy to be the new state.
                            }

                        } />
                </div>
            </fieldset>

            <fieldset> 
                <div className="form-group">
                    <label htmlFor="notes">Notes:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Notes"
                        value={yarn.notes} //QUESTION: WHAT IS THE KEY/VALUE PAIR NEEDED HERE??
                        onChange={
                            (evt) => {
                                const copy = {...yarn} //Created copy of existing state.
                                copy.notes =  evt.target.value//QUESTION: WHAT KEY/VALUE PAIR IS NEEDED HERE?? Modifying copy made in above line.  New value will be what is typed in form - whatever is currently in input field.
                                update(copy) //Passing copy to be the new state.
                            }

                        } />
                </div>
            </fieldset>

            <fieldset> 
                <div className="form-group">
                    <label htmlFor="picture">Picture</label>
                    <input
                        required autoFocus
                        type="img" //QUESTION: WHAT TYPE IS A PICTURE
                        className="form-control"
                        placeholder="Picture"
                        value={yarn.img} //QUESTION: WHAT IS THE KEY/VALUE PAIR NEEDED HERE??
                        onChange={
                            (evt) => {
                                const copy = {...yarn} //Created copy of existing state.
                                copy.img =  evt.target.value//QUESTION: WHAT KEY/VALUE PAIR IS NEEDED HERE?? Modifying copy made in above line.  New value will be what is typed in form - whatever is currently in input field.
                                update(copy) //Passing copy to be the new state.
                            }

                        } />
                </div>
            </fieldset>


            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)} //To invoke the handleSaveButtonClick function must pass clickEvent - do this because event was passed to function above.
                className="btn btn-primary">
                Add to Stash!
            </button>
        </form>
    )
}