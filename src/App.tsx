import React from 'react';
export function App() {
  return <div className="min-h-screen w-full bg-white text-black">
      <section>
        <div className="max-w-3xl mx-auto px-4 py-12 text-center">
          <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-tight">
            CalSong
          </h1>
          <h6 className="mt-4 font-serif text-base md:text-lg font-normal">
            A 5013c that enriches community through music education.
          </h6>
          <img
            src="/calsong-quail.jpg"
            alt="Woodcut of a California quail"
            className="mx-auto mt-8 w-full max-w-md h-auto"
          />
          <div className="mt-12 grid grid-cols-2 gap-6 text-center font-serif">
            <div>
              <h2 className="text-2xl font-semibold">Steve Perez</h2>
              <p className="mt-3">(646) 765 7715</p>
              <p className="mt-2">
                <a href="mailto:steve.a.perez@gmail.com" className="underline underline-offset-4">
                  steve.a.perez@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">Nick Cawthon</h2>
              <p className="mt-3">(510) 542 7364</p>
              <p className="mt-2">
                <a href="mailto:nick@calsong.org" className="underline underline-offset-4">
                  nick@calsong.org
                </a>
              </p>
            </div>
          </div>
          <img
            src="/calsong-ornaments.png"
            alt=""
            className="mx-auto mt-10 h-auto w-full max-w-sm"
            style={{ filter: 'invert(1)' }}
          />
          <p className="mt-6 text-xs text-neutral-600">
            Quail illustration by Corrinne Green
          </p>
        </div>
      </section>
    </div>;
}
