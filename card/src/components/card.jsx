import React from "react";
import star from "../assets/star.png"

export default function Card(props) {

    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card--main">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../src/assets/${props.item.coverImg}`} />
            <div>
                <img src= {star} className='card--star' />
                <span className="card--rating">{props.item.stats.rating}</span>
                <span href="url" className="card--grey"> ({props.item.stats.reviewCount})</span>
                <span className="card--grey"> • {props.item.location}</span>
            </div>
            <p className="card--text">{props.item.title}</p>
            <p href="url" className="card--price"><span className="card--bold">From ${props.item.price}</span> / person</p>
        </div>
    )
}