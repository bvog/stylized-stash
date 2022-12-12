import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import  './Yarn.css'

export const YarnAddForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [yarn, update] = useState({
        brandNameId: 0, //These properties are updated when the form is filled out by the customer.  These are default values set up in the initial state.
        typeId: 0,
        yardAmount: 0, //These are properties for each form field QUESTION: HOW DO I GET PROPERITES FOR SECONDARY KEYS - do not need secondary keys here - want all primary keys.
        colorId: 0,
        notes: "",
        price: 0,
        img: ""

    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list QUESTION: DO I NEED THIS???/WHAT DOES THIS DO??
    */

    const [brandNames, setBrandNames] = useState([])
    const [types, setTypes] = useState([])
    const [colors, setColors] = useState([])
 

    const navigate = useNavigate() //Works like a refresh - allows you to navigate back to another page
    // const currentYarnUser = localStorage.getItem("yarn_user")
    // const yarnUserObject = JSON.parse(currentYarnUser)


    useEffect(() => {
        fetch('http://localhost:8088/brandNames')
          .then((response) => response.json())
          .then((brandNamesData) => {
            setBrandNames(brandNamesData)
          })
    
        fetch('http://localhost:8088/types')
          .then((response) => response.json())
          .then((typesData) => {
            setTypes(typesData)
          })

          fetch('http://localhost:8088/colors')
          .then((response) => response.json())
          .then((colorsData) => {
            setColors(colorsData)
          })
      }, [])


    const handleSaveButtonClick = (event) => { //function tied to button in return below
        event.preventDefault()

        // TODO: Create the object to be saved to the API
/* 
    "userId": 3,
    "description": "Vero est adipisci sed natus quasi consectetur occaecati. Modi maxime sunt officia cumque. Vel at culpa. Sint accusamus deserunt dolorem qui.",
    "emergency": true,
    "dateCompleted": ""
*/
        const yarnToSendToAPI = {  //QUESTION: IS THIS CORRECT??
            brandNameId: yarn.brandNameId,
            name: yarn.name,
            typeId: yarn.typeId,
            yardAmount: yarn.yardAmount,
            colorId: yarn.colorId,
            notes: yarn.notes,
            price: yarn.price,
            img: yarn.img
           
            
        }
        // TODO: Perform the fetch() to POST the object to the API

        return fetch('http://localhost:8088/yarns', { //URL sending post(newly created object) to
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(yarnToSendToAPI)
        }) 
            .then(response => response.json())
            .then(() => { //Directing user back to ticket list to see new ticket that has been created
                navigate("/inventory") //navigates you back to inventory page and automatically refreshes screen so don't have to press refresh
            })
    }

    return ( //Two form fields, one for description and a checkbox for emergencies.  Each w/in a <fieldset></fieldset>
        <form className="addYarnForm">
            <h2 className="addYarnForm__title">Add to my Stash!</h2>

          <fieldset>
              <div className="form-group">
                <label htmlFor="brandName">Brand Name:   </label>
                <select
                onChange={(event) => {//On change, fires event which creates copy of yarn.  Copy. brandName Id = event.target.value which is brandNameId.  So, New yarn.brandNameId is now equal to the id that was selected 
                            const copy = { ...yarn }
                            copy.brandNameId = parseInt(event.target.value)
                            update(copy)}}>
                    <option value={0} type="select" id="brandNameId" className="form-control" required></option> 
                        {
                        brandNames.map((brandName) => <option key={`brandName--${brandName.id}`} value={brandName.id}>{brandName.brandName}</option>) //
                        }
                </select>
              </div>
          </fieldset>

              <fieldset> 
                <div className="form-group">
                    <label htmlFor="name">Name:   </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder=""
                        value={yarn.name} //QUESTION: WHAT IS THE KEY/VALUE PAIR NEEDED HERE??
                        onChange={
                            (evt) => {
                                const copy = {...yarn} //Created copy of existing state.
                                copy.name =  evt.target.value//QUESTION: WHAT KEY/VALUE PAIR IS NEEDED HERE?? Modifying copy made in above line.  New value will be what is typed in form - whatever is currently in input field.
                                update(copy) //Passing copy to be the new state.
                            }

                        } />
                </div>
            </fieldset>


            <fieldset>
              <div className="form-group">

                <label htmlFor="type">Type:   </label>
                <select
                onChange={(event) => {//On change, fires event which creates copy of yarn.  Copy.brandNameId = event.target.value which is brandNameId.  So, New yarn.brandNameId is now equal to the id that the customer selected 
                            const copy = { ...yarn }
                            copy.typeId = parseInt(event.target.value)
                            update(copy)}}>
                    <option value={0} type="select" id="typeId" className="form-control" required></option> 
                        {
                        types.map((type) => <option key={`type--${type.id}`} value={type.id}>{type.type}</option>)
                        }
                </select>
              </div>
            </fieldset>


            {/* <fieldset>
                <div className="form-group">
                <div>Brand Name: </div>
                     {brandNames.map((brandNameObj) => {
                return (
                    <div key={brandNameObj.id} className="radio">
                        <label>
                         <input
                            type="radio"
                            value={brandNameObj.id}
                            checked={yarn.brandNameId === brandNameObj.id}
                            onChange={(event) => {
                            const copy = { ...yarn }
                            copy.brandNameId = parseInt(event.target.value)
                            update(copy)
                    }}
                  />
                  {brandNameObj.brandName}
                </label>
              </div>
            )
          })}
        </div>
      </fieldset> */}

      {/* <fieldset>
                <div className="form-group">
                <div>Type: </div>
                     {types.map((typeObj) => {
                return (
                    <div key={typeObj.id} className="radio">
                        <label>
                         <input
                            type="radio"
                            value={typeObj.id}
                            checked={yarn.typeId === typeObj.id}
                            onChange={(event) => {
                            const copy = { ...yarn }
                            copy.typeId = parseInt(event.target.value)
                            update(copy)
                    }}
                  />
                  {typeObj.type}
                </label>
              </div>
            )
          })}
        </div>
      </fieldset> */}

            <fieldset> 
                <div className="form-group">
                    <label htmlFor="yardAmount">Amount in Yards:   </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder=""
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
                <label htmlFor="color">Color:   </label>
                <select
                onChange={(event) => {//On change, fires event which creates copy of yarn.  Copy.brandNameId = event.target.value which is brandNameId.  So, New yarn.brandNameId is now equal to the id that the customer selected 
                            const copy = { ...yarn }
                            copy.colorId = parseInt(event.target.value)
                            update(copy)}}>
                    <option value={0} type="select" id="colorId" className="form-control" required></option> 
                        {
                        colors.map((color) => <option key={`color--${color.id}`} value={color.id}>{color.color}</option>)
                        }
                </select>
              </div>
            </fieldset>

                       
            <fieldset> 
                <div className="form-group">
                    <label htmlFor="price">Price:   </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder=""
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
                    <label htmlFor="notes">Notes:   </label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder=""
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
                    <label htmlFor="picture">Picture:   </label>
                    <input
                        required autoFocus
                        type="img" //QUESTION: WHAT TYPE IS A PICTURE
                        className="form-control"
                        placeholder=""
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
                className="btn-add">
                Add to Stash!
            </button>
        </form>
    )
}

//File button to add picture by chooseing a file - can't get it to add to API
{/* <input type="file"
  onClick={(event) => {
    console.log(event)
  }} /> */}


{/* <fieldset>
        <div className="form-group">
          <div>Season: </div>
          {seasons.map((seasonObj) => {
            return (
              <div key={seasonObj.id} className="radio">
                <label>
                  <input
                    type="radio"
                    value={seasonObj.id}
                    checked={userChoices.seasonId === seasonObj.id}
                    onChange={(event) => {
                      const copy = { ...userChoices }
                      copy.seasonId = parseInt(event.target.value)
                      setUserChoices(copy)
                    }}
                  />
                  {seasonObj.name}
                </label>
              </div>
            )
          })}
        </div>
      </fieldset> */}

//What I had before I changed it to drop down menu:
    //   <fieldset>
    //             <div className="form-group">
    //             <div>Brand Name: </div>
    //                  {brandNames.map((brandNameObj) => {
    //             return (
    //                 <div key={brandNameObj.id} className="radio">
    //                     <label>
    //                      <input
    //                         type="radio"
    //                         value={brandNameObj.id}
    //                         checked={yarn.brandNameId === brandNameObj.id}
    //                         onChange={(event) => {
    //                         const copy = { ...yarn }
    //                         copy.brandNameId = parseInt(event.target.value)
    //                         update(copy)
    //                 }}
    //               />
    //               {brandNameObj.brandName}
    //             </label>
    //           </div>
    //         )
    //       })}
    //     </div>
    //   </fieldset>

    {/* <fieldset>
                <div className="form-group">
                <div>Color: </div>
                     {colors.map((colorObj) => {
                return (
                    <div key={colorObj.id} className="radio">
                        <label>
                         <input
                            type="radio"
                            value={colorObj.id}
                            checked={yarn.colorId === colorObj.id}
                            onChange={(event) => {
                            const copy = { ...yarn }
                            copy.colorId = parseInt(event.target.value)
                            update(copy)
                    }}
                  />
                  {colorObj.color}
                </label>
              </div>
            )
          })}
        </div>
      </fieldset> */}