import React from 'react';
export function ContactSection() {
  return <section className="mb-12">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
        <div className="text-center">
          <div className="text-3xl mb-2">🎃</div>
          <h3 className="text-xl font-bold mb-3">Steve Perez</h3>
          <p className="mb-2">(646) 765 7715</p>
          <p>
            <a href="mailto:steve.a.perez@gmail.com" className="hover:underline">
              steve.a.perez@gmail.com
            </a>
          </p>
        </div>
        <div className="text-center">
          <div className="text-3xl mb-2">🎃</div>
          <h3 className="text-xl font-bold mb-3">Nick Cawthon</h3>
          <p className="mb-2">(510) 542 7364</p>
          <p>
            <a href="mailto:nick@calsong.org" className="hover:underline">
              nick@calsong.org
            </a>
          </p>
        </div>
      </div>
    </section>;
}