//기본형 클래스형 컴포넌트 class component 

// import React,{Component} from "react";

// class Person extends Component {
//     render(){
//         const name='Jess'
//         const age=99

//         return (
//             <React.Fragment>
//                 <h3>{name}</h3>
//                 <h4>{age} </h4>
//             </React.Fragment>
//         )
//     }
// }

// export default Person

/////////////////////////////////////////////////////////////

//class component 변형

// import React,{Component} from "react";

// class Person extends  React.Component {
//     render(){
//         const name ='Jess'
//         const age=99

//         return (
//             <React.Fragment>
//                 <h3>{name}</h3>
//                 <h4>{age}</h4>
//             </React.Fragment>
//         )
//     }
// }

// export default Person;

///////////////////////////////////////////////////
////React.Fragment 컴포넌트 축약////

// 

////////////////////////////////////

//클래스형 컴포넌트 사용하기....///
//APP 파일에서 다음과 같은 코드를 넣는다.//


// import React,{Component} from "react";
// import Person from './Person';

// class App extends Component {
//     render(){
//         return 
//         <Person country="korea"></Person>
//     }
// }

// export default App;

/////////////////////////////////////////

///할일 TODO 에 대한 컴포넌트/////////////

// // TODO 컴포넌트 -> App 파일///

// import React,{Component} from "react";
// import Todo from './Todo';

// class App extends Component {
//     render(){
//         return <Todo></Todo>
//     }
// }

// export default App;

//////////////////////////////////////////////
//초기 데이터(state) 선언, 이벤트핸들러 함수, render 함수가 모두 갖춰진 클래스형 컴포넌트

// import React,{ Component } from "react";

// class Todo extends Component {
//     constructor(props) {
//         super(props) // props 상속
//         this.state = {  //state 선언
//             name: 'cleaning',
//             done: false,
//             description: 'cleaning my room on weekends'
//         }
//     }

    //이벤트 핸들러 함수

//     changeTodoName=()=>{
//         this.setState({name:'learning react'})
//     }

//     // HTML 템플릿

//     render (){
//         const {name, done, description} = this.state
//         const {user} = this.props
//         return(
//             <>
//             <h2>user: {user}</h2>
//             <h3>name: {name}</h3>
//             <h4>done: {done? "sinished": "ongoing"}</h4>
//             <p>description: {description}</p>
//             <button type="button" onClick={this.changeTodoName}>
//                 change todo name
//             </button>

//             </>
//         )
//     }
// }

// export default Todo;

////////////위 예제의 App 컴포넌트/////////

// import React,{Component} from "react";
// import Todo from './Todo'

// class App extends Component {
//     render(){
//         return 
//         <Todo user="Haeryun"></Todo>
//     }
// }

// export default App;

/////////////////////////////////////////////////////////////////////////

////생성자 사용하지 않고 state 선언 하는 Todo

// import React,{Component} from "react";

// class Todo extends Component {
//     state = {  //state 선언
//         name: 'cleaning',
//         done: false,
//         description: 'cleaning my room on weekends'
//     }

//     // 이벤트 핸들러 함수

//     changeTodoName = () => {
//         this.setState({name: 'learning'})
//     }

//     //HTML  템플릿

//     render(){
//         const {name, done, description} = this.state
//         const {user}=this.props
//         return (
//             <>
//             	<h2>user: {user}</h2>
//             	<h3>name: {name}</h3>
//                 <h4>done: {done? "finished": "ongoing"}</h4>
//                 <p> description: {description}</p>
//                 <button type="button"  
//                 onClick={this.changeTodoName}
//                 >change todo name</button>
//             </>
//         )
//     }
// }

// export default Todo;

////////////////////////////////////////////////////////
//Animal 컴포넌트

// import React from "react";

// class Animal extends React.Component {
//     state = {
//         type: 'cat',
//         name: 'meyow',
//         size: 'smal',
//         sound: 'low',
//         appearence: 'cute'
//     }

//     render(){
//         const {type, name, size, sound, appearence} = this.state
//         return (
//             <>
//                 <h1>동물 정보</h1>
//                 <h3>종류 - {type}</h3>
//                 <h3>이름 - {name}</h3>
//                 <h3>크기 - {size}</h3>
//                 <h3>소리 - {sound}</h3>
//                 <h3>생김새 - {appearence}</h3>
//             </>
//         )
//     }
// }

// export default Animal;

///////////////////////////////////////////
//Animal 컴포넌트 App//////////////////////////////
// import Animal from './Animal'

// function App() {
//     return (
//         <div ClassName="App">
//             <Animal/>
//         </div>
//     )
// }

// export default App;

/////////////////////////////////////////////////////////
//함수형 컴포넌트_Person
// import React from "react";

// function Person() {
//     const name='Jess'
//     const age=99

//     return (
//         <>
//             <h3>{name}</h3>
//             <h4>{age}</h4>
//         </>
//     )
// }

// export default Person;


////////////////////////////////////////////////
//함수형 컴포넌트 화살표 

// import React from "react";

// const Person =(props) =>{
//     return (
//         <>
//             <h3>{props.name}</h3>
//             <h4>{props.age}</h4>
//         </>
//     )
// } 
// export default Person;

///////////////////////////////////
//비구조화 할당 문법을 사용하여 곧바로 props 값을 조회가능

// 
/////////////////////////////////////
//App 위 함수형 컴포넌트의 App 파일

// import React from "react";
// import Person from './Person';

// class App extends Comment {
//     render () {
//         return <Person name="Jess" age="99"></Person>
//     }
// }

// export default App;
////////////////////////////////////
//함수형 컴포넌트 실습예제

// import React from "react";

// function Todo({ user, name, done, description}){
//     return (
//         <>
//             <h2>user: {user}</h2>
//             <h3>name: {name}</h3>
//             <h4>done: {done? "finished":"ongoing"}</h4>
//             <p>description: {description}</p>
//         </>
//     )
// }

// export default Todo;

//////////////////////////////////////////////////
//위 컴포넌트의 App 컴포넌트

// 
/////////////////////////////////////////////
//연습문제 1

// import React from "react";

// class Friend extends Comment {
// render(){
//     const {name, age, city}=this.props

//     return (
//         <>
//         <h3>{name}</h3>
//         <h4>{age}</h4>
//         <h4>{city}</h4>
//         <h4>----------------</h4>
//         </>
//         )
//     }
// }

// export default Friend;
///////////////////////////////////////
//app 컴포넌트

import React from "react";
import Friend from './Friend'

function App() {
    return (
        <div className="App">
            <Friend name="Victoria" age="13" city="seoul"/>
            <Friend name="sun" age="34" city="busan"/>
            <Friend name="johseb" age="25" city="busan"/>
            <Friend name="syleemomo" age="9" city="seoul"/>
            <Friend name="hannah" age="41" city="daegu"/>
            <Friend name="shara" age="37" city="seoul"/>
            <Friend name="martin" age="28" city="daegu"/>
            <Friend name="gorgia" age="39" city="seoul"/>
            <Friend name="nana" age="24" city="busan"/>
            <Friend name="dannel" age="19" city="seoul"/>
        </div>
    );
}

export default App;