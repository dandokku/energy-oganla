'use client'

import { useState } from 'react'
import { ArrowUpRight, Image as ImageIcon } from 'lucide-react'
import { projects, Project } from '@/data/portfolio'
import ProjectModal from '@/components/ProjectModal'

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [initialTab, setInitialTab] = useState<string | undefined>(undefined)

  const openProjectDetails = (project: Project, tab?: string) => {
    setSelectedProject(project)
    setInitialTab(tab)
  }

  const closeProjectDetails = () => {
    setSelectedProject(null)
    setInitialTab(undefined)
  }

  return (
    <>
      <section className="work-editorial-section" id="work">
        <div className="work-editorial-container">
          {/* Section Eyebrow & Headline */}
          <div className="work-editorial-header reveal">
            <div className="section-label-editorial">02 / Selected work</div>
            <h2 className="work-editorial-headline">
              My work happens in projects.
            </h2>
          </div>

          {/* Editorial Project Rows (Bespoke Magazine Spreads) */}
          <div className="work-editorial-list">
            {projects.map((project, idx) => (
              <article
                className={`project-editorial-item reveal ${idx % 2 === 1 ? 'reverse-spread' : ''}`}
                key={project.id}
              >
                {/* Left / Narrative Content */}
                <div className="project-editorial-narrative">
                  <div className="project-editorial-num">{project.number}</div>

                  <h3 className="project-editorial-title">{project.title}</h3>

                  <div className="project-editorial-copy">
                    {project.description.map((paragraph, pIdx) => (
                      <p key={pIdx}>{paragraph}</p>
                    ))}
                  </div>

                  {/* Interactive Triggers */}
                  <div className="project-editorial-actions">
                    <button
                      type="button"
                      className="editorial-action-btn primary-action"
                      onClick={() => openProjectDetails(project)}
                    >
                      What was on my plate?
                    </button>

                    <button
                      type="button"
                      className="editorial-action-btn secondary-action"
                      onClick={() => openProjectDetails(project, 'media')}
                    >
                      Media
                    </button>

                    {project.externalLinks?.map((link) => (
                      <a
                        key={link.url}
                        className="editorial-action-link"
                        href={link.url}
                        target={link.url.startsWith('https://') ? '_blank' : undefined}
                        rel={link.url.startsWith('https://') ? 'noreferrer' : undefined}
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight size={15} />
                      </a>
                    ))}

                    {!project.externalLinks?.length && project.externalLink && (
                      <a
                        className="editorial-action-link"
                        href={project.externalLink}
                        target={project.externalLink.startsWith('https://') ? '_blank' : undefined}
                        rel={project.externalLink.startsWith('https://') ? 'noreferrer' : undefined}
                      >
                        <span>{project.id === 'startup-showcase' ? 'Event link' : 'Story'}</span>
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right / Organic Visual & Staggered Photo Showcase */}
                <div
                  className="project-editorial-visuals"
                  onClick={() => openProjectDetails(project)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      openProjectDetails(project)
                    }
                  }}
                  aria-label={`View ${project.title} details`}
                >
                  <div className="editorial-main-image-frame">
                    <img
                      src={project.primaryImage}
                      alt={project.title}
                      className="editorial-main-image"
                    />
                    <div className="editorial-image-overlay">
                      <span className="editorial-view-prompt">
                        Explore breakdown &amp; media ↗
                      </span>
                    </div>
                  </div>

                  {project.secondaryImage && (
                    <div className="editorial-sub-image-frame">
                      <img
                        src={project.secondaryImage}
                        alt={`${project.title} preview`}
                        className="editorial-sub-image"
                      />
                      <span className="editorial-badge-pill">
                        <ImageIcon size={12} />
                        <span>{project.media.length} Photos</span>
                      </span>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Modal / Case Study breakdown viewer */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          initialTab={initialTab}
          onClose={closeProjectDetails}
        />
      )}
    </>
  )
}
