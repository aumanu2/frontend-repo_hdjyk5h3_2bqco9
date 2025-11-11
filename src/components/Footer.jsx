import React from 'react'

function Footer() {
  return (
    <footer className="bg-white border-t border-pink-100">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-xl text-pink-700">Samia’s Boutique</h3>
          <p className="text-sm text-gray-600 mt-2">Beautifully tailored women’s outfits with perfect fitting and fine stitching.</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">Contact</h4>
          <p className="text-sm text-gray-600 mt-2">Dharam Veer Complex, Sadhna Enclave, Sunday Market, Khora Colony, Sector 62A, Noida, Uttar Pradesh 201020</p>
          <a href="mailto:samiasboutique@gmail.com" className="text-sm text-pink-700 hover:underline mt-2 inline-block">samiasboutique@gmail.com</a>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">Hours</h4>
          <p className="text-sm text-gray-600 mt-2">Mon–Sun: 10:00 AM – 8:00 PM</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-4 border-t border-pink-100">© {new Date().getFullYear()} Samia’s Boutique. All rights reserved.</div>
    </footer>
  )
}

export default Footer
