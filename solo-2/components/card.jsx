import mapMarker from '../src/assets/mapmarker.png'
import React from 'react'

export default function Card(props) {
    return (
        <div className='card-main'>
            <img src={props.imageUrl} />
            <div>
                <img src={mapMarker} />
                <p>{props.location}</p>
                <a src={props.googleMapsURL} />
            </div>
            <h1>{props.location}</h1>
            <div>
                <h3>{props.startDate}-{props.endDate}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )
}