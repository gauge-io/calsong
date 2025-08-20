import React from 'react';
import { SponsorCard } from './SponsorCard';
export function SponsorshipTiers() {
  const tiers = [{
    title: 'Creature Feature',
    price: '$100',
    benefits: ['Recognition on day-of promotional materials', 'Promotion as a sponsor on festival website'],
    featured: false,
    url: 'https://fundraiseup.com/1234'
  }, {
    title: 'Spooky Spotlight',
    price: '$250',
    benefits: ['Logo placement on main stage backdrop', 'Promotion as a sponsor on festival website and Digifly', 'Recognition on day-of promotional materials', 'Company mentions during all announcements'],
    featured: false,
    url: 'https://fundraiseup.com/5678'
  }, {
    title: 'Main Stage Monster',
    price: '$500',
    benefits: ['Premium logo placement on main stage backdrop (largest size)', '5-minute speaking opportunity between acts', 'Promotion as title sponsor on festival website and Digifly', 'Recognition on day-of promotional materials', 'Option to perform with the headlining band'],
    featured: true,
    url: 'https://fundraiseup.com/9012'
  }];
  return <section className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8">Sponsorship Tiers</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {tiers.map((tier, index) => <SponsorCard key={index} title={tier.title} price={tier.price} benefits={tier.benefits} featured={tier.featured} url={tier.url} />)}
      </div>
      <div className="mt-12 text-center">
        <p className="text-xl font-bold">
          Join us as partners to help launch this annual tradition.
        </p>
      </div>
    </section>;
}