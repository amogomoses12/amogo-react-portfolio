
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Sparkles,
} from 'lucide-react';

import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects, imageUrl } from '../data.js';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container hero">
        <div className="hero-copy-block">
          <span className="kicker">
            Software developer · lifelong learner
          </span>

          <h1>
            Turning ideas into{' '}
            <span className="gold">useful digital</span> experiences.
          </h1>

          <p className="hero-copy">
            Hi, I'm Amogo Moses. I combine analytical thinking from
            Physics with a growing passion for software development,
            web experiences and data-driven solutions.
          </p>

          <div className="actions">
            <Link className="btn" to="/projects">
              Explore my projects <ArrowUpRight size={17} />
            </Link>

            <Link className="btn ghost" to="/cv">
              View my CV <ArrowDown size={16} />
            </Link>
          </div>

          <div className="hero-meta">
            <div>
              <strong>20</strong>
              <span>Project concepts</span>
            </div>

            <div>
              <strong>Web · Data</strong>
              <span>Areas I'm exploring</span>
            </div>

            <div>
              <strong>Open</strong>
              <span>To learning & collaboration</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-frame">
            <img
              src={imageUrl('photo-1498050108023-c5249f4df085', 1100)}
              alt="Laptop and workspace for software development"
            />

            <a
              className="image-credit"
              href="https://unsplash.com/license"
              target="_blank"
              rel="noreferrer"
            >
              Image licence: Unsplash
            </a>
          </div>

          <div className="floating-card fc-top">
            <small>
              <span className="status-dot" />
              Learning in public
            </small>
            <strong>Build · Test · Improve</strong>
          </div>

          <div className="floating-card fc-bottom">
            <small>Current toolkit</small>
            <strong>React / JavaScript / Python</strong>
          </div>

          <div className="code-window">
            <span className="comment">// make ideas useful</span>
            <br />

            <span className="syntax">const</span> build = (idea) =&gt; {'{'}
            <br />

            &nbsp; return idea +{' '}
            <span className="syntax">" impact"</span>;
            <br />

            {'}'}
            <br />

            <span className="comment">// keep learning ↗</span>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <div className="strip">
        <div className="container strip-inner">
          <span className="strip-label">Tools & technologies</span>

          <div className="tech-list">
            {[
              'HTML & CSS',
              'JavaScript',
              'React',
              'Python',
              'SQL',
              'Git & GitHub',
            ].map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Selected Projects Section */}
      <section className="container section">
        <div className="section-head">
          <div>
            <span className="kicker">Selected work</span>
            <h2>Projects with a purpose.</h2>
          </div>

          <p>
            Practical builds and concepts across web development,
            education and data. Replace concept cards with verified
            demos as projects are completed.
          </p>
        </div>

        <div className="project-grid">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>

        <div className="actions">
          <Link className="btn ghost" to="/projects">
            Browse all 20 projects <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="container section">
        <div className="feature-band">
          <div>
            <span className="kicker">A little about me</span>

            <h2>
              Analytical thinking.
              <br />
              <span className="gold">
                Human-centred building.
              </span>
            </h2>

            <p>
              My background in Physics and teaching shapes how I
              approach problems: ask good questions, break complexity
              into smaller parts, and keep learning through practice.
            </p>

            <div className="actions">
              <Link className="btn" to="/about">
                More about me <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>

          <div className="feature-tiles">
            <div className="feature-tile">
              <strong>
                <Code2 size={17} /> 01 / Explore
              </strong>
              <span>Understand the problem first</span>
            </div>

            <div className="feature-tile">
              <strong>
                <Sparkles size={17} /> 02 / Build
              </strong>
              <span>Create a clear solution</span>
            </div>

            <div className="feature-tile">
              <strong>03 / Test</strong>
              <span>Learn from real feedback</span>
            </div>

            <div className="feature-tile">
              <strong>04 / Improve</strong>
              <span>Keep iterating with intent</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container section closing-cta">
        <div>
          <span className="kicker">Let's connect</span>

          <h2>Have an idea worth building?</h2>

          <p>
            I'm open to thoughtful conversations, collaborative
            learning and opportunities to grow as a developer.
          </p>
        </div>

        <div className="actions">
          <Link className="btn" to="/contact">
            Contact me <ArrowUpRight size={17} />
          </Link>

          <a
            className="btn ghost"
            href="https://github.com/amogomoses12"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub size={17} /> GitHub
          </a>
        </div>
      </section>
    </>
  );
}
