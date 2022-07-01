import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './Review.css'

function ReviewLikes({ comment, onUpdate, category }) {
    const [likes, setLikes] = useState(comment.likes)

    function handleLikes(comment) {
        fetch(`https://netflixsinatraapi.herokuapp.com${category}/${comment.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                likes: comment.likes + 1
            })
        }).then(resp => resp.json())
            .then(updatedObj => onUpdate(updatedObj))
        setLikes(() => comment.likes + 1)
    }
    return (
        <div className="centerText">
            <h5 className="centerText" style={{ color: "#004080" }}>{likes} likes</h5>
            <button style={{ backgroundColor: "#0066cc", color: "white" }} className= "btn btn-primary" onClick={() => handleLikes(comment)}>Like</button>
            <hr style={{ height: "5px", color: "black", backgroundColor: "black", width: "50%", marginLeft: "25%", marginRight: "25% !important" }}></hr>
            <br />
        </div>
    )
}

export default ReviewLikes
