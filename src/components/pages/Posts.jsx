import { useEffect } from "react"

export default function Posts({ posts }) {
    const msg = "No posts. Please Create new Post"
    
    const post = posts.map((post, i) => {
        return (
            <div key={`post_${i}`}>
                <h1>Restaurant: {post.dish.restaurant.name ? post.dish.restaurant.name : ''}</h1>
                <h2>Dish: {post.dish.dishName ? post.dish.dishName : ''}</h2>
                <h3>Rate: {post.rating ? post.rating : ''}</h3>
            </div>
        )
    })
    return (
        <>
            <h1>Render all posts</h1>
            {posts.length>0 ? post : msg}
            {/* {post} */}
        </>
    )
}