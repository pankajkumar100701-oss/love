import Link from 'next/link';

export default function Home() {
  const templates = [
    { id: 'floral', name: 'Floral Elegance', description: 'Classic floral design for any age.' },
    { id: 'minimalist', name: 'Minimalist Modern', description: 'Clean, simple, and stylish.' },
    { id: 'fun', name: 'Fun Party', description: 'Bright, energetic, and playful.' },
    { id: 'elegant', name: 'Elegant Gold', description: 'Sophisticated and luxurious design.' },
  ];

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Birthday Template Gallery</h1>
        <p className="text-xl text-gray-600">Choose a beautiful design for your birthday invitation.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((template) => (
          <div key={template.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-2xl font-semibold mb-2">{template.name}</h2>
            <p className="text-gray-600 mb-6">{template.description}</p>
            <Link href={`/templates/${template.id}`} className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
              Preview Template
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
