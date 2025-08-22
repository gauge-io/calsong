import React from 'react';
interface SponsorCardProps {
  title: string;
  price: string;
  benefits: string[];
  featured?: boolean;
  url: string;
}
export function SponsorCard({
  title,
  price,
  benefits,
  featured = false,
  url
}: SponsorCardProps) {
  return <div className={`border-2 ${featured ? 'border-orange-500' : 'border-gray-600'} rounded-lg p-6 flex flex-col h-full bg-gray-900 hover:bg-gray-800 transition-all hover:scale-105`}>
      <div className={`text-center mb-6 pb-4 ${featured ? 'border-b-2 border-orange-500' : 'border-b border-gray-600'}`}>
        <h3 className={`text-2xl font-bold mb-2 ${featured ? 'text-orange-500' : ''}`}>
          {title}
        </h3>
        <p className="text-3xl font-bold">{price}</p>
      </div>
      <ul className="flex-grow space-y-3 mb-6">
        {benefits.map((benefit, index) => <li key={index} className="flex items-start">
            <span className="inline-block mr-2 text-xl">🦴</span>
            <span>{benefit}</span>
          </li>)}
      </ul>
      <a 
        href={url} 
        className={`block w-full py-3 px-6 rounded-md font-bold text-center transition-colors cursor-pointer no-underline ${
          featured 
            ? 'bg-orange-500 text-white hover:bg-orange-600' 
            : 'bg-gray-800 text-white hover:bg-gray-700'
        }`}
      >
        Become a Sponsor
      </a>
    </div>;
}