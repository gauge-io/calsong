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
        <ContactSection />
      </div>
    </div>;
}