import styles from "./DisplayTodos.module.css";

export default function DisplayTodos({ inputText }) {
  return <div className={styles.displayTodos}>{inputText}</div>;
}
