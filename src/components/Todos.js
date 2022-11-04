const TodoItem = ({ todo, toggle, remove }) => {
    return (
        <div>
            <input type="checkbox" onClick={() => toggle(todo.id)} checked={todo.done} readOnly={true} />
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
            <button onClick={() => remove(todo.id)}>삭제</button>
        </div>
    );
};

const Todos = ({ input, todos, changeInput, insert, toggle, remove }) => {
    const onSubmit = (e) => {
        e.preventDefault();
        insert(input);
        console.log(todos);
        changeInput(' ');
    };
    const onChange = (e) => changeInput(e.target.value);

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input value={input} onChange={onChange} />
                <button type="submit">등록</button>
            </form>
            <div>
                {todos.map((todo) => (
                    <TodoItem todo={todo} key={todo.id} toggle={toggle} remove={remove} />
                ))}
            </div>
        </div>
    );
};

export default Todos;
