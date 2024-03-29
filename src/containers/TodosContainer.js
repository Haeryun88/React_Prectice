import { connect } from 'react-redux';
import Todos from '../components/Todos';
import { changeInput, insert, toggle, remove } from '../modules/todos';
import React from 'react';

const TodosContainer = ({ input, todos, changeInput, insert, toggle, remove }) => {
    return <Todos input={input} todos={todos} changeInput={changeInput} insert={insert} toggle={toggle} remove={remove} />;
};

export default connect(
    ({ todos }) => ({
        input: todos.input,
        todos: todos.todos,
    }),
    { changeInput, insert, toggle, remove }
)(TodosContainer);
