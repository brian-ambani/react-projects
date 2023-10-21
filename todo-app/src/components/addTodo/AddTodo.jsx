import styles from "./AddTodo.module.css";

export default function AddTodo({ setInputText }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.AddTodo}>
      <h1>Todo App</h1>
      <div className={styles.todoInput}>
        <input onChange={inputTextHandler} type="text" placeholder="Add Todo" />
        <button onClick={submitTodoHandler}>Add todo</button>
      </div>
    </div>
  );
}
