import React from 'react';

export default function GaugeCard({
  title,
  score = 0,
  tier,
  tierDesc,
  statusText,
  description,
  isOcs = false
}) {
  const percent = Math.min(100, Math.max(0, score));
  // Arc length for r=75 is pi * 75 ~= 235.62
  const offset = 235.62 * (1 - percent / 100);
  const strokeColor = isOcs ? '#2563eb' : '#059669';
  const tierNum = tier ? (tier.split(' ')[1] || '2') : '2';

  return (
    <div
      className="report-gauge-card"
      id={isOcs ? 'rpt-ocs-gauge-card' : 'rpt-pcai-gauge-card'}
    >
      <div className="gauge-card-title">{title}</div>

      <div className="gauge-svg-wrap">
        <svg className="gauge-svg" viewBox="0 0 200 115">
          {/* Background Arc */}
          <path
            d="M 25 100 A 75 75 0 0 1 175 100"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="16"
            strokeLinecap="round"
          />
          {/* Animated Value Arc */}
          <path
            id={isOcs ? 'ocs-gauge-arc' : 'pcai-gauge-arc'}
            d="M 25 100 A 75 75 0 0 1 175 100"
            fill="none"
            stroke={strokeColor}
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray="235.62"
            style={{
              strokeDashoffset: offset,
              transition: 'stroke-dashoffset 1s ease'
            }}
          />
          {/* Centered Score Number */}
          <text
            id={isOcs ? 'rpt-ocs-score' : 'rpt-pcai-score'}
            x="100"
            y="88"
            textAnchor="middle"
            className="gauge-number"
          >
            {score}
          </text>
        </svg>
      </div>

      {isOcs ? (
        <>
          <div
            className={`gauge-tier-pill tier-${tierNum}`}
            id="rpt-tier-badge"
          >
            {tier ? tier.toUpperCase() : 'TIER 2'}
          </div>
          <div className="gauge-card-desc" id="rpt-tier-desc">
            {tierDesc}
          </div>
        </>
      ) : (
        <>
          <div className="gauge-status-text" id="rpt-pcai-status">
            {statusText}
          </div>
          <div className="gauge-card-desc" id="rpt-pcai-desc">
            {description}
          </div>
        </>
      )}
    </div>
  );
}
