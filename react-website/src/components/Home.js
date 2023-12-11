import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Home</h3>
      <p>Welcome to our site!</p>
      <button onClick={() => navigate("order-summary")}>Order Now</button>
    </div>
  );
}
