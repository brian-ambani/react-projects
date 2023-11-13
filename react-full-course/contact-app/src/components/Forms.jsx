import { useState } from "react";

export default function Forms() {
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name);
  };

  return (
    <div>
      <h1>Form Demo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={handleChange} />
        <button>Submit</button>
      </form>
      <h3> You typed{}</h3>
    </div>
  );
}
