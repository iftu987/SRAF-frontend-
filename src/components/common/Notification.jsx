import React, { useEffect } from 'react';
import { useAssessment } from '../../context/AssessmentContext';

export const Notification = () => {
  const { toast, hideToast } = useAssessment();

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => {
        hideToast();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toast, hideToast]);

  return (
    <div id="toast-container" className="toast-container">
      {toast && (
        <div className="toast-msg">
          <div style={{ whiteSpace: 'pre-wrap' }}>
            {toast.message}
          </div>
          <button className="toast-close" onClick={hideToast}>✕</button>
        </div>
      )}
    </div>
  );
};

export default Notification;
