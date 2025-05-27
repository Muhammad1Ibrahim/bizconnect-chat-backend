import React, { useState } from 'react';

const BusinessVerification = () => {
  const [formData, setFormData] = useState({
    legalName: '',
    address: '',
    taxId: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Verification request submitted!');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>Verify your Business</h2>
      <form onSubmit={handleSubmit}>
        <input name="legalName" placeholder="Business Name" onChange={handleChange} />
        <input name="address" placeholder="Address" onChange={handleChange} />
        <input name="taxId" placeholder="Tax ID" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BusinessVerification;
