// 아래 코드는 props 로 주어진 댓글을 필터링하는 CommentFilter 컴포넌트이다. 하지만 댓글 필터링 기능이 제대로 동작하지 않는다. 코드를 수정해서 댓글 필터링 기능이 잘 동작하도록 해보자!
import React, { Component } from 'react'

class CommentFilter extends Component{
    state = {
        comment: this.props.comment.split(' '),
        insults: ['바보', '똥개', '그지', '임마', '새끼', '죽을']
    }
    filterComment = () => {
        const { insults } = this.state // 댓글을 음절 단위로 끊기
        for(let insult of insults){ // 욕설 필터링
            //이벤트 핸들러 함수 안에서 setState 를 동시에 여러번 호출하는 경우
            //최신 상태값을 조회하려면 어떻게하면 될까?
            this.setState((prevState)=>{
                return {
                    comment: prevState.comment.filter(word => !word.includes(insult))
                }
            })
                // comment: this.state.comment.filter(word => !word.includes(insult)) 
        
        }//객체형태가 아닌 함수형태로 
        //prevState 를 검색해서 찾아볼것

    //이벤트 핸들러 함수 안에서 setState  를 동시에 여러번 호출하는 경우
    //최신 상태값을 조회하려면 어떻게 하면 될까?

    //             this.setState({comment: this.state.comment.filter(word => !word.includes("바보")) })
    //             this.setState({comment: this.state.comment.filter(word => !word.includes("똥개")) })
    //             this.setState({comment: this.state.comment.filter(word => !word.includes("그지")) })
    //             this.setState({comment: this.state.comment.filter(word => !word.includes("새끼")) })
    //             this.setState({comment: this.state.comment.filter(word => !word.includes("임마")) })
    //             this.setState({comment: this.state.comment.filter(word => !word.includes("죽을")) })
    // 


}
    
    componentDidMount(){
        this.filterComment()
    }
    render(){
        const { comment } = this.state
        console.log(comment)
        return (
            <>
                <h2>{comment.join(' ')}</h2>
            </>
        )
    }
}

export default CommentFilter;