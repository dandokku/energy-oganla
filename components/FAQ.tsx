import { answers } from '@/data/portfolio'

export default function FAQ() {
  return (
    <section className="faq section" id="faq">
      <div className="section-label">04 / Frequently asked</div>
      <div className="faq-layout">
        <h2>Some useful answers.</h2>
        <div>
          {answers.map(([question, answer], index) => {
            const num = String(index + 1).padStart(2, '0')
            return (
              <details key={question}>
                <summary>
                  <span>
                    <span className="faq-number-prefix">{num}</span> {question}
                  </span>
                  <span className="faq-plus-icon">+</span>
                </summary>
                <div className="faq-answer-container">
                  {Array.isArray(answer) ? (
                    answer.map((p, i) => <p key={i}>{p}</p>)
                  ) : (
                    <p>{answer}</p>
                  )}
                </div>
              </details>
            )
          })}
        </div>
      </div>
    </section>
  )
}
