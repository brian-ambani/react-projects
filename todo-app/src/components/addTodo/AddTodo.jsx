import styles from "./AddTodo.module.css";

export default function AddTodo({ inputText, setInputText, todos, setTodos }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);

    setInputText("");
  };

  return (
    <div className={styles.AddTodo}>
      <h1>Todo App</h1>
      <div className={styles.todoInput}>
        <input
          value={inputText}
          onChange={inputTextHandler}
          type="text"
          placeholder="Add Todo"
        />
        <button onClick={submitTodoHandler}>Add todo</button>
      </div>
    </div>
  );
}
