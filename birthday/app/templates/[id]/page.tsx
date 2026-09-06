import { notFound } from 'next/navigation';
import FloralTemplate from '../../components/FloralTemplate';
import MinimalistTemplate from '../../components/MinimalistTemplate';
import FunTemplate from '../../components/FunTemplate';
import ElegantGoldTemplate from '../../components/ElegantGoldTemplate';

interface TemplatePageProps {
  params: { id: string };
}

export default function TemplatePage({ params }: TemplatePageProps) {
  const { id } = params;

  const templates: Record<string, JSX.Element> = {
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
