import { testimonials } from '@/data/portfolio'

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <div className="section-label-testimonials">03 / Kind words</div>
          <h2 className="testimonials-headline">
            What collaborators say.
          </h2>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.id}>
              <div className="testimonial-quote-mark" aria-hidden="true">
                “
              </div>

              <div className="testimonial-content">
                {Array.isArray(item.quote) ? (
                  item.quote.map((p, i) => (
                    <p key={i} className="testimonial-paragraph">
                      {p}
                    </p>
                  ))
                ) : (
                  <p className="testimonial-paragraph">{item.quote}</p>
                )}
              </div>

              <div className="testimonial-author-block">
                <h3 className="testimonial-author-name">{item.author}</h3>
                <p className="testimonial-author-role">{item.role}</p>
                {item.organization && (
                  <p className="testimonial-author-org">{item.organization}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
