import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import InfoSections from './components/InfoSections';
import Footer from './components/Footer';
import VoiceModal from './components/VoiceModal';

const App: React.FC = () => {
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState(false);

  const handleStartVoice = () => {
    setIsVoiceModalOpen(true);
  };

  const handleCloseVoice = () => {
    setIsVoiceModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <Hero onStartVoice={handleStartVoice} />
      <InfoSections />
      <Footer />
      
      <VoiceModal 
        isOpen={isVoiceModalOpen} 
        onClose={handleCloseVoice} 
      />
    </div>
  );
};

export default App;
