import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '/resources/scss/setup/Rfqs.scss';

const RfqForm = ({ onSubmit, initialValues }) => {
  const [rfqData, setRfqData] = useState(initialValues || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name} to:`, value);
    setRfqData({ ...rfqData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted');
    try {
      await onSubmit(rfqData);
      setRfqData({});
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    setRfqData(initialValues || {});
  }, [initialValues]);

  return (
    <form className='rfq_form' onSubmit={handleSubmit}>
      <div className='rfq_inputs'>
        <label className='rfq_label' htmlFor="rfq_number">RFQ Number:</label>
        <input className='rfq_input'
          type="text"
          id="rfq_number"
          name="rfq_number"
          value={rfqData.rfq_number || ''}
          onChange={handleChange}
        />
      </div>
      <div className='rfq_inputs'>
        <label className='rfq_label' htmlFor="rfq_name">RFQ Name:</label>
        <input className='rfq_input'
          type="text"
          id="rfq_name"
          name="rfq_name"
          value={rfqData.rfq_name || ''}
          onChange={handleChange}
        />
      </div>
      <div className='rfq_submit_btn_container'>
        <button className='rfq_submit_btn' type="submit">
          {initialValues ? 'Update' : 'Create'} RFQ
        </button>
      </div>
    </form>
  );
};

export default RfqForm;
