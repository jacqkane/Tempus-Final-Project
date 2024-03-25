import '/resources/scss/setup/Project.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClientHeader from '../common/ClientHeader';
import ClientFooter from '../common/ClientFooter';

const ProjectForm = ({ onSubmit, initialValues }) => {
  const [projectData, setProjectData] = useState(initialValues || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (initialValues) {
        // Update existing project
        await axios.put(`/api/projects/${initialValues.id}`, projectData);
      } else {
        // Create new project
        await axios.post('/api/projects', projectData);
      }
      onSubmit();
    } catch (error) {
      console.error('Error:', error);
    }
  };

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

function ProjectManagement() {
    const [projects, setProjects] = useState([]);

    // Fetch preexisting projects from the API endpoint
    useEffect(() => {
        axios.get('/api/projects')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
            });
    }, []);

    const handleFormSubmit = () => {
        // Update projects list after form submission
        axios.get('/api/projects')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error('Error fetching projects:', error);
            });
    };

    const handleEditProject = (projectId) => {
        // Handle editing of project with given ID
        console.log('Edit project with ID:', projectId);
    };

    const handleDeleteProject = (projectId) => {
        // Handle deletion of project with given ID
        axios.delete(`/api/projects/${projectId}`)
            .then(response => {
                console.log('Project deleted successfully.');
                // Update projects list after deletion
                setProjects(projects.filter(project => project.id !== projectId));
            })
            .catch(error => {
                console.error('Error deleting project:', error);
            });
    };

    return (
      <>
      <ClientHeader />
        <div>
            <ProjectForm onSubmit={handleFormSubmit} />

            <div>
                <h2>Preexisting Projects</h2>
                <ul className='project_list'>
                    {projects.map(project => (
                        <li key={project.id}>
                            {project.project_number} - {project.project_name}
                            <button onClick={() => handleEditProject(project.id)}>Edit</button>
                            <button onClick={() => handleDeleteProject(project.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <ClientFooter />
        </>
    );
}

export default ProjectManagement;