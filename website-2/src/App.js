import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const [role, setRole] = useState("dev");

  const ShowEmpoloyees = true;
  return (
    <div className="App bg-red-300">
      {ShowEmpoloyees ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <Employee name="Brian" role="Intern" />
          <Employee name="Mike" role={role} />
          <Employee name="Micah" />
        </>
      ) : (
        <p>There are no employees</p>
      )}
    </div>
  );
}

export default App;
