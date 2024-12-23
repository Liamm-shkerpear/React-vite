const TodoData = (props) => {

    const {todoList} = props;
    console.log("Check props: ", todoList)
    return (
        
        <div className='todo-list'>
            {todoList.map((item, index) => {
                // console.log("check map: ", item, index)
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name}</div>
                        <button>Delete</button>
                    </div>
                )
            })}

       </div>
        
    )
}

export default TodoData;