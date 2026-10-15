import { Code2, Braces, Database, GitBranch, MonitorSmartphone, BrainCircuit, ChartNoAxesCombined, GraduationCap, FileCode2 } from 'lucide-react';
const skills = [
  { icon: Code2, title: 'HTML & CSS', text: 'Semantic markup, styling, layout and responsive design.' },
  { icon: Braces, title: 'JavaScript', text: 'Practising functions, arrays, modern syntax and interactive behaviour.' },
  { icon: FileCode2, title: 'React', text: 'Component-based UI, props, state and application structure.' },
  { icon: BrainCircuit, title: 'Python', text: 'Beginner-level scripting, data handling and learning projects.' },
  { icon: Database, title: 'SQL', text: 'Foundations of querying and working with structured data.' },
  { icon: GitBranch, title: 'Git & GitHub', text: 'Version control, branches, commits and collaboration workflows.' },
  { icon: MonitorSmartphone, title: 'Responsive UI', text: 'Building interfaces that adapt to desktop, tablet and mobile.' },
  { icon: ChartNoAxesCombined, title: 'Data exploration', text: 'Beginning with pandas, charts and communicating findings.' },
  { icon: GraduationCap, title: 'Communication', text: 'Teaching and explaining complex concepts clearly.' },
];
export default function Skills() {
  return <><section className="container page-intro"><span className="kicker">Skills & toolkit</span><h1>Tools I use to <span className="gold">keep building.</span></h1><p>My toolkit is evolving. I prefer to be transparent about my current learning stage and demonstrate skills through real, documented projects.</p></section><section className="container section skills-section"><div className="skill-grid">{skills.map(({ icon: Icon, title, text }) => <article className="skill-card" key={title}><div className="skill-icon"><Icon size={22} /></div><h3>{title}</h3><p>{text}</p></article>)}</div><div className="feature-band learning-band"><div><span className="kicker">How I learn</span><h2>Build something small.<br /><span className="gold">Make it better.</span></h2><p>Practice projects, documentation, feedback and consistent iteration are central to how I develop.</p></div><div className="feature-tiles"><div className="feature-tile"><strong>Practice</strong><span>Learn by doing</span></div><div className="feature-tile"><strong>Review</strong><span>Read and refine code</span></div><div className="feature-tile"><strong>Share</strong><span>Document progress</span></div><div className="feature-tile"><strong>Repeat</strong><span>Build stronger habits</span></div></div></div></section></>;
}
