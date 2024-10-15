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
import "./app.css";
function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const addTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask("");
  };
  const deleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

  return (
    <>
      <div className="container">
        <h1>Todo App Using React</h1>
        <div className="todo-body">
          <input
            type="text"
            name=""
            id=""
            placeholder="Enter New Task Here"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
        </div>
        <button id="addbtn" onClick={addTask}>Add</button>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button id="deletebtn" onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default ToDo;
