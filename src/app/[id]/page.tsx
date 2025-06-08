import SharedJson from './shared-json';

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <SharedJson id={id} />;
}
