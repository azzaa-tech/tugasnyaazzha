import React from 'react'

export default function page() {
    return (
        <div className="flex flex-col items-center mt-16 mb-10 text-center">
        <h5 className="text-[#00A389] font-semibold text-lg mb-3">🌿 NCT WISH Members 🌿</h5>
        <p className="text-gray-700 text-sm">
          Sion · Ryo · Yushi · Riku · Jaehee · Sakuya
        </p>
        <img
          src="/assest/nctwish.jpg"
          alt="NCT WISH Members"
          className="mt-6 h-24 w-auto rounded-xl flex items-center shadow-md "
        />
      </div>
    )
}