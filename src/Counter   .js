import React, { Component } from 'react';

class Counter extends Component{
    state = {
    	count: 0
    }
    increase = () => {
    	const {count} = this.state
    	console.log(`before updating state: ${count}`)//업데이트 전
        this.setState({ count: count + 1}) //1씩 증가
        // this.setState((preState)=>{
        //     return {count:preState.count+1}
        // })//3씩 증가(콜백함수)
        console.log(`after updating state: ${count}`)//업데이트 후
    }
    increaseMultiple = () => {
        // ------------ 업데이트 되지 않는 구간 -----------------//
        this.increase() // setState 인자로 객체를 사용하면 업데이트 안된다(0 -> 1)    
        this.increase() // setState 인자로 객체를 사용하면 업데이트 안된다(0 -> 1)  
        this.increase() // setState 인자로 객체를 사용하면 업데이트 안된다(0 -> 1)
        
        console.log(`right after event: ${this.state.count}`)
        // ----------------------------------------------------//
    }
    render(){
        // 여기서 state 가 업데이트된다
        // 모든 이벤트가 종료되는 이 시점에서 state 를 변경하고 render 함수를 한번만 호출한다
        // console.log('counter')
        console.log('child')
    	const {count} = this.state
        console.log(`state in render function: ${count}`)
    	return (
            <>
            	<h1>{count}</h1>
                <button type="button" onClick={this.increaseMultiple}>increase count</button>
            </>
        )
    }
}
export default Counter;