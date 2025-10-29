'use client'
import { useRouter } from "next/navigation";

export default function Notfound() {
    const router = useRouter();

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-pink-200 via-orange-100 to-yellow-200">
      <h2 className="text-6xl font-bold text-gray-700 mb-8 text-center">
        404 Not Found | Hello
      </h2>
      
      <button 
      onClick={() => router.push("/landingpage")}

      className="bg-amber-50 hover:bg-amber-100 text-black px-6 py-3 rounded-xl text-lg font-semibold shadow-md">
        Pencet
      </button>
    </div>
  );
}
