import "./App.css";
import Employee from "./components/Employee";

function App() {
  const ShowEmpoloyees = true;
  return (
    <div className="App">
      {ShowEmpoloyees ? (
        <>
          <Employee />
          <Employee />
          <Employee />
        </>
      ) : (
        <p>There are no employees</p>
      )}
    </div>
  );
}

export default App;
