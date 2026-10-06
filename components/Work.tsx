import { ArrowUpRight } from 'lucide-react'
import { projects } from '@/data/portfolio'

export default function Work() {
  return (
    <section className="work section" id="work">
      <div className="section-label">02 / Selected work</div>
      <div className="work-heading">
        <h2>The space. The people. The moving parts.</h2>
        <p>Every project is its own room, with its own rhythm, questions and feeling.</p>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article className="project" key={project.number}>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
              <span>{project.number}</span>
            </div>
            <div className="project-meta">
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <a className="text-link" href="#contact">
                Read the story <ArrowUpRight data-icon="inline-end" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
