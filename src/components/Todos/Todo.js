import styles from "./Todo.module.css";
import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";

function Todo(props) {
  const { todo } = props;

  return (
    <div className={styles.todo}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo}</div>
      <RiDeleteBin2Line className={styles.deleteIcon} />
      <FaCheck className={styles.checkIcon} />
    </div>
  );
}

export default Todo;
