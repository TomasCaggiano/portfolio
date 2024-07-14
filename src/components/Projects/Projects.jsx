import React from 'react';
import './Projects.css';
import Products from '../Products/Products';

const Projects = () => {
  return (
    <div className='projects-container'>
      <h1 className='projects-heading'>My Projects</h1>
      <div className='projects-grid'>
        <Products
          img="https://images.app.goo.gl/bJDMSFd5zU85qXN46"
          title="Sitio Web 1"
          desc="Descripción del primer proyecto."
          link="Ver más"
          url="https://www.example.com"
        />

        <Products
          img="https://images.app.goo.gl/bJDMSFd5zU85qXN46"
          title="Sitio Web 2"
          desc="Descripción del segundo proyecto."
          link="Ver más"
          url="https://www.example.com"
        />

        <Products
          img="https://images.app.goo.gl/bJDMSFd5zU85qXN46"
          title="Sitio Web 3"
          desc="Descripción del tercer proyecto."
          link="Ver más"
          url="https://www.example.com"
        />

        <Products
          img="https://images.app.goo.gl/bJDMSFd5zU85qXN46"
          title="Sitio Web 4"
          desc="Descripción del cuarto proyecto."
          link="Ver más"
          url="https://www.example.com"
        />
      </div>
    </div>
  );
}

export default Projects;
