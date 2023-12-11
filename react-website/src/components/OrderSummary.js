import React from "react";
import { useNavigate } from "react-router-dom";

export default function OrderSummary() {
  const navigate = useNavigate();
  return (
    <div>
      <h3>Order Summary</h3>
      <p>Thank you for your order!</p>
      <p>Order summary:</p>
      <ul>
        <li>Product: iPhone 12</li>
        <li>Price: $999</li>
        <li>Quantity: 1</li>
      </ul>

      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}
