import React from 'react'

function Measurements() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      <h2 className="font-serif text-3xl text-pink-800">Submit Your Measurements</h2>
      <p className="mt-3 text-gray-700">Please fill out the form below. Our team will contact you to confirm your design and fitting appointment.</p>
      <div className="mt-6 bg-white rounded-xl p-3 shadow ring-1 ring-pink-100">
        <div className="aspect-[3/4] w-full">
          <iframe
            title="Measurements Form"
            src="https://forms.gle/6AgCmTJrikocpE739"
            className="w-full h-[80vh] rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Measurements
