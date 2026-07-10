import React, { useEffect, useState } from 'react'

// NSE/BSE cash-market session: 09:15–15:30 IST, Monday–Friday.
function getISTParts() {
  const now = new Date()
  const fmt = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kolkata',
    hour12: false,
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
  const parts = Object.fromEntries(fmt.formatToParts(now).map((p) => [p.type, p.value]))
  return parts
}

function getMarketStatus() {
  const p = getISTParts()
  const hour = parseInt(p.hour, 10)
  const minute = parseInt(p.minute, 10)
  const minutesNow = hour * 60 + minute
  const open = 9 * 60 + 15
  const close = 15 * 60 + 30
  const isWeekday = !['Sat', 'Sun'].includes(p.weekday)
  const isOpen = isWeekday && minutesNow >= open && minutesNow < close

  const hour12 = ((hour + 11) % 12) + 1
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const timeLabel = `${p.day} ${p.month} ${p.year} ${String(hour12).padStart(2, '0')}:${p.minute} ${ampm}`

  return { isOpen, timeLabel }
}

export default function MarketStatus({ compact = false }) {
  const [status, setStatus] = useState(getMarketStatus)

  useEffect(() => {
    const id = setInterval(() => setStatus(getMarketStatus()), 30000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className={`market-status ${status.isOpen ? 'is-open' : 'is-closed'} ${compact ? 'compact' : ''}`}>
      <style>{`
        .market-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 14px;
          border-radius: var(--r-pill);
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.02em;
          border: 1px solid var(--border-strong);
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(8px);
        }
        .market-status .m-dot {
          width: 7px; height: 7px; border-radius: 50%;
          flex-shrink: 0;
        }
        .market-status.is-open .m-dot { background: #4ce07a; box-shadow: 0 0 0 4px rgba(76,224,122,0.18); animation: mPulse 1.6s ease-in-out infinite; }
        .market-status.is-closed .m-dot { background: #ff6b57; box-shadow: 0 0 0 4px rgba(255,107,87,0.16); }
        .market-status.is-open { color: #4ce07a; border-color: rgba(76,224,122,0.35); }
        .market-status.is-closed { color: var(--ink-dim); }
        .market-status .m-time { color: var(--muted); font-weight: 500; }
        .market-status.compact { font-size: 10.5px; padding: 5px 10px; }
        @keyframes mPulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
      `}</style>
      <span className="m-dot" />
      <span>
        {status.isOpen ? 'Market open' : 'Market closed — opens 09:15 IST'}
      </span>
      <span className="m-time">· {status.timeLabel} IST</span>
    </div>
  )
}
