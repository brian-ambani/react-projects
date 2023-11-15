import { useState, useEffect } from "react";

export default function UseEffectHook() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );

      const data = await response.json();
      setData(data);
    };
    getData();
  }, []);

  return (
    <div>
      {data.map((x) => (
        <ul key={Math.random()}>
          <li>{x.title}</li>
        </ul>
      ))}
    </div>
  );
}
