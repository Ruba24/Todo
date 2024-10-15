// import React, { useState } from "react";
// function ToDo() {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState('');
//   function addTask(event) {
//     event.preventDefault();
//     setTodos((prevTodos) => [...prevTodos, newTodo]);
//     setNewTodo('');
//   };
//   function handleDelete(index) {
//     setTodos((prevTodos) => prevTodos.filter((todo, i) => i !== index));
//   };
//   return (
//     <>
//       <div>
//         <h1>ToDo App with React</h1>
//         <input type="text" value={newTodo} onChange={(event) => setNewTodo(event.target.value)} placeholder="Add New Task" />
//         <button onClick={addTask}>Add</button>
//         <ul>
//           {todos.map((todo, index) => (
//             <li key={index}>{todo}
//               <button onClick={() => handleDelete(index)}>Delete</button></li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// }
// export default ToDo

import React, { useState } from "react";
function ToDo(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const addTask = (e) => {
        e.preventDefault();
        setTasks([...tasks, newTask]);
        setNewTask('');
    }
    
    return(
        <>
        <h1>Todo App Using React</h1>
        <input type="text" name="" id="" placeholder="Enter New Task Here"/>
        <button>Add</button>
        </>
    )
}
export default ToDo