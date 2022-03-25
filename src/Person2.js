import React,{Component} from "react";//라이브러리 호출

class Person extends Component {
  render(){//메서드 => 컴포넌트에서 무조건 들어가야 되는 메서드
    //컴포넌트에 필요한 데이터
    const name="Js"
    const age=28//const(상수) let(변수)

    //HTML 템플릿
    return(
      <React.Fragment>
        <h3>{name}</h3>
        <h4>{age}</h4>
      </React.Fragment>
    )
  }
} 

export default Person