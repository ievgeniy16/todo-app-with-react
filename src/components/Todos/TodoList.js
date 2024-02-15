import Todo from "./Todo";
import styles from './TodoList.module.css';

function TodoList(props) {
  const { todos } = props;

  return (
    <div className={styles.todoListContainer}>
      <h2>TodoList</h2>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}

export default TodoList;
