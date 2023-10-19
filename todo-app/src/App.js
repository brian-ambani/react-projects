import styles from "./App.module.css";
import AddTodo from "./components/AddTodo";
import DisplayTodos from "./components/DisplayTodos";

function App() {
  return (
    <div className={styles.App}>
      <h1>Hello react</h1>
      <AddTodo />
      <DisplayTodos />
    </div>
  );
}

export default App;
