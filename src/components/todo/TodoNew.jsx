import { useState } from "react";

const TodoNew = (props) => {
    // useState hook
    // const valueInput = "Thanh";
    const [valueInput, setValueInput] = useState("")
    const {addNewTodo} = props;

//    addNewTodo("Thanh");
    const handleClick = () => {
        console.log("Check value input: ", valueInput)
    }
    const handleOnChange = (name) => {
        setValueInput(name)
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
       <div>
        My text input is: {valueInput}
       </div>
     </div>
    );
}

export default TodoNew;