'use client'

import { useEffect, useState } from 'react'
import { X, ArrowLeft, ArrowRight, Image as ImageIcon, Quote } from 'lucide-react'
import { Project, ProjectSection } from '@/data/portfolio'

interface ProjectModalProps {
  project: Project | null
  initialTab?: string
  onClose: () => void
}

export default function ProjectModal({
  project,
  initialTab,
  onClose,
}: ProjectModalProps) {
  const [activeTabId, setActiveTabId] = useState<string>('')

  useEffect(() => {
    if (project) {
      if (initialTab) {
        setActiveTabId(initialTab)
      } else if (project.sections.length > 0) {
        setActiveTabId(project.sections[0].id)
      }
    }
  }, [project, initialTab])

  // Close on Escape key press & prevent background scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  const isMediaActive = activeTabId === 'media'
  const activeSectionIndex = project.sections.findIndex((s) => s.id === activeTabId)
  const activeSection: ProjectSection | undefined =
    activeSectionIndex !== -1 ? project.sections[activeSectionIndex] : undefined

  const handlePrevTab = () => {
    if (isMediaActive) {
      if (project.sections.length > 0) {
        setActiveTabId(project.sections[project.sections.length - 1].id)
      }
    } else if (activeSectionIndex > 0) {
      setActiveTabId(project.sections[activeSectionIndex - 1].id)
    }
  }

  const handleNextTab = () => {
    if (activeSectionIndex >= 0 && activeSectionIndex < project.sections.length - 1) {
      setActiveTabId(project.sections[activeSectionIndex + 1].id)
    } else if (project.media && project.media.length > 0 && !isMediaActive) {
      setActiveTabId('media')
    }
  }

  return (
    <div
      className="project-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="project-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="project-modal-header">
          <div className="project-modal-eyebrow">
            <span className="project-modal-name">{project.title}</span>
          </div>

          <button
            className="project-modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <span>Close</span>
          </button>
        </div>

        {/* Main Title Heading */}
        <div className="project-modal-title-area">
          <h2 id="modal-title" className="project-modal-headline">
            What was on my plate?
          </h2>
        </div>

        {/* Navigation Tabs (Pills) */}
        <div className="project-modal-pills-bar" role="tablist">
          {project.sections.map((section) => {
            const isActive = activeTabId === section.id
            return (
              <button
                key={section.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTabId(section.id)}
                className={`project-tab-pill ${isActive ? 'active' : ''}`}
              >
                {section.tabLabel}
              </button>
            )
          })}

          {project.media && project.media.length > 0 && (
            <button
              role="tab"
              aria-selected={isMediaActive}
              onClick={() => setActiveTabId('media')}
              className={`project-tab-pill media-pill ${isMediaActive ? 'active' : ''}`}
            >
              Media
            </button>
          )}
        </div>

        {/* Section Content Area */}
        <div className="project-modal-body">
          {!isMediaActive && activeSection ? (
            <div className="project-section-view">
              <h3 className="project-section-headline">{activeSection.headline}</h3>

              {/* Body Paragraphs */}
              <div className="project-section-text">
                {activeSection.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Sub-pills (Moving parts / tags) */}
              {activeSection.tags && activeSection.tags.length > 0 && (
                <div className="project-tags-cloud">
                  {activeSection.tags.map((tag) => (
                    <span key={tag} className="project-micro-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Quote / Highlight Callout Card */}
              {activeSection.quote && (
                <div className="project-quote-block">
                  <p className="quote-text">{activeSection.quote.text}</p>
                  {activeSection.quote.highlight && (
                    <p className="quote-highlight">{activeSection.quote.highlight}</p>
                  )}
                  {activeSection.quote.author && (
                    <span className="quote-author">— {activeSection.quote.author}</span>
                  )}
                </div>
              )}

              {/* Embedded Section Photography */}
              {activeSection.image && (
                <div className="project-section-image-frame">
                  <img src={activeSection.image} alt={activeSection.headline} />
                  {activeSection.imageCaption && (
                    <span className="section-image-caption">
                      {activeSection.imageCaption}
                    </span>
                  )}
                </div>
              )}
            </div>
          ) : isMediaActive && project.media ? (
            <div className="project-media-gallery">
              <h3 className="project-section-headline">Media &amp; Snapshots</h3>
              <p className="project-media-intro">
                Behind the scenes, live event capture, and campaign artifacts.
              </p>

              <div className="project-media-grid">
                {project.media.map((item, idx) => (
                  <div key={idx} className="project-media-card">
                    <div className="project-media-frame">
                      <img src={item.src} alt={item.alt} />
                      {item.tag && <span className="media-tag">{item.tag}</span>}
                    </div>
                    {item.caption && <p className="media-caption">{item.caption}</p>}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        {/* Footer Navigation Bar inside Modal */}
        <div className="project-modal-footer">
          <button
            className="modal-nav-step-btn"
            onClick={handlePrevTab}
            disabled={activeSectionIndex === 0 && !isMediaActive}
          >
            <ArrowLeft size={16} />
            <span>Previous</span>
          </button>

          <div className="modal-footer-status">
            {isMediaActive
              ? `Media gallery`
              : `${activeSectionIndex + 1} / ${project.sections.length}`}
          </div>

          <button
            className="modal-nav-step-btn"
            onClick={handleNextTab}
            disabled={
              isMediaActive ||
              (!project.media?.length && activeSectionIndex === project.sections.length - 1)
            }
          >
            <span>Next</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
