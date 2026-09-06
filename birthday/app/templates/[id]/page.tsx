import { notFound } from 'next/navigation';
import FloralTemplate from '../../components/FloralTemplate';
import MinimalistTemplate from '../../components/MinimalistTemplate';
import FunTemplate from '../../components/FunTemplate';
import ElegantGoldTemplate from '../../components/ElegantGoldTemplate';

interface TemplatePageProps {
  params: Promise<{ id: string }>;
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  const { id } = await params;

  const templates: Record<string, React.ReactNode> = {
    floral: <FloralTemplate />,
    minimalist: <MinimalistTemplate />,
    fun: <FunTemplate />,
    elegant: <ElegantGoldTemplate />,
  };

  const template = templates[id];

  if (!template) {
    notFound();
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {template}
    </main>
  );
}
