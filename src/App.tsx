import React from 'react';
import { EventInfo } from './components/EventInfo';
import { SponsorshipTiers } from './components/SponsorshipTiers';
import { ContactSection } from './components/ContactSection';
export function App() {
  return <div className="min-h-screen w-full">
      <section className="bg-white text-black">
        <div className="max-w-3xl mx-auto px-4 py-12 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-tight">
            CalSong
          </h1>
          <img
            src="/calsong-quail.jpg"
            alt="Woodcut of a California quail"
            className="mx-auto mt-8 w-full max-w-md h-auto"
          />
          <img
            src="/calsong-footer.jpg"
            alt="Steve Perez, (646) 765 7715, steve.a.perez@gmail.com. Nick Cawthon, (510) 542 7364, nick@calsong.org."
            className="mx-auto mt-10 w-full max-w-3xl h-auto"
            style={{ filter: 'invert(1)' }}
          />
        </div>
      </section>
      <div className="bg-black text-white w-full">
      <div className="max-w-5xl mx-auto px-4 py-8">
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
      </div>
      </div>
    </div>;
}