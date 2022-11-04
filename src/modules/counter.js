//1.액션타입 정의
//모듈이름/액션이름(대문자)
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

//2.액션생성함수
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//3. 초기상태
const initialState = {
    number: 0,
};

//4.리듀서 함수
function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                number: state.number + 1,
            };
        case DECREASE:
            return {
                number: state.number - 1,
            };
        default:
            return state;
    }
}

export default counter;
