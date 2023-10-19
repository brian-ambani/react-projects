import styles from "./DisplayTodos.module.css";

export default function DisplayTodos() {
  return (
    <div className={styles.displayTodos}>
      <ul>
        <li>Workout</li>
        <li>Workout</li>
        <li>Workout</li>
        <li>Workout</li>
        <li>Workout</li>
      </ul>
    </div>
  );
}
