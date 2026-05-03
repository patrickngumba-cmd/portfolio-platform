import { useState } from 'react'
import ProjectForm from './components/ProjectForm'
import SearchBar from './components/SearchBar'
import ProjectList from './components/ProjectList'
import './App.css'

function App() {
  // State for the list of projects
  const [projects, setProjects] = useState([
    { id: 1, title: 'Project 1', description: 'Description of the project' },
    { id: 2, title: 'Project 2', description: 'Description of the project' }
  ]);

  // State for the search input
  const [searchQuery, setSearchQuery] = useState('');

  // Function to add a new project to the list
  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: Date.now() }]);
  };

  // Filter projects based on the search query
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <header>
        <h1>Personal Project Showcase App</h1>
      </header>

      <ProjectForm onAddProject={addProject} />

      {/* This section holds the search and the list */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App
