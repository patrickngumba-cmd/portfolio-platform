import { useState } from 'react';

function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (title.trim() === '' || description.trim() === '') {
      alert("Please enter both a title and description");
      return;
    }
    
   
    onAddProject({ title, description });
    
    
    setTitle('');
    setDescription('');
  };

  return (
    <section className="card">
      <h3>Add Project</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        
        <label>Description</label>
        <textarea 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
        />
        
        <button type="submit">Add</button>
      </form>
    </section>
  );
}

export default ProjectForm;