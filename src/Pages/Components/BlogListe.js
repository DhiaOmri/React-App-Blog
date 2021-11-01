import React, { useState } from 'react'
import BlogCard from './BlogCard'

const BlogListe = ({blog}) => {
   
    return (

        <div className="container">
        <div className="row my-5">
          {blog && blog.length > 0 && blog.map((e,i) =><BlogCard blog={e} key={i} /> )}
            
        </div>
      </div>
    )
}

export default BlogListe
