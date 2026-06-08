import { useState } from 'react'
import { Send, Mail, MapPin, ArrowUpRight } from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'sanskriti.birange@gmail.com', href: 'mailto:sanskriti.birange@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'Indiranagar, Bengaluru', href: null },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/mdavgazd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus('sent')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 3000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  return (
    <section id="contact" className="section">
      <div className="contact">
        <div className="contact__header">
          <span className="section-label reveal">Contact</span>
          <h2 className="section-title reveal stagger-1">Let's create<br /><em>together</em></h2>
          <p className="section-subtitle reveal stagger-2">
            Have a project, collaboration, or just want to connect? Reach out.
          </p>
        </div>

        <div className="contact__layout">
          <div className="contact__info reveal stagger-3">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div className="contact__info-item" key={label}>
                <div className="contact__info-icon"><Icon size={20} /></div>
                <div>
                  <div className="contact__info-label">{label}</div>
                  {href ? (
                    <a href={href} className="contact__info-value contact__info-link">
                      {value} <ArrowUpRight size={14} />
                    </a>
                  ) : (
                    <div className="contact__info-value">{value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form className="contact__form reveal stagger-4" onSubmit={handleSubmit}>
            <div className="contact__form-row">
              <div className="contact__field">
                <label htmlFor="name" className="contact__label">Name</label>
                <input type="text" id="name" name="name" value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your name" required className="contact__input" />
              </div>
              <div className="contact__field">
                <label htmlFor="email" className="contact__label">Email</label>
                <input type="email" id="email" name="email" value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com" required className="contact__input" />
              </div>
            </div>
            <div className="contact__field">
              <label htmlFor="message" className="contact__label">Message</label>
              <textarea id="message" name="message" value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="What's on your mind?" rows={5} required
                className="contact__input contact__textarea" />
            </div>
            <button type="submit" className="contact__submit" disabled={status !== 'idle'}>
              {status === 'sending' ? 'Sending...' :
               status === 'sent' ? 'Sent!' :
               status === 'error' ? 'Failed — try again' :
               <><Send size={16} /> Send Message</>}
            </button>
          </form>
        </div>
      </div>

      <style>{`
        .contact .section-title em {
          color: var(--color-accent);
          font-style: italic;
        }
        .contact__header {
          margin-bottom: 56px;
        }
        .contact__layout {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 64px;
          align-items: start;
        }
        .contact__info {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .contact__info-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .contact__info-icon {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background: var(--color-accent-dim);
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .contact__info-label {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 2px;
        }
        .contact__info-value {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--color-text);
        }
        .contact__info-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: color var(--transition);
        }
        .contact__info-link:hover {
          color: var(--color-accent);
        }
        .contact__form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .contact__form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .contact__field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .contact__label {
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .contact__input {
          background: var(--color-bg-card);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 16px 18px;
          font-size: 0.95rem;
          color: var(--color-text);
          transition: all var(--transition);
          outline: none;
        }
        .contact__input::placeholder {
          color: var(--color-text-muted);
        }
        .contact__input:focus {
          border-color: var(--color-accent);
          box-shadow: 0 0 0 3px var(--color-accent-dim);
        }
        .contact__textarea {
          resize: vertical;
          min-height: 130px;
        }
        .contact__submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          font-size: 0.9rem;
          font-weight: 700;
          color: #000;
          background: var(--color-accent);
          padding: 16px 36px;
          border-radius: 100px;
          transition: all var(--transition);
          align-self: flex-start;
        }
        .contact__submit:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 10px 40px rgba(200, 255, 0, 0.25);
        }
        .contact__submit:disabled {
          background: var(--color-success);
          color: white;
        }
        @media (max-width: 768px) {
          .contact__layout {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .contact__form-row { grid-template-columns: 1fr; }
          .contact__info-item {
            padding: 20px;
          }
          .contact__submit {
            width: 100%;
          }
        }
      `}</style>
    </section>
  )
}
