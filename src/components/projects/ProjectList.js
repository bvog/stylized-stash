import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import  '../yarn/Yarn.css'
import { useNavigate, useParams } from "react-router-dom"



export const ProjectList = () => {

    const [projects, setProjects] = useState([])

    useEffect (
        () => {
            fetch(`http://localhost:8088/projects`)
                .then(response => response.json())
                .then((projectArray) => {
                    setProjects(projectArray)
                })
        },
        []
    )

    const navigate = useNavigate()

    const handleSaveButtonClick = (clickEvent) => { //function tied to button in return below
        navigate("/projects/create")
    }
   
    return<>
      <div className="addTitle">
        <h2 className="yarnList_title">My Projects!</h2>
      </div>
        <article className="list_of_yarn">
            {
                projects.map(
                    (project) => {
                        return <section className="individual_yarn" key={project.id}>
                            
                            
                            <div className="individual_picture" key={project.id}>                             
                            <Link 
                                className="navbar__link"
                                to={`update/${project.id}`}>
                                <img
                                    src={project.img}
                                    //alt= "Picture of spool of yarn"
                                    className="picture-img"
                                    key={project.id}/>
                            </Link>
                            </div>
                                                     
                            
                          <div className="projects-description-list-words">
                            <div className="list-item">Project:   {project.name}</div>
                            <div className="list-item">Yarn Used: {project.yarnUsed}</div>
                            <div>Amount of Yarn Used: {project.yarnAmountUsed}</div>
                            <div className="list-item">Pattern: {project.pattern}</div>
                            <div className="list-item">Description: {project.description}</div>                      
                          </div> 

                        </section>
                    }
                )
            }
        </article>

        <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="project-btn-add">
            Add a Project
        </button>
    
    
    
    
    
    
    
    
    
    </>

}