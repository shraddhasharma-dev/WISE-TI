import React, { useEffect, useState } from 'react';

export default function LandingPage({ onNavigate }) {
  const [visibleCards, setVisibleCards] = useState([false, false, false]);

  useEffect(() => {
    // Replicates the original stagger fade-in animation
    cardsConfig.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      }, 400 + index * 150);
    });
  }, []);

  const cardsConfig = [
    {
      role: 'admin',
      icon: 'settings',
      title: 'Administrator Portal',
      description: 'Oversee logic, logistics, and entire event lifecycles.',
      actionText: 'Access Console',
    },
    {
      role: 'judge',
      icon: 'gavel',
      title: 'Judge Portal',
      description: 'Review submissions with calibrated scoring frameworks.',
      actionText: 'Begin Review',
    },
    {
      role: 'participant',
      icon: 'terminal',
      title: 'Participant Portal',
      description: 'Collaborate, build, and submit your next big breakthrough.',
      actionText: 'Join Session',
    },
  ];

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center overflow-x-hidden selection:bg-primary-fixed-dim relative font-sans"
      style={{
        backgroundColor: '#F5F3F0', // Base Beige Background
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(1, 45, 29, 0.02) 0%, transparent 100%), url("https://www.transparenttextures.com/patterns/natural-paper.png")`
      }}
    >
      <main className="max-w-[1440px] w-full px-6 md:px-16 py-12 md:py-20 flex flex-col items-center justify-center z-10">
        
        {/* Brand Header Section */}
        <header className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center p-4 mb-6 rounded-full bg-[#012d1d]">
            <span className="material-symbols-outlined text-[#a5d0b9] text-[32px]">architecture</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-4 text-[#012d1d]">
            Wise@TI
          </h1>
          <p className="text-base md:text-lg max-w-lg mx-auto text-[#334155] opacity-80 leading-relaxed">
            The ultimate hackathon operating system. Precision-engineered for orchestration, evaluation, and innovation.
          </p>
        </header>

        {/* Gateway Portals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
          {cardsConfig.map((card, index) => (
            <button
              key={card.role}
              onClick={() => onNavigate(card.role)}
              className="group p-6 md:p-8 rounded-xl flex flex-col items-center text-center bg-[#E9E5E0] border border-[#ECE7E2] transition-all duration-500 hover:-translate-y-2 hover:bg-[#ffffff] hover:border-slate-300 hover:shadow-xl focus:outline-none"
              style={{
                opacity: visibleCards[index] ? 1 : 0,
                transform: visibleCards[index] ? 'translateY(0px)' : 'translateY(20px)',
                transitionProperty: 'all',
                transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            >
              {/* Icon Container - Starts Beige, flips to Premium Dark Green on Hover */}
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-[#ECE7E2] text-[#012d1d] transition-colors duration-300 group-hover:bg-[#012d1d] group-hover:text-[#a5d0b9]">
                <span className="material-symbols-outlined text-3xl">{card.icon}</span>
              </div>

              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#012d1d]">
                {card.title}
              </h3>
              
              <p className="text-sm md:text-base text-[#475569] flex-grow">
                {card.description}
              </p>

              {/* Action Link Interaction using Accent Sage Green */}
              <div className="mt-8 flex items-center gap-2 text-[#86af99] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {card.actionText} <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </button>
          ))}
        </div>

        {/* Decorative Ambient Background Blurs */}
        <div className="fixed -bottom-32 -left-32 w-96 h-96 bg-[#012d1d]/5 rounded-full blur-3xl -z-10"></div>
        <div className="fixed -top-32 -right-32 w-96 h-96 bg-[#86af99]/10 rounded-full blur-3xl -z-10"></div>
      </main>
    </div>
  );
}