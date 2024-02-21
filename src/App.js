import { useState } from "react";
import "./App.css";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import { v4 as uuidv4 } from "uuid";
import TodoActions from "./components/Todos/TodoActions";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

  let updateTodo = (id, newTodo) => {
    // let updatedTodo = { ...todo, text: newTodo, isCompleted: false };
    setTodos(todos.map((t => {
      return t.id === id 
      ? {...t, text: newTodo}
      : {...t}

    })));
  };
  // let updateTodo = (id, newTodo) => {
  //   let todo = todos[id];
  //   let updatedTodo = { ...todo, text: newTodo, isCompleted: false };
  //   setTodos(todos.map((t) => (t.id === id ? updatedTodo : t)));
  // };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoActions
        resetTodos={resetTodosHandler}
        deleteCompletedTodos={deleteCompletedTodosHandler}
        completedTodos={!!completedTodosCount}
      />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
        updateTodo={updateTodo}
      />
      {completedTodosCount > 0 && (
        <p>{`You have completed ${completedTodosCount} ${
          completedTodosCount > 1 ? "todos" : "todo"
        }`}</p>
      )}
    </div>
  );
}

export default App;
