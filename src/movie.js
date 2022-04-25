import React from 'react'

function Movie({ id, ...rest }){
    console.log(rest) // 나머지 속성들이 rest 객체의 프로퍼티로 설정됨
    return (
        <>
            <h1>무비 정보</h1>
            <h3>{rest.title}</h3>
            <h3>{rest.language}</h3>
            <h3>{rest.release}</h3>
            <h3>{rest.length}</h3>
            <h3>{rest.author}</h3>
            <h3>{rest.production}</h3>
        </>
    )
}
export default Movie