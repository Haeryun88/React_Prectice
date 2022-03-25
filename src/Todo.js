import React,{ Component } from "react";

class Todo extends Component {
    constructor(props){
        super(props)//부모로 부터 전달받는 데이터
        //데이터 초기화1번 방법
        this.state = {//객체의 맴버변수
            name:'cleaning',
            done : false,
            description : 'cleaning my room on wekends'
        }
    }
    //이벤트핸들러 함수
    changeNAme=()=>{//멤버 메서드,
        this.setState({name:"leaning react"})
    }
    render(){
        const{name, done, description}=this.state
        //초기화 1번일 때 적어주는 것
        //비구조화 할당
        //데이터 초기화2번 방법
        // const todo = {
        //     name:'cleaning',
        //     done : false,
        //     description : 'cleaning my room on wekends'
        // }
        //Html 템플릿 -> JSX문법
        return (
            <>
            
            {/* //1번 방법을 사용했을때  */}
            <h3>name:{name}</h3>
            <h4>done:{done?"finished":"ongoing"}</h4>
            <p>description: cleaning my room on wekends</p>
            <button type="button" onClick={this.changeNAme}>이름 변경하기</button>
            {/* <h3>name:{todo.name}</h3>
            <h4>done:{todo.done?"finished":"ongoing"}</h4>
            <p>description: cleaning my room on wekends</p>
        <button type="button" onClick={this.changeNAme}>이름 변경하기</button> */ }
            </>
        )
    }
}

export default Todo