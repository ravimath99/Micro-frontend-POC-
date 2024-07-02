import React from "react";


const UserLoggedIn = ({data}) => {
    return (
        <>
            <div className="card">
                <img src={"https://clipartmag.com/image/simple-man-drawing-32.jpg"} alt={"Avatar"} style={{width:"100%"}}/>
                <div className="container">
                    <p><b>Name :</b> {data.name}</p>
                    <p style={{"word-break": "break-all"}}><b>Email:</b> {data.email}</p> 
                    <p><b>Number:</b>{data.number} </p>
                </div>
            </div>
        </>
    )
}

export default UserLoggedIn