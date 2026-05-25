import { X, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect } from 'react'

export default function ChapterReader({ chapter, onClose, onPrev, onNext, totalChapters }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && onPrev) onPrev()
      if (e.key === 'ArrowRight' && onNext) onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose, onPrev, onNext])

  if (!chapter) return null

  return (
    <div className="reader" onClick={onClose}>
      <div className="reader__panel" onClick={(e) => e.stopPropagation()}>
        <div className="reader__header">
          <div className="reader__header-left">
            <BookOpen size={18} />
            <span className="reader__book-title">Beyond the Walls</span>
            <span className="reader__sep">/</span>
            <span className="reader__ch-label">Chapter {chapter.number}</span>
          </div>
          <button className="reader__close" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="reader__body">
          <div className="reader__content">
            <h1 className="reader__title">Chapter {chapter.number}</h1>
            <div className="reader__text">
              {chapter.text.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="reader__footer">
          <button
            className="reader__nav"
            onClick={onPrev}
            disabled={!onPrev}
          >
            <ChevronLeft size={16} />
            Previous
          </button>
          <span className="reader__progress">
            {chapter.number} of {totalChapters}
          </span>
          <button
            className="reader__nav"
            onClick={onNext}
            disabled={!onNext}
          >
            Next
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .reader {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: readerFadeIn 0.3s ease;
        }
        @keyframes readerFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .reader__panel {
          width: 100%;
          max-width: 720px;
          height: 90vh;
          background: #0e0e0e;
          border: 1px solid #1e1e1e;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: readerSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes readerSlideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .reader__header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 28px;
          border-bottom: 1px solid #1e1e1e;
          flex-shrink: 0;
        }
        .reader__header-left {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--color-text-muted);
          font-size: 0.8rem;
          font-weight: 600;
        }
        .reader__header-left svg {
          color: var(--color-accent);
        }
        .reader__book-title {
          color: var(--color-text-secondary);
          font-family: var(--font-display);
          font-style: italic;
        }
        .reader__sep {
          color: #333;
        }
        .reader__ch-label {
          color: var(--color-accent);
        }
        .reader__close {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          border: 1px solid #222;
          color: var(--color-text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .reader__close:hover {
          background: rgba(255,255,255,0.1);
          color: var(--color-text);
        }
        .reader__body {
          flex: 1;
          overflow-y: auto;
          padding: 48px 40px;
        }
        .reader__body::-webkit-scrollbar { width: 4px; }
        .reader__body::-webkit-scrollbar-track { background: transparent; }
        .reader__body::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }
        .reader__content {
          max-width: 580px;
          margin: 0 auto;
        }
        .reader__title {
          font-family: var(--font-display);
          font-size: 2.2rem;
          font-weight: 600;
          margin-bottom: 40px;
          color: var(--color-text);
          letter-spacing: -0.02em;
        }
        .reader__text p {
          font-size: 1rem;
          line-height: 2;
          color: var(--color-text-secondary);
          margin-bottom: 24px;
          text-align: justify;
          font-family: 'Georgia', var(--font-display), serif;
        }
        .reader__text p:last-child {
          margin-bottom: 0;
        }
        .reader__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 28px;
          border-top: 1px solid #1e1e1e;
          flex-shrink: 0;
        }
        .reader__nav {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-text-secondary);
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.2s ease;
        }
        .reader__nav:hover:not(:disabled) {
          color: var(--color-text);
          background: rgba(255,255,255,0.05);
        }
        .reader__nav:disabled {
          opacity: 0.2;
          cursor: default;
        }
        .reader__progress {
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--color-text-muted);
          letter-spacing: 0.05em;
        }
        @media (max-width: 768px) {
          .reader__panel {
            height: 100vh;
            border-radius: 0;
            max-width: 100%;
          }
          .reader__body {
            padding: 32px 24px;
          }
          .reader__title {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </div>
  )
}
