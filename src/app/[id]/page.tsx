import SharedJson from './shared-json';

interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return <SharedJson id={params.id} />;
}
