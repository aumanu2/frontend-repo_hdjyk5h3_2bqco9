import React from 'react'

const services = [
  {
    title: 'Custom Stitching',
    desc: 'Tailor-made outfits designed to your style and fit.'
  },
  {
    title: 'Bridal & Party Wear',
    desc: 'Elegant lehengas and gowns crafted for your big moments.'
  },
  {
    title: 'Dress Alterations',
    desc: 'Precise alterations to enhance comfort and style.'
  },
  {
    title: 'Fabric Selection',
    desc: 'Guidance on premium fabrics to bring your vision to life.'
  },
]

function Services() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="font-serif text-3xl text-pink-800">Our Services</h2>
      <p className="mt-3 text-gray-700 max-w-2xl">From bespoke designs to precise alterations, we bring elegance to every stitch.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div key={s.title} className="bg-white rounded-xl p-6 shadow ring-1 ring-pink-100 hover:shadow-md transition">
            <h3 className="font-serif text-xl text-pink-800">{s.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
