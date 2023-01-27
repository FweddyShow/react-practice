import React from "react";
import star from "../assets/star.png"
import img from "../assets/katie.png"

export default function Card(props) {
    return (
        <div className="card--main">
            <img src={`../src/assets/${props.img}`} />
            <div>
                <img src= {star} className='card--star' />
                <span className="card--rating">{props.rating}</span>
                <span href="url" className="card--grey"> ({props.reviewCount})</span>
                <span className="card--grey"> • {props.country}</span>
            </div>
            <p className="card--text">{props.title}</p>
            <p href="url" className="card--price"><span className="card--bold">From ${props.price}</span> / person</p>
        </div>
    )
}