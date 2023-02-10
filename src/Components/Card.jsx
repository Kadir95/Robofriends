import React from "react";

// const Card = (props) =>
const Card = ({ name, email, id }) => {
    return (
        <div className="tc bg-light-blue ma2 pa2 br3 dib shadow-5 grow f7">
            <img src={`https://robohash.org/${id}`} alt="Robot" />
            <div>
                <h1> {name}</h1>
                <p>{email}</p>
            </div>
        </div >
    )
}

export default Card;