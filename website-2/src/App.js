import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const [role, setRole] = useState("Prodct Engineer");

  const ShowEmpoloyees = true;
  return (
    <div className="App">
      {ShowEmpoloyees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />

          <div className="flex flex-wrap">
            <Employee name="Brian" role="Intern" />
            <Employee name="Mike" role={role} />
            <Employee name="Micah" />
          </div>
        </>
      ) : (
        <p>There are no employees</p>
      )}
    </div>
  );
}

export default App;
