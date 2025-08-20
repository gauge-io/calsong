import React from 'react';
export function EventInfo() {
  return <section className="mb-12 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-2xl font-bold mb-4">About the Event</h2>
        <p className="mb-4">
          CalSong, an Alameda arts non-profit, is bringing Halloween to Franklin Park 
          with a street festival on Friday, October 31st, 2025.
        </p>
        <p className="mb-4">
          "Boneyard at the Bend" – where Morton curves into San Jose Avenue – 
          will transform into the heart of our island's Halloween celebration.
        </p>
        <p className="mb-4">
          City grant funding covers essential services. Your sponsorship brings 
          the magic – live music, decorations, and community spirit.
        </p>
        <p className="font-bold">
          We're seeking Alameda-based sponsors who believe in hyper-local impact. 
          Every dollar raised stays on the island, supporting local vendors and our community.
        </p>
      </div>
      <div className="flex justify-center">
        <img src="/Screenshot_2025-08-19_at_7.52.34_PM.png" alt="Skeleton musician illustration" className="max-w-full h-auto max-h-96 border-5 border-white" />
      </div>
    </section>;
}