import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data.js';
export default function Projects() {
  return <><section className="container page-intro"><span className="kicker">Portfolio archive</span><h1>Projects & <span className="gold">experiments.</span></h1><p>Explore 20 project ideas across web development, productivity, education and data science. These are illustrative concepts, not claims that every project is already built or deployed. Replace each card with your real repository, demo and screenshots as you finish the work.</p><div className="actions"><Link className="btn" to="/contact">Collaborate with me <ArrowUpRight size={17} /></Link></div></section><section className="container section projects-section"><div className="project-grid">{projects.map(project => <ProjectCard key={project.title} project={project} />)}</div><p className="project-note">Project visuals are illustrative. External images are served by Unsplash; see the <a className="text-link" href="https://unsplash.com/license" target="_blank" rel="noreferrer">Unsplash licence</a>.</p></section></>;
}
