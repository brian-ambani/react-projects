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
            <Employee
              name="Brian"
              role="Intern"
              img="https://avatars.githubusercontent.com/u/1000223?v=4"
            />
            <Employee
              name="Mike"
              role={role}
              img="https://avatars.githubusercontent.com/u/1000223?v=4"
            />
            <Employee
              name="Micah"
              img="https://avatars.githubusercontent.com/u/1000223?v=4"
            />
            <Employee
              name="Brian"
              role="Intern"
              img="https://avatars.githubusercontent.com/u/1000223?v=4"
            />
            <Employee
              name="Mike"
              role={role}
              img="https://avatars.githubusercontent.com/u/1000223?v=4"
            />
            <Employee
              name="Micah"
              img="https://avatars.githubusercontent.com/u/1000223?v=4"
            />
            <Employee
              name="Brian"
              role="Intern"
              img="https://avatars.githubusercontent.com/u/1000223?v=4"
            />
            <Employee
              name="Mike"
              role={role}
              img="https://avatars.githubusercontent.com/u/1000223?v=4"
            />
            <Employee
              name="Micah"
              img="https://avatars.githubusercontent.com/u/1000223?v=4"
            />
          </div>
        </>
      ) : (
        <p>There are no employees</p>
      )}
    </div>
  );
}

export default App;
