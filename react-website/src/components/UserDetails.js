import { useParams } from "react-router-dom";

export default function UserDetails() {
  const { userId } = useParams();
  return (
    <div>
      <h1>User Details</h1>
      <p>Check details about user {userId}</p>
    </div>
  );
}
