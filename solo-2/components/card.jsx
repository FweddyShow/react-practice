import mapMarker from '../src/assets/mapmarker.png'
import React from 'react'

export default function Card(props) {
    return (
        <div className='card-main'>
            <img className='images' src={props.imageUrl} /> 
            <div className='card-text'>
                <img id='marker' src={mapMarker} /> 
                <p>{props.location}</p>
                <a id='maps-link' href="{props.googleMapsURL}">View on Google Maps</a>
            </div>
            <h1 id='card-title'>{props.title}</h1>
            <div id='card-info'>
                <h3 id="date">{props.startDate}-{props.endDate}</h3>
                <p id='description'>{props.description}</p>
            </div>
        </div>
    )
}