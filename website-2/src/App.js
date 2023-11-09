import "./index.css";
import Employee from "./components/Employee";
import { useState } from "react";

function App() {
  const [role, setRole] = useState("Prodct Engineer");
  const [employees, setEmployees] = useState([
    {
      name: "Brian",
      role: "Founder",
      img: "https://images.pexels.com/photos/18938081/pexels-photo-18938081/free-photo-of-portrait-of-an-elderly-man-wearing-a-cap.jpeg",
    },
    {
      name: "Mary",
      role: "Co-Founder",
      img: "https://images.pexels.com/photos/157661/young-woman-shooting-model-157661.jpeg",
    },
    {
      name: "Kate",
      role: "Project Manager",
      img: "https://images.pexels.com/photos/3797438/pexels-photo-3797438.jpeg",
    },
    {
      name: "Jane",
      role: "Intern",
      img: "https://images.pexels.com/photos/2625122/pexels-photo-2625122.jpeg",
    },
    {
      name: "Rakesh",
      role: "Developer",
      img: "https://images.pexels.com/photos/2232981/pexels-photo-2232981.jpeg",
    },
    {
      name: "Micah",
      role: "Web Designer",
      img: "https://images.pexels.com/photos/1559487/pexels-photo-1559487.jpeg",
    },
  ]);

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

          <div className="flex flex-wrap justify-center">
            {employees.map((employee) => {
              console.log(employee);
              return (
                <Employee
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                />
              );
            })}
          </div>
        </>
      ) : (
        <p>There are no employees</p>
      )}
    </div>
  );
}

export default App;
