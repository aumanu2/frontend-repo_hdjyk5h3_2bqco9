import React from 'react'

const images = [
  'https://images.unsplash.com/photo-1520975682031-d1ceee1214bd?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1541944743827-e04aa6427c33?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520975682031-2430a0979618?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1554804733-0d3fee2c274e?q=80&w=1600&auto=format&fit=crop',
]

function Gallery() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="font-serif text-3xl text-pink-800">Gallery</h2>
      <p className="mt-3 text-gray-700">A glimpse of elegant silhouettes and fine craftsmanship.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, idx) => (
          <div key={idx} className="aspect-[4/5] overflow-hidden rounded-xl shadow ring-1 ring-pink-100">
            <img src={src} alt={`Dress ${idx+1}`} className="w-full h-full object-cover hover:scale-105 transition-transform" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
