import React from "react";
import PropTypes from 'prop-types';

function YoutubeVideo({videoId, videoName, videoLength, videoDescription,videoAuthor,children}){
    return (
        <div id={videoId}>
            <h1>{videoName}-{(parseInt(videoLength)/1000).toFixed(1)} MB</h1>
            <h3>author - {videoAuthor}</h3>
            <p>{videoDescription}</p>
            {children}
        </div>
    )
}

export default YoutubeVideo;

//필수는 아니지만 정의를 해두면 다른 개발자가 해당 컴포넌트에 어떤 속성들이 들어가는지 한눈에 파악가능함
//잘못된 데이터가 들어오면 경고창을 띄워서 데이터의 유효성 검증

YoutubeVideo.propTypes = {
    videoId: PropTypes.string,
    videoName: PropTypes.string,
    videoLength: PropTypes.number,
    videoDescription: PropTypes.string,
}
//props의 기본값(디폴트 값) 설정
YoutubeVideo.defaultProps = {
    videoAuthor: "디폴트 작성자"
}