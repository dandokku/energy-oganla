import { answers } from '@/data/portfolio'

export default function FAQ() {
  return (
    <section className="faq section" id="faq">
      <div className="section-label">03 / Frequently asked</div>
      <div className="faq-layout">
        <h2>Some useful answers.</h2>
        <div>
          {answers.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <span>+</span>
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
