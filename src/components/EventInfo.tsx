import React from 'react';
export function EventInfo() {
  return <section className="mb-12 grid md:grid-cols-2 gap-8 items-stretch">
      <div className="flex items-center">
        <img src="/skeleton-musician-optimized.png" alt="Skeleton musician illustration" className="w-full h-full object-contain border-5 border-white" />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">About the Event</h2>
        <ul className="space-y-4 text-lg">
          <li className="flex items-start">
            <span className="mr-3 text-2xl">💀</span>
            <span>
              CalSong, an Alameda arts non-profit, is bringing Halloween to Franklin Park 
              with a community celebration on Friday, October 31st, 2025.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-2xl">💀</span>
            <span>
              "Boneyard at the Bend" – where Morton curves into San Jose Avenue – 
              will transform into the heart of our island's Halloween celebration.
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-3 text-2xl">💀</span>
            <span>
              City grant funding covers some internal services. However, your sponsorship brings 
              the magic – live music for kids and adults, public health and safety facilities, and community spirit.
            </span>
          </li>
          <li className="flex items-start font-bold">
            <span className="mr-3 text-2xl">💀</span>
            <span>
              We're seeking Alameda-based sponsors who believe in hyper-local impact. 
              We will try to keep every dollar raised to stay on the island, supporting local vendors and our community.
            </span>
          </li>
        </ul>
      </div>
    </section>;
}