// 아래 코드는 버튼을 클릭할때마다 포토 갤러리에 사진을 추가하고, 화면에 전체 사진 리스트를 보여주는 PhotoGallery 컴포넌트의 일부분이다. 코드를 완성해서 해당 기능이 정상적으로 동작하도록 해보자! (prompt 함수를 이용하여 아래와 같이 사용자로부터 이미지 주소를 입력받는다)

import React, { Component } from 'react'

class PhotoGallery extends Component{
    state = {
        photos: []
    }

    //구현하기
    addPhoto = () => {
        const photo = prompt("추가하려는 사진의 경로를 입력해주세요 !")
        const {photos}=this.state

        this.setState({
            photos: photos.concat(photo)
        })
    }

    // 구현하기
    render(){
        const { photos } = this.state 
        return(
            <>
            <button type='button' onClick={this.addPhoto}>사진 가져오기</button>
            <h1>포토 갤러리</h1>
            <h3>------------------</h3>
            {
            photos.map(photo=>{
                return <img src={photo}></img>
            })
            }
            </>
        )
    }
}
export default PhotoGallery