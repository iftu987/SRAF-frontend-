import React from 'react';
import { useAssessment } from '../../context/AssessmentContext';

export const ProgressStepper = () => {
  const { page } = useAssessment();

  if (page === 0) return null;

  // page 1 -> node 1 active
  // page 2 -> node 1 completed, node 2 active
  // page 3 -> node 1 completed, node 2 completed, node 3 active
  const fillPercentages = { 1: 0, 2: 0.5, 3: 1 };
  const currentScale = fillPercentages[page] !== undefined ? fillPercentages[page] : 0;

  return (
    <div className="progress-wrapper" id="progress-wrapper">
      <div className="progress-track">
        <div
          className="progress-fill"
          id="progress-fill"
          style={{ transform: `scaleX(${currentScale})` }}
        ></div>

        {[1, 2, 3].map((num) => {
          let nodeClass = 'step-node';
          let content = num;

          if (num < page) {
            nodeClass += ' completed';
            content = '✓';
          } else if (num === page) {
            nodeClass += ' active';
          }

          return (
            <div key={num} className={nodeClass} id={`node-${num}`}>
              {content}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressStepper;
