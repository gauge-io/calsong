import React from 'react';
export function App() {
  return <div className="min-h-screen w-full bg-white text-black">
      <section>
        <div className="max-w-3xl mx-auto px-4 py-12 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-tight">
            CalSong
          </h1>
          <h6 className="mt-4 font-serif text-base md:text-lg font-normal">
            Enriching community through music education.
          </h6>
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
          <p className="mt-6 text-xs text-neutral-600">
            Quail illustration by Corrinne Green
          </p>
        </div>
      </section>
    </div>;
}
