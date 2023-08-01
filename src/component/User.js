import React from "react";


function User(props)

{
    const {data} = props
    console.warn(props.data.name)
    return(
        <div>
            <h1>User Component {data.name} and my age is {data.age}</h1>
        </div>
    )
}

export default User;