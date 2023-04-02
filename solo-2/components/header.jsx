import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmerica } from "@fortawesome/free-solid-svg-icons"



export default function Header() {
    return(
    <div id="header"><p id="header-text"><FontAwesomeIcon id="globe-icon" icon={faEarthAmerica}></FontAwesomeIcon> mytraveljournal.</p></div>
    )
}