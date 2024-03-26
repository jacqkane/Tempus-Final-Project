import '/resources/scss/setup/Project.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClientHeader from '../common/ClientHeader';
import ClientFooter from '../common/ClientFooter';
import ProjectForm from './ProjectForm'; 

function ProjectManagement() {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); 
  const projectsPerPage = 5;

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await axios.get('/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleCreateProject = async (formData) => {
    try {
      await axios.post('/api/projects', formData);
      await fetchProjects(); 

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleEditProject = (projectId) => {
    const projectToEdit = projects.find(project => project.id === projectId);
    setEditingProject(projectToEdit);
  };

  const handleDeleteProject = async (projectId) => {
    try {
      await axios.delete(`/api/projects/${projectId}`);
      setProjects(prevProjects => prevProjects.filter(project => project.id !== projectId));
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);
  const initialValues = { project_number: '', project_name: '', start_date: '', end_date: '' };

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

return (
  <div>
    <ClientHeader />
    <h2 className='project_title_page'>Project Management</h2>
    <ProjectForm initialValues={initialValues} onSubmit={handleCreateProject} />
    <div className='project_list_container'>
      <h2 className='project_list_title'>Current Projects</h2>
      <ul className='project_list'>
        {currentProjects.map(project => (
          <li className='project_line_items' key={project.id}>
            <div className='project_name_number'>{project.project_number}   -   {project.project_name}</div>
            <div className='project_btns'>
              <button className='project_btn' onClick={() => handleEditProject(project.id)}>Edit Project</button>
              <button className='project_btn' onClick={() => handleDeleteProject(project.id)}>Delete Project</button>
            </div>
          </li>
        ))}
      </ul>
      <div>
        {projects.length > projectsPerPage && (
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

export default ProjectManagement;

