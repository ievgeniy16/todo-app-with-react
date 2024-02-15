import Todo from "./Todo";

function TodoList(props) {
  const { todos } = props;

  return (
    <>
      <h2>TodoList</h2>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </>
  );
}

export default TodoList;
