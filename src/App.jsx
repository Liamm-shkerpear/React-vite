import './components/todo/todo.css'
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg'
import { useState } from 'react';


const App = () => {

  const [todoList, setTodoList] = useState([
    // {id: 1, name: "Learning React"},
    // {id: 2, name: "Watching Youtube"}
  ])

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }
// ... -> copy data truoc do 
    setTodoList([...todoList, newTodo])
  }

    const randomIntFromInterval = (min, max) => { // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
    }


  return (
   <div className="todo-container">
     <div className="todo-title">Todo List</div>
     <TodoNew 
         addNewTodo={ addNewTodo } //truyen function nen khong co (), thuc thi function thi moi co ()
     />

  {todoList.length > 0 ?
      <TodoData 
          todoList = {todoList}
      />
  :
      <div className="todo-image">
          <img src={ reactLogo } className="logo"/>
      </div>
  }

{/* {todoList.length > 0 &&
     <TodoData 
        todoList = {todoList}
     />
}
{todoList.length === 0 &&
     <div className="todo-image">
        <img src={ reactLogo } className="logo"/>
     </div>
} */}
   </div>
  );
}

export default App
