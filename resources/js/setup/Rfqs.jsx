import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClientHeader from '../common/ClientHeader';
import ClientFooter from '../common/ClientFooter';
import RfqForm from './RfqForm'; 

function RfqManagement() {
  const [rfqs, setRfqs] = useState([]);
  const [editingRfq, setEditingRfq] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); 
  const rfqsPerPage = 5;

  useEffect(() => {
    fetchRfqs();
  }, []);

  const fetchRfqs = async () => {
    try {
      const response = await axios.get('/api/rfqs');
      setRfqs(response.data);
    } catch (error) {
      console.error('Error fetching rfqs:', error);
    }
  };

  const handleFormSubmit = async (formData) => {
    try {
      if (editingRfq) {
        await axios.put(`/api/rfqs/${editingRfq.id}`, formData);
      } else {
        await axios.post('/api/rfqs', formData);
      }
      await fetchRfqs(); 
      setEditingRfq(null); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEditRfq = (rfqId) => {
    const rfqToEdit = rfqs.find(rfq => rfq.id === rfqId);
    setEditingRfq(rfqToEdit);
  };

  const handleDeleteRfq = async (rfqId) => {
    try {
      await axios.delete(`/api/rfqs/${rfqId}`);
      setRfqs(prevRfqs => prevRfqs.filter(rfq => rfq.id !== rfqId));
    } catch (error) {
      console.error('Error deleting rfq:', error);
    }
  };

  const indexOfLastRfq = currentPage * rfqsPerPage;
  const indexOfFirstRfq = indexOfLastRfq - rfqsPerPage;
  const currentRfqs = rfqs.slice(indexOfFirstRfq, indexOfLastRfq);

  const totalPages = Math.ceil(rfqs.length / rfqsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <ClientHeader />
      <h2 className='rfq_title_page'>Rfq Management</h2>
      <RfqForm onSubmit={handleFormSubmit} initialValues={editingRfq} />
      <div className='rfq_list_container'>
        <h2 className='rfq_list_title'>Current Rfqs</h2>
        <ul className='rfq_list'>
          {currentRfqs.map(rfq => (
            <li className='rfq_line_items' key={rfq.id}>
              <div className='rfq_name_number'>{rfq.rfq_number} - {rfq.rfq_name}</div>
              <div className='rfq_btns'>
                <button className='rfq_btn' onClick={() => handleEditRfq(rfq.id)}>Edit Rfq</button>
                <button className='rfq_btn' onClick={() => handleDeleteRfq(rfq.id)}>Delete Rfq</button>
              </div>
            </li>
          ))}
        </ul>
        <div>
          {rfqs.length > rfqsPerPage && (
            <div className='paginate_btn_container'>
              <button className='paginate_btns' onClick={() => paginate(currentPage - 1)}>Previous</button>
              <button className='paginate_btns' onClick={() => paginate(currentPage + 1)}>Next</button>
            </div>
          )}
        </div>
      </div>
      <ClientFooter />
    </div>
  );
}

export default RfqManagement;

