import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white p-8">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold mb-6 animate-pulse">Happy Birthday!</h1>
        <p className="text-2xl mb-12">Wishing you a wonderful day filled with joy and celebration.</p>
        <div className="flex gap-4 justify-center">
          <Link href="/templates/floral" className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
            View Templates
          </Link>
        </div>
      </div>
    </main>
  );
}
