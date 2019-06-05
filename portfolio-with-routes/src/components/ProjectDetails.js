import React from 'react';
import { myProjects } from './Projects';
import { Link } from 'react-router-dom';
import queryString from 'query-string'


const projectDetails = (props) => {

    const getProject = (id) => {
        const theProject = oneProject => {
            return oneProject.id === id;
        }
        return myProjects.find(theProject)
    };



    const foundProject = getProject(props.match.params.id)          // URL params
    const qString = queryString.parse(props.location.search)        // Query string
    console.log(qString)

    // accede a esta URL para ver un query string muy aclaratorio:
    // http://localhost:3000/projects/3c?name=abrigo&color=red&size=small

    return (
        <div>
            <h1>El ID del proyecto se guarda como URL params, en props.match.params.id y es {props.match.params.id}</h1>
            <h1>El query string se accede mediante el parseado de props.location.search puedes verlo en la consola</h1>
            <hr></hr>
            <h4>{foundProject.name} <span style={{ fontSize: "14px" }}>{foundProject.year}</span></h4>
            <h5>Used technologies: {foundProject.technologies}</h5>
            <p>{foundProject.description}</p>
            <Link to='/projects'>Back</Link>
        </div>
    )
}

export default projectDetails;