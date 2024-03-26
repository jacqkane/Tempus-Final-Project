import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "/resources/scss/setup/Project.scss";

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
            await onSubmit(projectData);
            setProjectData({}); 
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        setProjectData(initialValues || {});
    }, [initialValues]);

    return (
        <form className='project_form' onSubmit={handleSubmit}>
            <div className='project_inputs'>
                <label className='project_label' htmlFor="project_number">Project Number:</label>
                <input
                    className='project_input'
                    type="text"
                    id="project_number"
                    name="project_number"
                    value={projectData.project_number || ''}
                    onChange={handleChange}
                />
            </div>
            <div className='project_inputs'>
            <label className='project_label' htmlFor="project_name">Project Name:</label>
            <input
                className='project_input'
                type="text"
                id="project_name"
                name="project_name"
                value={projectData.project_name || ''}
                onChange={handleChange}
            />
        </div>
        <div className='project_inputs'>
            <label className='project_label' htmlFor="start_date">Start Date:</label>
            <input
                className='project_input'
                type="date"
                id="start_date"
                name="start_date"
                value={projectData.start_date || ''}
                onChange={handleChange}
            />
        </div>
        <div className='project_inputs'>
            <label className='project_label' htmlFor="end_date">End Date:</label>
            <input
                className='project_input'
                type="date"
                id="end_date"
                name="end_date"
                value={projectData.end_date || ''}
                onChange={handleChange}
            />
        </div>
        <div className='project_submit_btn_container'>
              <button className='project_submit_btn' type="submit">
                  Create Project
              </button>
          </div>
        </form>
    );
};

export default ProjectForm;