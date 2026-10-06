import { ArrowUpRight } from 'lucide-react'

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section-label">04 / Let&apos;s talk</div>
      <h2>Have a lot going on?</h2>
      <p>
        Tell me about it. I&apos;d love to hear what you&apos;re building and where I can help.
      </p>
      <a className="button dark" href="mailto:hello@alison.work">
        Start a conversation <ArrowUpRight data-icon="inline-end" />
      </a>
    </section>
  )
}
