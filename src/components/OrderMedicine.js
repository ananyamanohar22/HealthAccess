import React, { useState } from 'react';
import './OrderMedicine.css'; // Import your CSS file for styling

const OrderMedicine = () => {
  const [selectedMedicine, setSelectedMedicine] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState('');
  const [orderStatus, setOrderStatus] = useState(null);

  const handleOrder = () => {
    // Simulate order submission logic (replace with your actual logic)
    if (selectedMedicine && quantity > 0 && address.trim() !== '') {
      // Send the order to your backend or perform necessary actions
      setOrderStatus('Order placed successfully!');
    } else {
      setOrderStatus('Please fill in all the required information.');
    }
  };

  return (
    <div className="order-medicine-container">
      <h1>Order Medicine</h1>
      <div className="order-form">
        <div className="form-group">
          <label>Select Medicine:</label>
          <select
            value={selectedMedicine}
            onChange={(e) => setSelectedMedicine(e.target.value)}
          >
            <option value="">Select Medicine</option>
            <option value="medicine-1">Maalox</option>
            <option value="medicine-2">Acetaminophen (Tylenol</option>
            <option value="medicine-3">Ibuprofen (Advil, Motrin)</option>
            <option value="medicine-3">Aspirin</option>
            <option value="medicine-3">Ciprofloxacin</option>
            <option value="medicine-3">Loratadine (Claritin)</option>
            <option value="medicine-3">Pepcid</option>
            <option value="medicine-3">Metformin</option>
            <option value="medicine-3">Sitagliptin (Januvia)</option>
            <option value="medicine-3">Cefpodoxime 50 Mg Dispersible Tablets</option>
            <option value="medicine-3">Furoblu-500 Cefuroxime Axetil Tablets 500mg</option>
          </select>
        </div>

        <div className="form-group">
          <label>Quantity:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Delivery Address:</label>
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>

        <button className="submit-button" onClick={handleOrder}>
          Place Order
        </button>
      </div>
      {orderStatus && <p className="order-status">{orderStatus}</p>}
    </div>
  );
};

export default OrderMedicine;