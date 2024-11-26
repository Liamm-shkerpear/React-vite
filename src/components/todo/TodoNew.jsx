const TodoNew = (props) => {
    console.log("Check funct: ", props)
    const {addNewTodo} = props;

//    addNewTodo("Thanh");
    const handleClick = () => {
        alert("Click me")
    }
    const handleOnChange = (name) => {
        console.log(">>>>>Handle on change", name)
    }
    return (
    <div className='todo-input'>
      <input type="text"
      onChange={(event) => handleOnChange(event.target.value)}
      />
      <button
       style={{cursor: "pointer"}} 
       onClick={handleClick}
       >Add</button>
     </div>
    );
}

export default TodoNew;