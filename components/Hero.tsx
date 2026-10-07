import { gallery } from '@/data/portfolio'

export default function Hero() {
  return (
    <section className="hero-playground">
      <div className="hero-gallery" aria-hidden="true">
        {gallery.map((image) => (
          <img
            key={image.src}
            className={image.className}
            src={image.src}
            alt=""
          />
        ))}
      </div>
      <div className="hero-copy-playground">
        <h1>Big Energy! </h1>
        <p>
          Creative | Executive Assistant | Media &amp;<br />
          Project Manager
        </p>
        <div className="hero-actions">
          <a className="hero-button hero-button-solid" href="#work">
            Show Working!
          </a>
          <a className="hero-button hero-button-glass" href="#contact">
            Work with me
          </a>
        </div>
      </div>
    </section>
  )
}
