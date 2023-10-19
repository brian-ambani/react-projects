import styles from "./App.module.css";
import AddTodo from "./components/addTodo/AddTodo";
import DisplayTodos from "./components/displayTodo/DisplayTodos";

function App() {
  return (
    <div className={styles.App}>
      <AddTodo />
      <DisplayTodos />
    </div>
  );
}

export default App;
