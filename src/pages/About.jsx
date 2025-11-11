import React from 'react'

function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="font-serif text-3xl text-pink-800">Our Story</h2>
      <p className="mt-4 text-gray-700 leading-relaxed">
        At Samia’s Boutique in Noida, we believe every outfit should reflect your personality and fit you flawlessly. From bespoke lehengas to graceful gowns and everyday suits, every piece is handcrafted with care, precision, and love. Our focus is on premium finishing, elegant silhouettes, and comfortable fits, ensuring you feel confident and beautiful in every stitch.
      </p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <img src="https://images.unsplash.com/photo-1612423284934-2850a4ea6b0f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCb3V0aXF1ZXxlbnwwfDB8fHwxNzYyODU5OTY0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Boutique" className="rounded-xl shadow ring-1 ring-pink-100" />
        <div className="bg-white rounded-xl p-6 shadow ring-1 ring-pink-100">
          <h3 className="font-serif text-xl text-pink-800">Why Choose Us</h3>
          <ul className="mt-3 space-y-2 text-gray-700 text-sm list-disc list-inside">
            <li>Custom designs tailored to your vision</li>
            <li>Perfect measurements and fittings</li>
            <li>High-quality fabrics and finishes</li>
            <li>Friendly consultations and timely delivery</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
