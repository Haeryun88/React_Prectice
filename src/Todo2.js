//비구조화 할당

import React from "react";
import '/Todo2.css'

function Todo2({user, name, done, description}){
    return (
        <>
        <h3 className='container'>name:{name}</h3>
        <h3 >done:{done ? "finished":"ongoing"}</h3>
        <h3 >discription:{discription}</h3>
        <h3 >{user}</h3>
        </>
    )
}

export default Todo2