import { ArrowUpRight, Mail } from 'lucide-react'
import { contactInfo } from '@/data/portfolio'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-label reveal">05 / Let&apos;s talk</div>
      <h2 className="reveal">Have a lot going on?</h2>
      <p className="reveal">
        Tell me about it. I&apos;d love to hear what you&apos;re building and where I can help.
      </p>

      <div className="contact-main-action reveal">
        <a className="button dark" href={`mailto:${contactInfo.email}`}>
          Start a conversation <ArrowUpRight data-icon="inline-end" size={16} />
        </a>
      </div>

      <div className="contact-channels-list reveal-stagger">
        <a
          href={`mailto:${contactInfo.email}`}
          className="contact-channel-card"
        >
          <div className="contact-channel-icon">
            <Mail size={20} />
          </div>
          <div className="contact-channel-info">
            <span className="channel-title">Email</span>
            <span className="channel-detail">{contactInfo.email}</span>
          </div>
          <ArrowUpRight className="channel-arrow" size={18} />
        </a>

        <a
          href={contactInfo.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-channel-card"
        >
          <div className="contact-channel-icon">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
          </div>
          <div className="contact-channel-info">
            <span className="channel-title">Instagram</span>
            <span className="channel-detail">@energyoganla</span>
          </div>
          <ArrowUpRight className="channel-arrow" size={18} />
        </a>

        <a
          href={contactInfo.x}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-channel-card"
        >
          <div className="contact-channel-icon">
            <span className="x-icon">𝕏</span>
          </div>
          <div className="contact-channel-info">
            <span className="channel-title">X (Twitter)</span>
            <span className="channel-detail">@energyoganla</span>
          </div>
          <ArrowUpRight className="channel-arrow" size={18} />
        </a>
      </div>
    </section>
  )
}
