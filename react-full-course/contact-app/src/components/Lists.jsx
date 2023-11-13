import React from "react";

export default function Lists() {
  //simple list
  //   const names = ["John", "Paul", "George", "Ringo"];
  //   return (
  //     <div>
  //       {names.map((name) => {
  //         return <h2 key={Math.random() * 10}>{name}</h2>;
  //       })}
  //     </div>
  //   );

  // Arrays of objects
  const Users = [
    { name: "Brian", age: 25, role: "Admin" },
    { name: "John", age: 20, role: "User" },
    { name: "Mary", age: 18, role: "User" },
  ];

  return (
    <>
      {Users.map((user) => (
        <ul key={Math.random() * 10}>
          <li>{user.name}</li>
          <li>{user.age}</li>
          <li>{user.role}</li>
        </ul>
      ))}
    </>
  );
}
