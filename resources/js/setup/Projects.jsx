import '/resources/scss/setup/Project.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ClientHeader from '../common/ClientHeader';
import ClientFooter from '../common/ClientFooter';
import ProjectForm from './ProjectForm'; // Assuming ProjectForm is in a separate file

// function ProjectManagement() {
//     const [projects, setProjects] = useState([]);
//     const [editingProject, setEditingProject] = useState(null);

//     // Fetch preexisting projects from the API endpoint
//     useEffect(() => {
//         axios.get('/api/projects')
//             .then(response => {
//                 setProjects(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching projects:', error);
//             });
//     }, []);

//     const handleFormSubmit = () => {
//         // Update projects list after form submission
//         axios.get('/api/projects')
//             .then(response => {
//                 setProjects(response.data);
//             })
//             .catch(error => {
//                 console.error('Error fetching projects:', error);
//             });
//     };

//     const handleEditProject = (projectId) => {
//         // Set the project to be edited
//         const projectToEdit = projects.find(project => project.id === projectId);
//         setEditingProject(projectToEdit);
//     };

//     const handleDeleteProject = (projectId) => {
//         // Handle deletion of project with given ID
//         axios.delete(`/api/projects/${projectId}`)
//             .then(response => {
//                 console.log('Project deleted successfully.');
//                 // Update projects list after deletion
//                 setProjects(projects.filter(project => project.id !== projectId));
//             })
//             .catch(error => {
//                 console.error('Error deleting project:', error);
//             });
//     };

//     return (
//         <div>
//             <ProjectForm onSubmit={handleFormSubmit} initialValues={editingProject} />

//             <div>
//                 <h2>Preexisting Projects</h2>
//                 <ul className='project_list'>
//                     {projects.map(project => (
//                         <li key={project.id}>
//                             {project.project_number} - {project.project_name}
//                             <button onClick={() => handleEditProject(project.id)}>Edit</button>
//                             <button onClick={() => handleDeleteProject(project.id)}>Delete</button>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// }

// export default ProjectManagement;

function ProjectManagement() {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);

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

  const handleFormSubmit = async () => {
    try {
        if (editingProject) {
            // Update existing project
            await axios.put(`/api/projects/${editingProject.id}`, editingProject);
        } else {
            // Create new project
            await axios.post('/api/projects', editingProject);
        }
        // Refetch projects after submission to update the list
        const response = await axios.get('/api/projects');
        setProjects(response.data);
        // Reset editingProject state after submission
        setEditingProject(null);
    } catch (error) {
        console.error('Error:', error);
    }
};

  const handleEditProject = (projectId) => {
    console.log('Editing project with ID', projectId);
      // Set the project to be edited
      const projectToEdit = projects.find(project => project.id === projectId);
      console.log('Project to edit', projectToEdit);
      setEditingProject(projectToEdit);
  };

  const handleDeleteProject = async (projectId) => {
    try {
       await axios.delete(`/api/projects/${projectId}`);
       console.log('Project deleted successfully.');
       setProjects(projects.filter(project => project.id !== projectId));
    } catch (error) {
       console.error('Error deleting project:', error);
       setError('An error occurred while deleting the project.');
    }
   };

    return (
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
    );
}

export default ProjectManagement;