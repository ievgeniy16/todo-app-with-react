import Todo from "./Todo";
import styles from './TodoList.module.css';

function TodoList(props) {
  const { todos, deleteTodo } = props;

  return (
    <div className={styles.todoListContainer}>
      <h2>TodoList</h2>
      {todos.map((todo) => (
        <Todo
        key={todo.id}
        todo={todo}
        deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;
