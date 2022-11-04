import CounterContainer from './containers/CounterContainer';
import './App.css';
import './reset.css';
import TodosContainer from './containers/TodosContainer';

const APP = () => {
    return (
        <div>
            <CounterContainer />
            <hr />
            <TodosContainer/>
        </div>
    );
};

export default APP;
