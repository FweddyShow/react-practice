import React from "react";
import star from "../assets/star.png"
import swim from "../assets/bnb-img.png"

export default function Card() {
    return (
        <div className="card--main">
            <img src= {swim} className="card--swim" />
            <div>
                <img src= {star} className='card--star' />
                <span className="card--rating">5.0</span>
                <span href="url" className="card--grey"> (6)</span>
                <span className="card--grey"> • USA</span>
            </div>
            <p className="card--text">Life lessons with Katie Zaferes</p>
            <p href="url" className="card--price"><span className="card--bold">From $136</span> / person</p>
        </div>
    )
}