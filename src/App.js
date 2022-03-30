
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
import { Component } from 'react';
import './App.css';
import Counter from './Counter'

export default class App extends Component{
  state ={
    name:'parent'
  }
  changeName=()=>{
    this.setState({name:'parent changed'})
  }
  render(){
    console.log('parent')
    const {name}=this.state
    return(
      <div className='App'>
        <h1>{name}</h1>
        <button type='button' onClick={this.changeName}>change Name</button>
      <Counter></Counter>
      </div>
    )
  }
}


/////////////////////////////////////////////////////////////
