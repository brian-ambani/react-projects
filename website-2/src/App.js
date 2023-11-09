import "./App.css";
import Employee from "./components/Employee";

function App() {
  const ShowEmpoloyees = true;
  return (
    <div className="App">
      {ShowEmpoloyees ? (
        <>
          <Employee name="Brian" role="Intern" />
          <Employee name="Mike" />
          <Employee name="Micah" />
        </>
      ) : (
        <p>There are no employees</p>
      )}
    </div>
  );
}

export default App;
