const TodoData = (props) => {
//props la 1 objects

    const {name, age} = props;
    console.log("Check props: ", props)
    return (
        <div className='todo-list'>
        <div>My name is {name}, I'm {age} year old!</div>
        <div>Learning React</div>
        <div>Watching Youtube</div>
        <div>
            {JSON.stringify(props.todoList)}
        </div>
       </div>
    );
}

export default TodoData;