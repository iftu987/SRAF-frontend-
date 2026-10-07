import React, { useState } from 'react';
import { useAssessment } from './context/AssessmentContext';
import { Modals } from './components/common/Modals';
import { Notification } from './components/common/Notification';

import MarketingLanding from './components/landing/MarketingLanding';
import { AppHeader } from './components/common/AppHeader';
import { ProgressStepper } from './components/assessment/ProgressStepper';
import { HeroGreeting } from './components/landing/HeroGreeting';
import { DemographicsForm } from './components/assessment/DemographicsForm';
import { SurveyContainer } from './components/assessment/SurveyContainer';
import ResultsPage from './components/report/ResultsPage';

export default function App() {
  const { view, page } = useAssessment();
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenModal = (modalKey) => {
    setActiveModal(modalKey);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      {/* Global Notifications */}
      <Notification />

      {/* Modal Dialogs */}
      <Modals activeModal={activeModal} onClose={handleCloseModal} />

      {view === 'marketing' && (
        <MarketingLanding onOpenModal={handleOpenModal} />
      )}

      {view === 'app' && (
        <div id="app-wrapper">
          <AppHeader />
          
          {page > 0 && page < 3 && <ProgressStepper />}

          <main className="main-container">
            {page === 0 && <HeroGreeting />}
            {page === 1 && <DemographicsForm />}
            {page === 2 && <SurveyContainer />}
            {page === 3 && <ResultsPage />}
          </main>
        </div>
      )}
    </>
  );
}
