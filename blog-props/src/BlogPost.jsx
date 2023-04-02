import React from "react";

export default function BlogPost(props) {
    return(
        <div>
            <h1>{props.item.title}</h1>
            <h2>{props.item.subTitle}</h2>
            <p>Posted by {props.item.author} on {props.item.date}</p>
        </div>
    )
}