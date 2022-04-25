
//컴퍼넌트는 반드시 하나의 최상위 태그만 써야한다. 
// 컴퍼넌트는 여러개를 사용할 수 있다.

//2022.03.25//////////////////////////////////////////

//문서 순서
// 1. 클래스형 컴포넌트의 기본구조(Person)
// 2. 클래스형 컴포넌트를 활용한 Todo  


//2022 03 29 
/////////////NameTag setState/////////////////
// import './App.css';
// import NameTag from './NameTag'

// function App() {
//   return (
//     <div className="App">
//     <NameTag></NameTag>
//     </div>
//   );
// }

// export default App;

/////////////////////////////////////////////////////////////
/////////////Counter setState/////////////////
// import './App.css';
// import Counter from './Counter'

// function App() {
//   return (
//     <div className="App">
//     <Counter></Counter>
//     </div>
//   );
// }

// export default App;

/////////////////////////////////////////////////////////////
/////////////Counter setState2/////////////////
// import { Component } from 'react';
// import './App.css';
// import Counter from './Counter'

// export default class App extends Component{
//   state ={
//     name:'parent'
//   }
//   changeName=()=>{
//     this.setState({name:'parent changed'})
//   }
//   render(){
//     console.log('parent')
//     const {name}=this.state
//     return(
//       <div className='App'>
//         <h1>{name}</h1>
//         <button type='button' onClick={this.changeName}>change Name</button>
//       <Counter></Counter>
//       </div>
//     )
//   }
// }


/////////////////////////////////////////////////////////////
//////////2022.04.11////////////////////////////////

// import React, { Component } from "react";
// import Counter01 from './Counter01'

// class App extends Component{
//   render(){
//     return(
//       <div>
//         <Counter01 user="sunrise"></Counter01>
//       </div>
//     )
//   }
// }

// export default App;
////////////////////////////////////////////////////////////////
// import React, { Component } from "react";
// import YoutubeVideo from "./YoutubeVideo";

// function App(){
//   return (
//     <div className="App">
//       <YoutubeVideo 
//         videoId={12344566}
//         videoName="Christmas dance" 
//         videoLength="23765" 
//         videoDescription="it is dance video on christmas party">
//       </YoutubeVideo>
//     </div>
//   );
// }

// export default App;

////////////////////////////////////////////////
// import logo from './logo.svg';
// import './App.css';
// import YoutubeVideo from './YoutubeVideo'
// import dummyData from './dummyData';

// function App() {
//   return (
//     <div className="App">
//     {dummyData.map(d => {
//       return(
//         <YoutubeVideo 
//               key={d.videoId}
//               videoId={d.videoId}
//               videoName={d.videoName}
//               videoLength={d.videoLength}
//               videoDescription={d.videoDescription}>
              

//               {/* 컨텐츠 삽입 */}
//               <iframe width="560" height="315" src="https://www.youtube.com/embed/hR7W2jOZmQk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              
//       </YoutubeVideo>
//       )
//       }
//     )}
//     </div>
//   );
// }

// export default App;
///////////////////////////////////////////////

//위 코드를 클래스형으로 고치기
// import logo from './logo.svg';
// import './App.css';
// import YoutubeVideo from './YoutubeVideo'
// import dummyData from './dummyData';
// import React, { Component } from 'react';

// class App extends Component{
//   render(){
//     return (
//       <div className="App">
//       {dummyData.map(d => {
//         return(
//           <YoutubeVideo 
//                 key={d.videoId}
//                 videoId={d.videoId}
//                 videoName={d.videoName}
//                 videoLength={d.videoLength}
//                 videoDescription={d.videoDescription}
//         ></YoutubeVideo>
//         )
//         }
//       )}
//       </div>
//     );
//   }
// }

// export default App;

//////////////////////////////////////

// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from 'react';
// import Child from './Child'

// class App extends Component {
//   state = {
//     name: 'parent',
//     childName: "child"
//   }
//   changeName = () => {
//     this.setState({name: "parent changed", childName: "child changed too"})
//   }
//   render(){
//     console.log('parent')
//     const {name, childName} = this.state
//     return (
//       <div className="App">
//         <h1>{name}</h1>
//         <button type="button" onClick={this.changeName}>change name</button>
//         <Child name={childName}></Child>
//       </div>
//     )
//   }
// }

// export default App;

///////////////////////////////////////////////////////////////////////////////

//연습문제 01

// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from 'react';

// class App extends Component {
//   state = {
//     cnt: 0
//   }
//   countNumber = () => {
//     this.setState({cnt: this.state.cnt + 1})
//   }
//   render(){
//     const {cnt} = this.state
//     return (
//       <div className="App">
//         <h1>카운트: {cnt}</h1>
//         <button type="button" onClick={this.countNumber}>change name</button>
//         {/* 정답은 onClick={this.countNumber()}안에 있는 ()를 빼버리는 것이었다. */}
//       </div>
//     )
//   }
// }

// export default App;

/////////////////////////////////////////////////////
//연습문제 02

// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from 'react';

// class App extends Component {
//   state = {
//     title: "변경전 제목"
//   }
//   changeTitle = () => {
//     //잘못되어있었던 부분
//     // this.state.title = "제목 업데이트"
//     //setState 는 함수로 실행가능하다. 함수 표현식을 잘 볼것!
//     this.setState({title : "제목 업데이트"})
//   }
//   render(){
//     const {title} = this.state
//     return (
//       <div className="App">
//         <h1>제목: {title}</h1>
//         <button type="button" onClick={this.changeTitle}>change title</button>
//       </div>
//     )
//   }
// }

// export default App;

/////////////////////////////////////////////////////////////
//연습문제 3
//아래 코드는 버튼을 클릭할때마다 쇼핑카트에 고객이 원하는 상품을 추가하고, 화면에 전체 상품목록을 보여주는 Cart 컴포넌트의 일부분이다. 코드를 완성해서 해당 기능이 정상적으로 동작하도록 해보자! (prompt 함수를 이용하여 사용자로부터 원하는 상품을 입력받는다)
// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from 'react';
// import Cart from './Cart'

// class App extends Component {
//   render(){
//     return (
//       <div className="App">
//        <Cart/>
//       </div>
//     )
//   }
// }

// export default App;
///////////////////////////////////////////////////////////////
//연습문제 04
// 아래 코드는 버튼을 클릭할때마다 포토 갤러리에 사진을 추가하고, 화면에 전체 사진 리스트를 보여주는 PhotoGallery 컴포넌트의 일부분이다. 코드를 완성해서 해당 기능이 정상적으로 동작하도록 해보자! (prompt 함수를 이용하여 아래와 같이 사용자로부터 이미지 주소를 입력받는다)

// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from 'react';
// import PhotoGallery from './PhotoGallery'

// class App extends Component {
//   render(){
//     return (
//       <div className="App">
//        <PhotoGallery/>
//       </div>
//     )
//   }
// }

// export default App;

////////////////////////////////////////////////////////////
//연습문제 05

// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from 'react';
// import CommentFilter from './CommentFilter'

// class App extends Component {
//   render(){
//     return (
//       <div className="App">
//         <h1>필터링된 댓글</h1>
//         <h2>==============</h2>
//       <CommentFilter comment="너는 진짜 못말리는 바보 똥개다"/>
//       <CommentFilter comment="임마! 너 그렇게 살지마! 그지 새끼야 !"/>
//       <CommentFilter comment="야 씨~ 너 죽을래? 진짜 ! 콱! 마! "/>
//       </div>
//     )
//   }
// }

// export default App;

////////////////////////////////////////////////////////////////////////////////////
//4월 18일

// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from 'react';

// class App extends Component {
//   state = {
//     cnt: 0
//   }
//   countNumber = () => {
//     this.setState(prevState=>({cnt: prevState.cnt + 1}))
//     this.setState(prevState=>({cnt: prevState.cnt + 1}))
//     this.setState(prevState=>({cnt: prevState.cnt + 1}))
//     this.setState(prevState=>({cnt: prevState.cnt + 1}))
//     this.setState(prevState=>({cnt: prevState.cnt + 1}))
//     this.setState(prevState=>({cnt: prevState.cnt + 1}))
//   }
//   render(){
//     const {cnt} = this.state
//     return (
//       <div className="App">
//         <h1>카운트: {cnt}</h1>
//         <button type="button" onClick={this.countNumber}>change name</button>
//       </div>
//     )
//   }
// }

// export default App;
/////////////////////////////////////////////////////////////////////////////////
// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from 'react';
// import CommentFilter from './CommentFilter'

// class App extends Component {
//   render(){
//     return (
//       <div className="App">
//         <h1>필터링된 댓글</h1>
//         <h2>==============</h2>
//        <CommentFilter comment="너는 진짜 못말리는 바보 똥개다"/>
//        <CommentFilter comment="임마! 너 그렇게 살지마! 그지 새끼야 !"/>
//        <CommentFilter comment="야 씨~ 너 죽을래? 진짜 ! 콱! 마! "/>
//       </div>
//     )
//   }
// }

// export default App;

////////////////////////////////////////////////////////////////////////////
// import React from "react";

// const App=()=>{
//   const name ="HR"
//   const changeName=(name)=>{
//     return `Hello, ${name}`
//     // return <div>{name}</div> 이런식으로 jsx 엘리먼트를 쓰면 컴포넌트로 적용
//   }
//   return(
//     <div className="App">
//       <div>{changeName(name)}</div>
//       {/* <div>ChildComponent name ="HR"</div> 위에서 jsx 엘리먼트를 쓰면 다음처럼 바꾸어 줘야함 props를 속성값으로 준다. */}
//     </div>
//   )
// };

// export default App;
///////////////////////////////
// import React from "react";

// const App=()=>{
//   const person={
//     name: "HR"
//     age:3
//   }

//   return(
//     <div className="App">
//       <div>{person.name}={person.age}</div>
//     </div>
//   )
// };

// export default App;
///////////////////////////////
// import React from "react";

// class App extends React.Component{
//   state={
//     fruit:[
//       {name: '딸기', price:'9000'},
//       {name: '수박', price:'17000'},
//       {name: '바나나', price:'4600'},
//     ]
//   }
//   render(){
//     const {fruit}=this.state
//     return(
//       <>
//       <h1>과일 가격표</h1>
//       {fruit.map((fruit,id)=>{//key 값을 설정하는 이유: 설정해줌으로써 고유의 값을 빨리 변경. 인덱스로 변경하기 때문에 설정하지 않으면 혼선이 올수있음
//         return(
//           <div key={id}>
//             <h3>{fruit.name}</h3>
//             <h4>{fruit.price}</h4>
//           </div>
//         )
//       })}      
//       </>
//     )
//   }
// }
//////////////////////////////////////

// import React from 'react'
// import logo from './logo.svg';
// import './App.css';

// //person.name => null, undifined, 빈문자열, NaN, false

// function App() {
//   const person = {
//     name: "syleemomo",
//     age: 3
//   }
//   return (
//     <div className="App">
//       <div>{person.name? "your name is nice !": "name doesn't exist !"} - {person.age}</div>
//     </div>
//   );
// }

// export default App;

// ///

// import React, { Component } from 'react';

// class App extends Component {
//   state={
//     loading:true
//   }
//   render() {
//     const {loading}=this.state
//     return (
//       <div>
//         {loading&&<h1>홈페이지</h1>}
//         {/* loading이 false라면 구문 전체가 거짓이 되어버려서 보이지 않는다. */}
//       </div>
//     );
//   }
// }

// export default App;

// /////////
// import './App.css';
// import React, { Component } from 'react'

// class App extends Component {
//   state = {
//     loading: true
//   }
//   render(){
//     const { loading } = this.state
//     return (
//       <>
//         {loading || <h1>Home page</h1>}
//         {/* 디폴트값 성정할때 많이쓴다. */}
//       </>
//     )
//   }
  
// }

// export default App;

/////////////////////
//컴포넌트 에서는 반드시 return값이 jsx 엘리먼트여야한다.
//초보자들이 자주 하는 실수 = 디폴트 값의 retun문을 설정하지 않음<<에러의 원인 
// import React from 'react'
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   let loading = false 
//   if(!loading){
//     return <h1>This is Laoding page</h1>
//   }else{
//     return <h1>This is Home page</h1>
//   }
// }

// export default App;
// ////
// import React from 'react'
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   let loading = false 
//   return (
//     <>
//       {loading ? <h1>This is Laoding page</h1> : <h1>This is Home page</h1>}
//     </>
//   )
// }

// export default App;



///
// function App() {
//   const loadingPage = (
//     <div>
//       <h1>Loading page</h1>
//     </div>
//   )
//   const homePage = (
//     <div>
//       <h1>Home page</h1>
//     </div>
//   )
//   const loading = {
//     state: true
//   }
//   if(!loading.state){
//     return loadingPage
//   }else{
//     return homePage
//   }
// }

// export default App;
// ////
// import './App.css';
// import React from 'react'

// function App() {
  
//   // 모듈 => 객체
//   const MyComponents = {
//     DatePicker: function(props) {    
//       return <div>Imagine a {props.color} datepicker here.</div>; // 컴포넌트
//     },
//     Movie: function(props){
//       return <div>Watch movie {props.title} in the future !</div> // 컴포넌트
//     },
//     Fruit: function(props){
//       return <div>{props.name} is healthy food ^^</div>  // 컴포넌트
//     }
//   }

//   return (
//     <div className='App'>
//       <MyComponents.DatePicker color="blue"/>
//       <MyComponents.Movie title="아이언맨"/>
//       <MyComponents.Fruit name="블루베리"/>
//     </div>
//   ) 
  
// }

// export default App;

///////
// import React from 'react';

// class App extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1>제목</h1>
//       </React.Fragment>
//     );
//   }
// }

// export default App;

///////////////////////////////////////

// 연습과제 02번

// 다음은 어느 IT 회사에 등록된 사용자 목록이다. 
//나이(age)가 0 보다 작거나 실수인 유효하지 않은 정보를 가진 사용자가 존재한다. 
//또한, 연락처(email)에 @가 존재하지 않거나 .com 으로 끝나지 않은 사용자도 존재한다. 
//이러한 유효하지 않은 사용자 정보를 걸러내보자! 

//나이가 0보다 작다 >> (age<0) 
//not incluse @>>Array.prototype.includes() >> users.email.includes(@) 
//not incluse .com>>Array.prototype.includes() >> users.email.includes(com) 
//v필터먼저 쓰고 필터링된걸 map으로 엮어줌, index도 쓰고.


// const users = [
//   {name: 'victoria', age: 13, city: 'seoul', email: 'victoria@gmail.com'},
//   {name: 'sun', age: 34, city: 'busan', email: 'sun@gmail.com'},
//   {name: 'johseb', age: 25, city: 'busan', email: 'johseb@gmail'}, // 탈락
//   {name: 'syleemomo', age: 9.23, city: 'seoul', email: 'syleemomo@nate.com'}, // 탈락
//   {name: 'hannah', age: 41, city: 'daegu', email: 'hannah0923*gmail.com'}, // 탈락
//   {name: 'shara', age: 37, city: 'seoul', email: 'shara@gmail.com'},
//   {name: 'martin', age: -34, city: 'daegu', email: 'martin@gmail.com'}, // 탈락
//   {name: 'gorgia', age: 39, city: 'seoul',  email: 'gorgia@gmail.com'},
//   {name: 'nana', age: 24, city: 'busan', email: 'nana@gmail.com'},
//   {name: 'dannel', age: 19, city: 'seoul', email: 'dannel@gmail.com'},
// ]



// import React from 'react';

// const App = () => {
//   const users = [
//     {name: 'victoria', age: 13, city: 'seoul', email: 'victoria@gmail.com'},
//     {name: 'sun', age: 34, city: 'busan', email: 'sun@gmail.com'},
//     {name: 'johseb', age: 25, city: 'busan', email: 'johseb@gmail'}, // 탈락
//     {name: 'syleemomo', age: 9.23, city: 'seoul', email: 'syleemomo@nate.com'}, // 탈락
//     {name: 'hannah', age: 41, city: 'daegu', email: 'hannah0923*gmail.com'}, // 탈락
//     {name: 'shara', age: 37, city: 'seoul', email: 'shara@gmail.com'},
//     {name: 'martin', age: -34, city: 'daegu', email: 'martin@gmail.com'}, // 탈락
//     {name: 'gorgia', age: 39, city: 'seoul',  email: 'gorgia@gmail.com'},
//     {name: 'nana', age: 24, city: 'busan', email: 'nana@gmail.com'},
//     {name: 'dannel', age: 19, city: 'seoul', email: 'dannel@gmail.com'},
//   ]
  

//   const result = users.map(users => {
//   if(users.age>0){
//     return <div>이름 : {this.name}</div>
//   }else{
//     return <div>이름 : 발견되지 않음</div>
//   }

// }


// export default App


/////////

// import React, { Component } from 'react';
// //리액트에서 자주 사용하는 배열 내장 메서드 : filter, map, reduce, concat
// class App extends Component {
//   state={
//     id: 3,
//     arr:[
//       {id:1},
//       {id:2},
//       {id:3},
//       {id:4},
//       {id:5}
//     ]
//   }
  
//   render() {
//     //메서드 체이닝
//     return (
//     <>
//     {this.state.arr
//     .filter(item=>item.id!==this.state.id)//잘못된 숫자나 문자열을 걸러낸 배열
//     .filter(item=>item.id!==this.state.id)//잘못된 숫자나 문자열을 걸러낸 배열
//     .map(item=><div>{item.id}</div>)
//     }
//     </>
//       );
//     }
//   }

//   export default App

////////////////////
// import React, { Component } from 'react';
// //리액트에서 자주 사용하는 배열 내장 메서드 : filter, map, reduce, concat
// class App extends Component {
//   let users = [
//         {name: 'victoria', age: 13, city: 'seoul', email: 'victoria@gmail.com'},
//         {name: 'sun', age: 34, city: 'busan', email: 'sun@gmail.com'},
//         {name: 'johseb', age: 25, city: 'busan', email: 'johseb@gmail'}, // 탈락
//         {name: 'syleemomo', age: 9.23, city: 'seoul', email: 'syleemomo@nate.com'}, // 탈락
//         {name: 'hannah', age: 41, city: 'daegu', email: 'hannah0923*gmail.com'}, // 탈락
//         {name: 'shara', age: 37, city: 'seoul', email: 'shara@gmail.com'},
//         {name: 'martin', age: -34, city: 'daegu', email: 'martin@gmail.com'}, // 탈락
//         {name: 'gorgia', age: 39, city: 'seoul',  email: 'gorgia@gmail.com'},
//         {name: 'nana', age: 24, city: 'busan', email: 'nana@gmail.com'},
//         {name: 'dannel', age: 19, city: 'seoul', email: 'dannel@gmail.com'},
//       ]
  
  
//   render() {
//     //메서드 체이닝
//     return (
//     <>
//     {this.state.users
//     .filter(users=>item.!==this.state.id)//잘못된 숫자나 문자열을 걸러낸 배열
//     .filter(item=>item.id!==this.state.id)//잘못된 숫자나 문자열을 걸러낸 배열
//     .map(item=><div>{item.id}</div>)
//     }
//     </>
//       );
//     }
//   }

//   export default App
///////////////
// import './App.css';
// import React, { Component } from 'react';

// class App extends Component {
//   state = {
//     users : [
//       {name: 'victoria', age: 13, city: 'seoul', email: 'victoria@gmail.com'},
//       {name: 'sun', age: 34, city: 'busan', email: 'sun@gmail.com'},
//       {name: 'johseb', age: 25, city: 'busan', email: 'johseb@gmail'}, // 탈락
//       {name: 'syleemomo', age: 9.23, city: 'seoul', email: 'syleemomo@nate.com'}, // 탈락
//       {name: 'hannah', age: 41, city: 'daegu', email: 'hannah0923*gmail.com'}, // 탈락
//       {name: 'shara', age: 37, city: 'seoul', email: 'shara@gmail.com'},
//       {name: 'martin', age: -34, city: 'daegu', email: 'martin@gmail.com'}, // 탈락
//       {name: 'gorgia', age: 39, city: 'seoul',  email: 'gorgia@gmail.com'},
//       {name: 'nana', age: 24, city: 'busan', email: 'nana@gmail.com'},
//       {name: 'dannel', age: 19, city: 'seoul', email: 'dannel@gmail.com'},
//     ]
//   }
 
//   render(){
//     const { users } = this.state
//     return (
//       <>
//         {users
//         .filter(users => users.age % 1 === 0 && users.age>0)//잘못된 숫자나 문자열을 걸러낸 배열
//         .filter(users => users.email.includes(".com") && !users.email.includes("*") )
//         .map(users => {
//           return (
//             // 키값을 설정안하면 데이터를 찾을 때 까지 0번부터 내려감
//             //혼선 방지
//             <div>
//               <h3>{users.name}</h3>
//               <h4>{users.age}</h4>
//               <h4>{users.city}</h4>
//               <h4>{users.email}</h4>
//               <h4>----------------</h4>
//             </div>
//           )
//         })}
//       </>
//     )
//   }

// }
// export default App;
// /////////////
//04월 20일
// import './App.css';
// import React, { Component } from 'react'

// class App extends Component {
//   state = {
//     loading: false,//로딩 스테이트 선언
//     isAuthorized: true,//이즈 어서라이즈 스테이트 선언
//     userId: 'sunrise'//유저 아이디 선언
//   }
//   render(){//렌더에서 스테이트 가져옴
//     const { loading, isAuthorized, userId } = this.state//변수에 선언한 스테이트 저장// 로딩 값은 true 가된다 (!를 앞에 붙이면 반대의 의미가 됨)
//     return (//값을 내보냄
//       <>
//         {!loading && isAuthorized && userId === 'sunrise' &&//한번 유효성 검사해줌//조건에 만족해야만 화면에 보여줌 //앤드연산자>계속 넘어가는 것/왼쪽에서 오른쪽으로 넘어가는것
//           (
//             <div>
//               <h1>Home page</h1>
//               <h3>This is home</h3>
//             </div>
//           )
//         }
//       </>
//     )
//   }
  
// }

// export default App;
//////////////////////////////////////////////
// import './App.css';
// import React, { Component } from 'react';

// class App extends Component {
//   state = {
//     users : [
//       {name: 'victoria', age: 13, city: 'seoul', email: 'victoria@gmail.com'},
//       {name: 'sun', age: 34, city: 'busan', email: 'sun@gmail.com'},
//       {name: 'johseb', age: 25, city: 'busan', email: 'johseb@gmail'}, // 탈락
//       {name: 'syleemomo', age: 9.23, city: 'seoul', email: 'syleemomo@nate.com'}, // 탈락
//       {name: 'hannah', age: 41, city: 'daegu', email: 'hannah0923*gmail.com'}, // 탈락
//       {name: 'shara', age: 37, city: 'seoul', email: 'shara@gmail.com'},
//       {name: 'martin', age: -34, city: 'daegu', email: 'martin@gmail.com'}, // 탈락
//       {name: 'gorgia', age: 39, city: 'seoul',  email: 'gorgia@gmail.com'},
//       {name: 'nana', age: 24, city: 'busan', email: 'nana@gmail.com'},
//       {name: 'dannel', age: 19, city: 'seoul', email: 'dannel@gmail.com'},
//     ]
//   }
 
//   render(){
//     const { users } = this.state
//     return (
//       <>
//         {users
//         .filter(users => users.age % 1 === 0 && users.age>0)//잘못된 숫자나 문자열을 걸러낸 배열
//         .filter(users => {
//           let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
//           return regExp.test(users.email)
//         } )
//         .map(users => {
//           return (
//             // 키값을 설정안하면 데이터를 찾을 때 까지 0번부터 내려감
//             //혼선 방지
//             <div>
//               <h3>{users.name}</h3>
//               <h4>{users.age}</h4>
//               <h4>{users.city}</h4>
//               <h4>{users.email}</h4>
//               <h4>----------------</h4>
//             </div>
//           )
//         })}
//       </>
//     )
//   }

// }
// export default App;

////
// import React, { Component } from 'react';

// const loadingPage=<h1>로딩중...</h1>//보여줄 UI를 미리 정의함
// const homePage=<h1>홈페이지</h1>
// class App extends Component {
  
//   state={
//     loading: true
//   }
// componentDidMount(){//라이프사이클 메서드 >> 초기에 index.html 코드에 컴포넌트가 주입되었을때
//   setTimeout(() => {
//     //서버에서 데이터를 가져오는 게 성공했을 때
//     this.setState({loading:false})
//   }, 1000);
// }

//   render() {
//     const {loading} =this.state
//     if(loading){
//       return loadingPage
//     }else{
//       return homePage
//     }
//   }
// }


// export default App;


//////
// import React, { Component } from 'react';

// const pages=["Home","About","Default","NotFound"]//랜더링할 페이지
// class App extends Component {
//   state ={
//     count:0
//   }
//   increase=()=>{
//     this.setState({count: this.state.count +1})
//   }

//   render() {
//     const {count} =this.state
//     const selectedPage=pages[count%pages.length]//pages배열에서 특정 요소 선택
//     return (
//       <div>
//         <h1>{selectedPage}</h1>
//         <button onClick={this.increase}>페이지 변경</button>
//       </div>
//     );
//   }
// }

// export default App;

/////////////////////////
// import './App.css';
// import React, { Component } from 'react'

// const pages = [
//   {pageTitle: "Home", pageNum: 1, pageDescription: 'this is home page !'}, // 페이지에 렌더링할 데이터
//   {pageTitle: "About", pageNum: 2, pageDescription: 'this is about page !'}, 
//   {pageTitle: "Detail", pageNum: 3, pageDescription: 'this is detail page !'}, 
//   {pageTitle: "NotFound", pageNum: 4, pageDescription: 'this is 404 page !'}
// ]

// const PageComponent = ({ pageTitle, pageNum, pageDescription }) => { // 컴포넌트
//   return (
//     <div>
//       <h1>{pageTitle} <span>{pageNum}</span></h1>
//       <p>{pageDescription}</p>
//     </div>
//   )
// }

// class App extends Component {
//   state = {
//     count: 0
//   }
//   increase = () => {
//     this.setState({count: this.state.count + 1})
//   }
//   render(){
//     const { count } = this.state
//     const selectedPage = pages[count % pages.length]
//     return (
//       <>
//       <PageComponent 
//         pageTitle={selectedPage.pageTitle} 
//         pageNum={selectedPage.pageNum} 
//         pageDescription={selectedPage.pageDescription}/>
        
//       <button type="button" onClick={this.increase}>페이지 변경</button>
//       </>
//     )
//   }
  
// }

// export default App;
////////////////////
// import './App.css';
// import React, { Component } from 'react'
// import Movie from './Movie'

// class App extends Component {
//   render(){
//     return (
//       <Movie 
//         id="1234567890"
//         title="해리포터"
//         language="english"
//         release="2013년 7월 19일"
//         length="27345"
//         author="조앤K롤링"
//         production="sunrise"
//       ></Movie>
//     )
//   }
  
// }

// export default App;
///////////////////////////////////////////////////

// import React from 'react';

// const App = () => {
//   return [
//     <li>First item</li>,
//     <li>Second item</li>,
//     <li>Third item</li>
//   ]
//   };

//   export default App
///

// import React from 'react';

// const App = () => {
//   //컴포넌트
// function Repeat(props){
//   let items=[]
//   for(let i=0; i<props.numTimes;i++){
//     items.push(props.children(i))
//   }
//   return <div>{items}</div>
// }
//   return (
//     <Repeat numTimes={10}>
//       {(index) => <div key={index}>This is item {index} in the list</div>}
//     </Repeat>
//   );
// };

// export default App;

////

// import './App.css';
// import React, { Component } from 'react'

// class App extends Component {
//   state = {
//     friends: [
//       {name: 'victoria', age: 13, city: 'seoul'},
//       {name: 'sun', age: 34, city: 'busan'},
//       {name: 'johseb', age: 25, city: 'busan'},
//       {name: 'syleemomo', age: 9, city: 'seoul'},
//       {name: 'hannah', age: 41, city: 'daegu'},
//       {name: 'shara', age: 37, city: 'seoul'},
//       {name: 'martin', age: 28, city: 'daegu'},
//       {name: 'gorgia', age: 39, city: 'seoul'},
//       {name: 'nana', age: 24, city: 'busan'},
//       {name: 'dannel', age: 19, city: 'seoul'},
//     ],
//     updatedFriends: null
//   }
//   // 구현하기
//   filterCity = (city) => {
//     let {friends}=this.state
//     this.setState({updatedFriends: friends.filter(friends => friends.city.includes(city))})
//   }


//   // 구현하기
//   render(){
//     let { friends, updatedFriends } = this.state
//     friends = updatedFriends === null ? friends : updatedFriends

//     return (
//       <>
//       {friends.map(fd=>{
//         return(
//         <div>
//           <h4>{fd.name}</h4>
//           <h4>{fd.age}</h4>
//           <h4>{fd.city}</h4>
//           <h4>----------</h4>
//         </div>)
//       })}
//         <button onClick={() => this.filterCity("seoul")}>서울</button>
//         <button onClick={() => this.filterCity("busan")}>부산</button>
//         <button onClick={() => this.filterCity("daegu")}>대구</button>
//       </>
//     )
//   }
// }

// export default App;


/////////
// import './App.css';
// import React, { Component } from 'react'

// const signs = [
//   [
//     [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0, 1, 0, 0],
//     [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
//     [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
//     [0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
//     [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   ],
//   [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
//     [0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
//     [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
//     [0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
//     [0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
//     [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
//   ],
//   [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 1, 1, 1, 0, 0, 0, 1, 0],
//     [0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
//     [0, 1, 0, 0, 0, 1, 1, 1, 1, 0],
//     [0, 1, 0, 0, 0, 1, 1, 1, 1, 0],
//     [0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
//     [0, 0, 1, 1, 1, 1, 0, 0, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   ],
//   [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
//     [0, 1, 1, 1, 0, 0, 1, 0, 1, 0],
//     [0, 0, 0, 1, 1, 1, 1, 0, 1, 0],
//     [0, 0, 0, 1, 1, 1, 1, 0, 1, 0],
//     [0, 0, 0, 1, 0, 0, 1, 0, 1, 0],
//     [0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
//     [0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
//     [0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   ],
//   [
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 1, 1, 1, 0, 0, 1, 1, 0],
//     [0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
//     [0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
//     [0, 1, 0, 0, 0, 1, 0, 1, 1, 0],
//     [0, 0, 1, 1, 1, 0, 0, 1, 1, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
//     [0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
//     [0, 0, 0, 1, 1, 1, 1, 1, 1, 0],
//   ]
// ]
// //조합될 수 있는 숫자들 ==> 00, 01, 10, 11 이중 00을 제외한 다른 모든 배열이 0보다 크다. => 즉, 
// class App extends Component {
//   state = {
//     index: 0,
//   }

//   // 구현하기
//   redraw = () => {
//     // console.log('redraw')
//     this.setState({ index: this.state.index + 1 })//인덱스의 배열을 하나씩 꺼냄
//   }

//   componentDidMount() {
//     setInterval(this.redraw, 1000)//1초마다 한번 씩 바뀜
//   }

//   // 구현하기
//   render() {
//     const { index } = this.state
//     const sign = signs[index % signs.length]

//     return (
//       <div className='sign'>
//         {sign.map((row, i) => {
//           return row.map((column, j) => {
//             // console.log(sign[i][j])
//             return (
//               <div key={i + j} className={sign[i][j] === 0 ? 'cell' : 'cell bright'}></div>//sign[i][j]의 값이 0이 면? cell 아니면 cell bright
//             )
//           })
//         })}

//       </div>
//     )
//   }
// }
// export default App;
// //////
import React from 'react';

const App = () => {
  return (
    <div>
      <form>
          <input type="email" pattern='^[a-zA-Z0-9]+@{1}[a-z]+(\.[a-z]{2,3})$' required></input>
          <button type='submit'>제출</button>
      </form>
      {/* 속성을 쓰려면 항상 form 으로 묶어줘야한다. */}
    </div>
  );
};

export default App;
