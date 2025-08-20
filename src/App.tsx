import React from 'react';
import { Header } from './components/Header';
import { SponsorshipTiers } from './components/SponsorshipTiers';
import { EventInfo } from './components/EventInfo';
import { ContactSection } from './components/ContactSection';
export function App() {
  return <div className="bg-black text-white min-h-screen w-full">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Header />
        <EventInfo />
        <SponsorshipTiers />
        
        {/* Franklin Park Halloween 2025 Image */}
        <div className="my-16 flex justify-center">
          <img 
            src="/franklin-park-halloween-2025.png" 
            alt="Franklin Park Halloween 2025" 
            className="h-auto" 
            style={{ width: '60%', maxWidth: '100%' }}
          />
        </div>
        
        <ContactSection />
        
        {/* Footer with Ornamental Suns */}
        <footer className="mt-16 pb-8">
          <div className="flex justify-center">
            <img 
              src="/ornamental-suns.png" 
              alt="Ornamental decoration" 
              className="max-w-xs h-auto" 
              style={{ filter: 'invert(1)' }}
            />
          </div>
        </footer>
      </div>
    </div>;
}