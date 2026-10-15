import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { imageUrl } from '../data.js';
import profilePicture from '../assets/Moses-image.jpg';

export default function About() {
  return (
    <>
       {/* Page Introduction */}
      <section className="container page-intro">
        <div className="about-intro-grid">
          {/* Left Side: Text */}
          <div className="about-intro-text">
            <span className="kicker">About me - Amogo Moses</span>

            <h1>
              Curious by nature.
              <br />
              <span className="gold">Builder by practice.</span>
            </h1>

            <p>
              I'm Amogo Moses, a Physics graduate, educator and aspiring
              software developer interested in building accessible tools
              that solve practical problems.
            </p>
          </div>

          {/* Right Side: Profile Picture */}
          <div className="about-profile-picture">
            <img
              src={profilePicture}
              alt="Amogo Moses"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container section about-section">
        <div className="about-grid">
          {/* Portrait and Image Credit */}
          <div className="portrait">
            <img
              src={imageUrl('photo-1516321318423-f06f85e504b3', 900)}
              alt="Illustrative creative technology workspace"
            />

            <span>
              
              <a
                href="https://unsplash.com/license"
                target="_blank"
                rel="noreferrer"
              >
               
              </a>
            </span>
          </div>

          {/* About Content */}
          <div className="prose">
            <span className="kicker">My story</span>

            <h2>
              From understanding the physical world to building
              digital tools.
            </h2>

            <p>
              My Physics background trained me to reason carefully,
              work with evidence and make complex ideas understandable.
              Teaching has also strengthened my ability to communicate
              clearly and think about how people learn.
            </p>

            <p>
              I'm developing my software skills through practical
              projects in front-end development, React and Python.
              I value readable code, responsive design, continuous
              practice and honest documentation of what I've built.
            </p>

            <p>
              This portfolio is a living record of that journey.
              As projects mature, I'll add real GitHub repositories,
              live demos and case studies with clear explanations
              of the problem, decisions and outcomes.
            </p>

            {/* Career Development Timeline */}
            <div className="timeline">
              <div className="timeline-item">
                <strong>Physics & analytical thinking</strong>
                <span>
                  Academic foundation · problem-solving mindset
                </span>
              </div>

              <div className="timeline-item">
                <strong>Teaching & communication</strong>
                <span>
                  Explaining ideas and supporting learners
                </span>
              </div>

              <div className="timeline-item">
                <strong>Software development</strong>
                <span>
                  Building projects and improving through iteration
                </span>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="actions">
              <Link className="btn" to="/cv">
                View CV <ArrowUpRight size={17} />
              </Link>

              <Link className="btn ghost" to="/projects">
                See projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}