import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import  './Yarn.css'



export const YarnList = () => {

    const [yarns, setYarns] = useState([])
   
//     //create another state to filter yarns:
//     const [filteredYarns, setFilteredYarns] = useState([])

//     //create another state to hold brand names
//     // const [gistYarns, setGistYarns] = useState([])
//     // const
   
//     //to filter by brandname first get state:
//     const [brandNames, setBrandNames] = useState(false)

//     //to filter set useEffect:
//     useEffect (
//       () => {
//         if (brandNames) {
//           const filteredGist = filteredYarns.filter(yarn => 
//             {return yarn.brandNameId === 1})
//                 setFilteredYarns(filteredGist)
//         }
//         // else {
//         //   const filteredBrassard = filteredYarns.filter (yarn =>
//         //     {return yarn.brandNameId === 2})
//         //     setFilteredYarns(filteredBrassard)
//         // } 
//         else { //last else resets for all of the yarns
//           setFilteredYarns(yarns)
//         }
//       }, [brandNames]
//     )

// //to filter create another useEffect:
//       useEffect (
//         () => {
//           setFilteredYarns(yarns) 
//         }, 
//         [yarns])
      


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
      <div className="addTitle">
        <h2 className="yarnList_title">My Stash!</h2>
      </div>

{/* <button onClick={() => {setBrandNames(true)}}
    className="filter-yarn-btn">
    Sort by Gist Yarns
</button> */}



        <article className="list_of_yarn">
            {
                yarns.map( //Changed from yarns to filteredYarns for filtering by brand name
                    (yarn) => {
                        return <section className="individual_yarn" key={yarn.id}>
                            
                            
                          <div className="description-list" key={yarn.id}>                             
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
                            
                          <div className="description-list-words">
                            <div>Brand Name: {yarn.brandName.brandName}</div>
                            <div>Name: {yarn.name}</div>
                            <div>Type: {yarn.type.type}</div>
                            <div>Color: {yarn.color.color}</div>
                            <div>Yard Amount: {yarn.yardAmount}</div>
                            <div>Price: ${yarn.price}</div>
                            <div className="list-item">Notes: {yarn.notes}</div>                         
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