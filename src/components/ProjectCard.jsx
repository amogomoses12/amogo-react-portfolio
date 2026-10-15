import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { imageUrl } from '../data.js';
export default function ProjectCard({ project }) {
  return <article className="project-card">
    <div className="project-image"><img loading="lazy" src={imageUrl(project.image, 850)} alt={`Illustrative image for ${project.title}`} /><span className="project-type">{project.type}</span></div>
    <div className="project-body"><h3>{project.title}</h3><p>{project.description}</p>
      <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      <Link className="text-link" to="/contact">Discuss a similar project <ArrowUpRight size={15} /></Link>
    </div>
  </article>;
}
