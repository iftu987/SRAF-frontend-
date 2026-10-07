import React from 'react';

// Decided not to use this anymore because SVG arcs were too complicated
// keeping it here just in case we need to rollback

export function OldGaugeCard({ score }) {
  return (
    <div className="old-gauge">
      <h1>{score}</h1>
      {/* TODO: fix rendering issue here */}
    </div>
  );
}
