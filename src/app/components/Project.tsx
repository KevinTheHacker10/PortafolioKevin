"use client"

import React, { useState, useEffect } from 'react';
import picPrct from "../assets/pic_porftofolio/picPrct.png";

interface Project {
  name: string;
  github_link: string;
  description: string;
}

const Project: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const goToPrevProject = () => {
    setCurrentProjectIndex(prevIndex =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const goToNextProject = () => {
    setCurrentProjectIndex(prevIndex =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const username = 'KevinTheHacker10';
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const formattedProjects: Project[] = data.map((repo: any) => ({
          name: repo.name,
          github_link: repo.html_url,
          description: repo.description || 'No description available', // Utiliza una descripción predeterminada si no hay ninguna
        }));
        setProjects(formattedProjects);
      } catch (error) {
        console.log('Error fetching repositories');
      } finally {
        console.log(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
            <img src={picPrct.src} alt="" className="rounded-lg h-60" />
            <h3 className="text-xl my-4">{projects[currentProjectIndex]?.name}</h3>
            <p className="text-gray-400 mb-4">{projects[currentProjectIndex]?.description}</p>
            <div className="flex gap-3">
              <a
                href={projects[currentProjectIndex]?.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={goToPrevProject}
              className="bg-gray-800 text-cyan-600 px-4 py-2 rounded-lg"
            >
              Previous
            </button>
            <button
              onClick={goToNextProject}
              className="bg-gray-800 text-cyan-600 px-4 py-2 rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
