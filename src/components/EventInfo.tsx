import React from 'react';
export function EventInfo() {
  return <section className="mb-12 grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-2xl font-bold mb-4">About the Event</h2>
        <p className="mb-4">
          CalSong, an Alameda-based arts non-profit (EIN 32-0667438), has been
          awarded a grant from the Special Events program at the City of Alameda
          to establish a street festival in Franklin Park for Halloween, which
          falls on a Friday night this year.
        </p>
        <p className="mb-4">
          Centered around where Morton 'bends' into San Jose Avenue around the
          side of Franklin Park, our "Boneyard at the Bend" celebration will
          serve as the heart of a community welcoming others for a special
          evening in our island city.
        </p>
        <p className="mb-4">
          The grant funding covers basic city services such as waste management,
          traffic control and emergency services – we are seeking your
          sponsorship to help us cover our additional costs.
        </p>
        <p className="font-bold">
          We are exclusively seeking Alameda-based sponsors that understand the
          direct impact of hyper-local investments. Wherever possible, any money
          raised will stay on the island with local vendors, for the good of the
          island.
        </p>
      </div>
      <div className="flex justify-center">
        <img src="/Screenshot_2025-08-19_at_7.52.34_PM.png" alt="Skeleton musician illustration" className="max-w-full h-auto max-h-96 border-5 border-white" />
      </div>
    </section>;
}