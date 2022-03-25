import React, { Component } from 'react'

class Subject extends Comment{
  render(){
    return (
      <header>
        <h1>Hello React!</h1>
      </header>
    );
  }
}
//컴퍼넌트는 반드시 하나의 최상위 태그만 써야한다. 
// 컴퍼넌트는 여러개를 사용할 수 있다.


//class App extends Comment{
  render(){
    return (
      <div className>

      </div>
    );
  }
}

export default App