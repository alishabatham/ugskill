import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EverythingYouNeed from './components/EverythingYouNeed';
import WorkflowEngine from './components/WorkflowEngine';
import BuiltForStakeholders from './components/BuiltForStakeholders';
import DigitalPassportBanner from './components/DigitalPassportBanner';
import Footer from './components/Footer';
import InteractiveModal from './components/InteractiveModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('hero');
  const [activeRole, setActiveRole] = useState('student');
  const [modalTarget, setModalTarget] = useState(null);

  const handleOpenModal = (target) => {
    setModalTarget(target);
  };

  const handleCloseModal = () => {
    setModalTarget(null);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-indigo-500 selection:text-white flex flex-col justify-between">
      
      {/* 1. Top Light Navbar */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onOpenInteractiveModal={handleOpenModal} 
      />

      {/* Main Landing Page Content */}
      <main className="flex-grow">
        
        {/* 2. Hero Section */}
        <section id="hero">
          <Hero onOpenInteractiveModal={handleOpenModal} />
        </section>

        {/* 3. Everything You Need in One Place (8 Feature Cards) */}
        <section id="platform">
          <EverythingYouNeed onOpenInteractiveModal={handleOpenModal} />
        </section>

        {/* 4. The UGSkill Workflow (7 Horizontal Circular Nodes Pipeline) */}
        <section id="workflow">
          <WorkflowEngine onOpenInteractiveModal={handleOpenModal} />
        </section>

        {/* 5. Built for Every Stakeholder (3 Cards) */}
        <section id="stakeholders">
          <BuiltForStakeholders 
            onOpenInteractiveModal={handleOpenModal} 
            setActiveRole={setActiveRole} 
          />
        </section>

        {/* 6. Your Complete Digital Skill & Career Passport (Dark Navy Banner) */}
        <section id="passport">
          <DigitalPassportBanner onOpenInteractiveModal={handleOpenModal} />
        </section>

      </main>

      {/* 7. Clean Light Footer */}
      <Footer 
        setActiveTab={setActiveTab} 
        onOpenInteractiveModal={handleOpenModal} 
      />

      {/* Interactive Modal for Sandbox Simulations, Login, Pricing & About */}
      <InteractiveModal 
        modalTarget={modalTarget} 
        onClose={handleCloseModal} 
        activeRole={activeRole} 
        setActiveRole={setActiveRole} 
      />

    </div>
  );
}
