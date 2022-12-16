import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import './Yarn.css'

export const YarnEditForm = () => {
    // TODO: creat default state object
    window.scrollTo(0, 0)
    const [yarn, setEditYarn] = useState({
        brandNameId: 0, //These properties are updated when the form is filled out by the customer.  These are default values set up in the initial state.
        typeId: 0,
        yardAmount: 0, //These are properties for each form field QUESTION: HOW DO I GET PROPERITES FOR SECONDARY KEYS - do not need secondary keys here - want all primary keys.
        colorId: 0,
        notes: "",
        price: 0,
        img: ""

    })


    // TODO: What is the variable in which you stored the route parameter?
    const { yarnId } = useParams() //Access the parameters of the current route
    const navigate = useNavigate() //Works like a refresh - allows you to navigate back to another page

    // TODO: Get the ticket state from the API.
    useEffect(() => {
        fetch(`http://localhost:8088/yarns/${yarnId}`)
            .then(response => response.json())
            .then((data) => {
                setEditYarn(data)
            })

    }, [yarnId])


    const [brandNames, setBrandNames] = useState([])
    const [types, setTypes] = useState([])
    const [colors, setColors] = useState([])

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



    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        if (yarn.brandNameId > 0 && yarn.name && yarn.typeId > 0 && yarn.yardAmount > 0 && yarn.colorId > 0 && yarn.notes && yarn.price > 0 && yarn.img) {

            // TODO: Write the fetch for the PUT request to replace the object being edited
            fetch(`http://localhost:8088/yarns/${yarn.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(yarn)
            })
                .then(response => response.json())
                .then(() => {
                    navigate("/inventory")
                })
        } else {
            window.alert("Please fill out the form!")

        }
    }




    //Button to delete a ticket:
    const deleteButton = (clickEvent) => {
        clickEvent.preventDefault()
        fetch(`http://localhost:8088/yarns/${yarn.id}`, {
            method: "DELETE"
        })
            .then(() => {
                navigate("/inventory")
            })
    }






    return <form className="editForm">
        <h2 className="editForm__title">Update my Stash!</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="brandName">Brand Name:   </label>
                <select
                    value={yarn.brandNameId}
                    onChange={(event) => {//On change, fires event which creates copy of yarn.  Copy. brandName Id = event.target.value which is brandNameId.  So, New yarn.brandNameId is now equal to the id that was selected 
                        const copy = { ...yarn }
                        copy.brandNameId = parseInt(event.target.value)
                        setEditYarn(copy)
                    }}>
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
                    required
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={yarn.name} //QUESTION: WHAT IS THE KEY/VALUE PAIR NEEDED HERE??
                    onChange={
                        (evt) => {
                            const copy = { ...yarn } //Created copy of existing state.
                            copy.name = evt.target.value//QUESTION: WHAT KEY/VALUE PAIR IS NEEDED HERE?? Modifying copy made in above line.  New value will be what is typed in form - whatever is currently in input field.
                            setEditYarn(copy) //Passing copy to be the new state.
                        }

                    } />
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
                <label htmlFor="type">Type:   </label>
                <select
                    value={yarn.typeId}
                    onChange={(event) => {//On change, fires event which creates copy of yarn.  Copy. brandName Id = event.target.value which is brandNameId.  So, New yarn.brandNameId is now equal to the id that was selected 
                        const copy = { ...yarn }
                        copy.typeId = parseInt(event.target.value)
                        setEditYarn(copy)
                    }}>
                    <option value={0} type="select" id="typeId" className="form-control" required></option>
                    {
                        types.map((type) => <option key={`type--${type.id}`} value={type.id}>{type.type}</option>) //
                    }
                </select>
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
                <label htmlFor="yardAmount">Amount in Yards:   </label>
                <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Yard Amount"
                    value={yarn.yardAmount} //QUESTION: WHAT IS THE KEY/VALUE PAIR NEEDED HERE??
                    onChange={
                        (evt) => {
                            const copy = { ...yarn } //Created copy of existing state.
                            copy.yardAmount = evt.target.value//QUESTION: WHAT KEY/VALUE PAIR IS NEEDED HERE?? Modifying copy made in above line.  New value will be what is typed in form - whatever is currently in input field.
                            setEditYarn(copy) //Passing copy to be the new state.
                        }

                    } />
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
                <label htmlFor="color">Color:   </label>
                <select
                    value={yarn.colorId}
                    onChange={(event) => {//On change, fires event which creates copy of yarn.  Copy.brandNameId = event.target.value which is brandNameId.  So, New yarn.brandNameId is now equal to the id that the customer selected 
                        const copy = { ...yarn }
                        copy.colorId = parseInt(event.target.value)
                        setEditYarn(copy)
                    }}>
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
                    required
                    type="text"
                    className="form-control"
                    placeholder="Price"
                    value={yarn.price} //QUESTION: WHAT IS THE KEY/VALUE PAIR NEEDED HERE??
                    onChange={
                        (evt) => {
                            const copy = { ...yarn } //Created copy of existing state.
                            copy.price = evt.target.value//QUESTION: WHAT KEY/VALUE PAIR IS NEEDED HERE?? Modifying copy made in above line.  New value will be what is typed in form - whatever is currently in input field.
                            setEditYarn(copy) //Passing copy to be the new state.
                        }

                    } />
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
                <label htmlFor="notes">Notes:   </label>
                <input
                    required
                    type="text"
                    className="form-control"
                    placeholder="Notes"
                    value={yarn.notes} //QUESTION: WHAT IS THE KEY/VALUE PAIR NEEDED HERE??
                    onChange={
                        (evt) => {
                            const copy = { ...yarn } //Created copy of existing state.
                            copy.notes = evt.target.value//QUESTION: WHAT KEY/VALUE PAIR IS NEEDED HERE?? Modifying copy made in above line.  New value will be what is typed in form - whatever is currently in input field.
                            setEditYarn(copy) //Passing copy to be the new state.
                        }

                    } />
            </div>
        </fieldset>

        <fieldset>
            <div className="form-group">
                <label htmlFor="picture">Picture:   </label>
                <input
                    required
                    type="img" //QUESTION: WHAT TYPE IS A PICTURE
                    className="form-control"
                    placeholder="Picture"
                    value={yarn.img} //QUESTION: WHAT IS THE KEY/VALUE PAIR NEEDED HERE??
                    onChange={
                        (evt) => {
                            const copy = { ...yarn } //Created copy of existing state.
                            copy.img = evt.target.value//QUESTION: WHAT KEY/VALUE PAIR IS NEEDED HERE?? Modifying copy made in above line.  New value will be what is typed in form - whatever is currently in input field.
                            setEditYarn(copy) //Passing copy to be the new state.
                        }

                    } />
            </div>
        </fieldset>



        <div className="both-buttons">
            <button
                onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
                className="btn-primary">
                Update Yarn
            </button>


            <button
                onClick={(clickEvent) => deleteButton(clickEvent)}
                className="btn-delete">
                Delete Yarn
            </button>

        </div>

    </form>
}