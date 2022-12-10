import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import  './Yarn.css'



export const YarnList = () => {

    const [yarns, setYarns] = useState([])

    useEffect (
        () => {
            fetch(`http://localhost:8088/yarns?_expand=color&_expand=brandName&_expand=type`)
                .then(response => response.json())
                .then((yarnArray) => {
                    setYarns(yarnArray)
                })
        },
        []
    )

    console.log(yarns)
//Questions for return: how to I get to brandName, type and color?  Do I need to embed?  How? - I'm getting an emtpy table
//Do I want to add a picture here?  How?
    return<>
        <h2>My Inventory</h2>

        <article className="list_of_yarn">
            {
                yarns.map(
                    (yarn) => {
                        return <section className="individual_yarn">
                            <div>Brand Name: {yarn.brandName.brandName}</div>
                            <div>Name: {yarn.name}</div>
                            <div>Type: {yarn.type.type}</div>
                            <div>Color: {yarn.color.color}</div>
                            <div>Yard Amount: {yarn.yardAmount}</div>
                            <div>Price: ${yarn.price}</div>
                            <div>Notes: {yarn.notes}</div>                         
                            <div className="individual_picture" key={yarn.id}>                             
                            <Link 
                                className="navbar__link"
                                to={`update/${yarn.id}`}>
                                <img
                                    src={yarn.img}
                                    //alt= "Picture of spool of yarn"
                                    className="picture-img"
                                    key={yarn.id}/>
                            </Link>
                            </div>

                        </section>
                    }
                )
            }
        </article>

        {/* <div className="picture-container">
      {items.map((itemObj) => {
        return (
          <div className="item-card" key={itemObj.id}>
            <img
              src={itemObj.imageUrl}
              alt={itemObj.name}
              className="item-img"
              onClick={() => {
                navigateToItemDetails(itemObj.id)
              }}
            />
            <div className="item-name">{itemObj.name}</div>
          </div>
        )
      })}
    </div> */}

    {/* <div>{yarn.img}</div> */}
    
    
    
    
    
    
    
    
    
    </>

}