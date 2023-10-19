import styles from "./AddTodo.module.css";

export default function AddTodo() {
  return (
    <div className={styles.AddTodo}>
      <h1>Todo App</h1>
      <div className={styles.todoInput}>
        <input type="text" placeholder="Add Todo" />
        <button>Add todo</button>
      </div>
    </div>
  );
}
