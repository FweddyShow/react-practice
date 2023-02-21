import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons"



export default function Header() {
    return(
    <div>
        <FontAwesomeIcon icon={faEarthAmerica}></FontAwesomeIcon>
        <h1>my travel journal.</h1>
    </div>
    )
}