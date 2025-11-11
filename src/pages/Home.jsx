import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-100 to-white" />
        <div className="relative max-w-6xl mx-auto px-4 py-20 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h1 className="font-serif text-4xl md:text-5xl text-pink-800 leading-tight">
              Custom-Made Elegance for Every Occasion
            </h1>
            <p className="mt-4 text-gray-700">
              Samia’s Boutique crafts lehengas, suits, gowns, and party wear with impeccable fitting and fine stitching.
            </p>
            <div className="mt-8 flex gap-3">
              <Link to="/measurements" className="inline-flex items-center rounded-full bg-pink-600 text-white px-5 py-3 text-sm shadow hover:bg-pink-700 transition">
                Book Your Dress
              </Link>
              <Link to="/services" className="inline-flex items-center rounded-full border border-pink-300 text-pink-700 px-5 py-3 text-sm hover:bg-pink-50">
                Explore Services
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-white shadow-lg ring-1 ring-pink-100 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=1600&auto=format&fit=crop" alt="Elegant dress" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-pink-200/60 blur-2xl" />
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full bg-yellow-200/60 blur-2xl" />
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-6">
        {[
          { title: 'Custom Stitching', desc: 'Perfect fit tailored to you.' },
          { title: 'Bridal & Party Wear', desc: 'Timeless designs for special moments.' },
          { title: 'Alterations', desc: 'Refinements that make outfits feel new.' },
        ].map((c) => (
          <div key={c.title} className="bg-white rounded-xl p-6 shadow ring-1 ring-pink-100">
            <h3 className="font-serif text-xl text-pink-800">{c.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Home
