import React, { Component } from "react";

class NameTag extends Component{
    state={
        name: "initail name"
    }
    changeName=()=>{
        this.setState({name:"changed name"})
      //  this.state.name({name:"changed name"})=> 직접 변경하면 안된다.
        
    }
    render(){
        console.log('NameTag')
        const {name}=this.state
        return(
            <>
            <h1>{name}</h1>
            <button type="button" onClick={this.changeName}>Change Name</button>
            {/* <button type="button" onClick={this.changeName()}>Change Name</button> return안에서는 함수를 호출하지 않아야한다. 하면 무한루프에 빠진다.*/}
            </>
        )
    }

}

export default NameTag;