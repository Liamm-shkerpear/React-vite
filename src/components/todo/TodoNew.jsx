const TodoNew = (props) => {
    console.log("Check funct: ", props)
    const {addNewTodo} = props;

//    addNewTodo("Thanh");
    return (
    <div className='todo-input'>
      <input type="text"/>
      <button>Add</button>
     </div>
    );
}

export default TodoNew;