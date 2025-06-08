import SharedJson from './shared-json';

// interface PageProps {
//   params: { id: string };
// }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Page({ params }: any) {
  return <SharedJson id={params.id} />;
}
