import { useState, useRef } from 'react'
import { Play, Upload, Video, X } from 'lucide-react'

export default function VideoResume() {
  const [videoSrc, setVideoSrc] = useState(null)
  const [playing, setPlaying] = useState(false)
  const fileInputRef = useRef(null)
  const videoRef = useRef(null)

  const handleUpload = (e) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('video/')) {
      setVideoSrc(URL.createObjectURL(file))
      setPlaying(false)
    }
  }

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  const handleRemove = () => {
    if (videoSrc) URL.revokeObjectURL(videoSrc)
    setVideoSrc(null)
    setPlaying(false)
  }

  return (
    <section id="video" className="section">
      <div className="vr">
        <div className="vr__header">
          <span className="section-label reveal">Video Resume</span>
          <h2 className="section-title reveal stagger-1">Hear it directly<br /><em>from me</em></h2>
          <p className="section-subtitle reveal stagger-2">
            A personal walkthrough of my experience, skills, and what drives me.
          </p>
        </div>

        <div className="vr__container reveal stagger-3">
          {videoSrc ? (
            <div className="vr__player">
              <video
                ref={videoRef}
                src={videoSrc}
                controls={playing}
                className="vr__video"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
              />
              {!playing && (
                <button className="vr__play" onClick={handlePlay}>
                  <Play size={36} fill="black" color="black" />
                </button>
              )}
              <button className="vr__remove" onClick={handleRemove}><X size={16} /></button>
            </div>
          ) : (
            <div
              className="vr__upload"
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault()
                const file = e.dataTransfer.files?.[0]
                if (file && file.type.startsWith('video/')) setVideoSrc(URL.createObjectURL(file))
              }}
            >
              <div className="vr__upload-icon"><Video size={36} /></div>
              <h3 className="vr__upload-title">Drop your video here</h3>
              <p className="vr__upload-desc">or click to browse files</p>
              <div className="vr__upload-btn"><Upload size={14} /> Upload Video</div>
              <p className="vr__upload-hint">MP4, WebM, MOV</p>
            </div>
          )}
          <input ref={fileInputRef} type="file" accept="video/*" onChange={handleUpload} style={{ display: 'none' }} />
        </div>
      </div>

      <style>{`
        .vr__header {
          text-align: center;
          margin-bottom: 56px;
        }
        .vr__header .section-title em {
          color: var(--color-accent);
          font-style: italic;
        }
        .vr__header .section-subtitle {
          margin: 0 auto;
        }
        .vr__container {
          max-width: 820px;
          margin: 0 auto;
        }
        .vr__player {
          position: relative;
          border-radius: var(--border-radius);
          overflow: hidden;
          background: #000;
          border: 1px solid var(--color-border);
          aspect-ratio: 16 / 9;
        }
        .vr__video {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        .vr__play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 88px;
          height: 88px;
          border-radius: 50%;
          background: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition);
          box-shadow: 0 12px 48px rgba(200, 255, 0, 0.3);
        }
        .vr__play:hover {
          transform: translate(-50%, -50%) scale(1.12);
        }
        .vr__remove {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(0,0,0,0.7);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background var(--transition);
        }
        .vr__remove:hover { background: rgba(239, 68, 68, 0.8); }
        .vr__upload {
          aspect-ratio: 16 / 9;
          border: 1px dashed var(--color-border);
          border-radius: var(--border-radius);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition);
          background: var(--color-bg-card);
          padding: 40px;
        }
        .vr__upload:hover {
          border-color: var(--color-accent);
          background: var(--color-accent-glow);
        }
        .vr__upload-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: var(--color-accent-dim);
          color: var(--color-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }
        .vr__upload-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 6px;
        }
        .vr__upload-desc {
          font-size: 0.9rem;
          color: var(--color-text-muted);
          margin-bottom: 24px;
        }
        .vr__upload-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          font-weight: 700;
          color: #000;
          background: var(--color-accent);
          padding: 12px 28px;
          border-radius: 100px;
          margin-bottom: 12px;
          transition: all var(--transition);
        }
        .vr__upload:hover .vr__upload-btn {
          box-shadow: 0 6px 24px rgba(200, 255, 0, 0.2);
        }
        .vr__upload-hint {
          font-size: 0.75rem;
          color: var(--color-text-muted);
        }
      `}</style>
    </section>
  )
}
