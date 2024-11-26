import './components/todo/todo.css'
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg'

const svFpt = "Liam";
const age = 20;
const data = {
  address: "danang",
  country: "vietnam" 
}
const App = () => {
  

  return (
   <div className="todo-container">
     <div className="todo-title">Todo List</div>
     <TodoNew />
     <TodoData 
        name = {svFpt}
        age = {age}
        data = {data}
     />
     <div className="todo-image">
        <img src={ reactLogo } className="logo"/>
     </div>
   </div>
  );
}

export default App
