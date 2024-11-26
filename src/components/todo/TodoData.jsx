const TodoData = (props) => {
//props la 1 objects

    const {name, age, data} = props;
    console.log("Check props: ", props)
    return (
        <div className='todo-list'>
        <div>My name is {name}, I'm {age} year old!</div>
        <div>Learning React</div>
        <div>Watching Youtube</div>
       </div>
    );
}

export default TodoData;