'use client';

import CodeMirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { useEffect, useState } from 'react';
import { JsonData } from '@/generated/prisma';

interface SharedJsonProps {
  id: string;
}

export default function SharedJson({ id }: SharedJsonProps) {
  const [jsonData, setJsonData] = useState<JsonData>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/json/${id}`);
        const data = await response.json();

        setJsonData(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div className='mt-8 max-w-4xl mx-auto'>loading...</div>;
  }

  return (
    <div className='mt-8 space-y-4 max-w-4xl mx-auto'>
      <h1 className='text-2xl underline font-bold'>{jsonData?.name}</h1>
      <CodeMirror
        value={jsonData?.content || ''}
        height='400px'
        extensions={[json()]}
        editable={false}
        className='border shadow-sm'
      />
    </div>
  );
}
