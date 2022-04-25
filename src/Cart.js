import React, { Component } from 'react'

class Cart extends Component{
    state = {
        cart: []
    }

    //구현하기
    addProduct = () => {
        const product = prompt("원하시는 상품을 추가해주세요 !")        
        const {cart}=this.state
        
        this.setState({
            cart: cart.concat(product)
        })
        console.log(cart)
    }

    // 구현하기
    render(){
        const { cart } = this.state 
        return(
            <>
            <button type='button' onClick={this.addProduct}>상품 추가하기</button>
            <h1>상품목록</h1>
            <h2>--------</h2>
            {cart.map(product=>{
                return <h3>{product}</h3>
            })}
            </>
        )
    }
}
export default Cart