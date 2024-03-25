import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectForm = ({ onSubmit, initialValues }) => {
  const [projectData, setProjectData] = useState(initialValues || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating ${name} to:`, value);
    setProjectData({ ...projectData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (initialValues) {
        // Update existing project
        console.log('Editing project:', initialValues);

        await axios.put(`/api/projects/${initialValues.id}`, projectData);
      } else {
        // Create new project
        console.log('Creating project:', projectData);

        await axios.post('/api/projects', projectData);
      }
      onSubmit(); // Trigger the callback to update the projects list
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    setProjectData(initialValues || {});
  }, [initialValues]);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="project_number">Project Number:</label>
        <input 
          type="text"
          id="project_number"
          name="project_number"
          value={projectData.project_number || ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="project_name">Project Name:</label>
        <input
          type="text"
          id="project_name"
          name="project_name"
          value={projectData.project_name || ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="start_date">Start Date:</label>
        <input
          type="date"
          id="start_date"
          name="start_date"
          value={projectData.start_date || ''}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="end_date">End Date:</label>
        <input
          type="date"
          id="end_date"
          name="end_date"
          value={projectData.end_date || ''}
          onChange={handleChange}
        />
      </div>
      <button className='btn' type="submit">{initialValues ? 'Update' : 'Create'} Project</button>
    </form>
  );
};

export default ProjectForm;