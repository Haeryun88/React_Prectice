// https://syleemomo.tistory.com/110
import React from "react";

class Friend extends React.Component{
    render(){
      const {name, age, city}=this.props
      return(
        <>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <h3>{city}</h3>
        <h3>-------------------</h3>
        </>
      )
    }
  }

  export default Friend;