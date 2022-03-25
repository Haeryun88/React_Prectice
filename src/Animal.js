import React from 'react'

class Animal extends React.Component{
	state={
	type:'cat',
	name:'meyow',
	size:'small',
	sound:'low',
	appearence:'cute'
	}

	render(){
	//state나 props 값을 조회
	const {type,name,size,sound,appearence}=this.state
	return(
        <>
	<h1>동물 정보</h1>
	<h1>동물 이름:{type}</h1>
	<h2>종류:{name}</h2>
	<h3>크기:{size}</h3>
	<h4>소리:{sound}</h4>
	<h5>생김새:{appearence}</h5>
	</>
    )
	}
} 

export default Animal