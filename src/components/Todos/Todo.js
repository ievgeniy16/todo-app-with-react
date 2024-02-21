import styles from "./Todo.module.css";
import { RiTodoFill, RiDeleteBin2Line } from "react-icons/ri";
import { FaCheck, FaEdit } from "react-icons/fa";
import { useState } from "react";

function Todo(props) {
  const { todo, deleteTodo, toggleTodo, updateTodo } = props;

  let [toggle, setToggle] = useState(false);
  let [todoItem, setTodoItem] = useState("");
  let [todoId, setTodoId] = useState("");

  const toggleModal = (item, id) => {
    setToggle(true);
    setTodoItem(item);
    setTodoId(id);
  };

  return (
    <div>
      <div
        className={`${styles.todo} ${
          todo.isCompleted ? styles.completedTodo : ""
        }`}
      >
        <RiTodoFill className={styles.todoIcon} />
        <div className={styles.todoText}>{todo.text}</div>
        <FaEdit
          className={styles.editIcon}
          onClick={() => toggleModal(todo.text, todo.id)}
        />
        <RiDeleteBin2Line
          className={styles.deleteIcon}
          onClick={() => deleteTodo(todo.id)}
        />
        <FaCheck
          className={styles.checkIcon}
          onClick={() => toggleTodo(todo.id)}
        />
      </div>

      {toggle && (
        <div className={styles.modalContainer}>
          <div className={styles.modal}>
            <h2>Update Form</h2>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                updateTodo(todoId, todoItem);
                setToggle(false);
              }}
            >
              <input
                type="text"
                placeholder="Update Todo"
                value={todoItem}
                onChange={(e) => setTodoItem(e.target.value)}
              />
              <button type="submit">Edit</button>
            </form>

            <div className={styles.btnContainer}>
              <button
                className={`${styles.modBtn}`}
                onClick={() => setToggle(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Todo;
