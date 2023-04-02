import React from 'react'
import BlogPost from './BlogPost'
import data from './data.jsx'

export default function BlogList (){
    const post = data.map(item =>{
        return (
            <BlogPost 
            item = {item}
            />
        )})
        return (
            <div>
                <div>
                    {post}
                </div>
            </div>
        )
}