
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    users : [
      {name: 'victoria', age: 13, city: 'seoul', email: 'victoria@gmail.com'},
      {name: 'sun', age: 34, city: 'busan', email: 'sun@gmail.com'},
      {name: 'johseb', age: 25, city: 'busan', email: 'johseb@gmail'}, // 탈락
      {name: 'syleemomo', age: 9.23, city: 'seoul', email: 'syleemomo@nate.com'}, // 탈락
      {name: 'hannah', age: 41, city: 'daegu', email: 'hannah0923*gmail.com'}, // 탈락
      {name: 'shara', age: 37, city: 'seoul', email: 'shara@gmail.com'},
      {name: 'martin', age: -34, city: 'daegu', email: 'martin@gmail.com'}, // 탈락
      {name: 'gorgia', age: 39, city: 'seoul',  email: 'gorgia@gmail.com'},
      {name: 'nana', age: 24, city: 'busan', email: 'nana@gmail.com'},
      {name: 'dannel', age: 19, city: 'seoul', email: 'dannel@gmail.com'},
    ]
  }
 
  render(){
    const { users } = this.state
    return (
      <>
        {users
        .filter(users => users.age % 1 === 0 && users.age>0)//잘못된 숫자나 문자열을 걸러낸 배열
        .filter(users => users.email.includes(".com") && !users.email.includes("*") )
        .map(users => {
          return (
            // 키값을 설정안하면 데이터를 찾을 때 까지 0번부터 내려감
            //혼선 방지
            <div>
              <h3>{users.name}</h3>
              <h4>{users.age}</h4>
              <h4>{users.city}</h4>
              <h4>{users.email}</h4>
              <h4>----------------</h4>
            </div>
          )
        })}
      </>
    )
  }

}
export default App;
