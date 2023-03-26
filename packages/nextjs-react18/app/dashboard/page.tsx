import { Suspense } from 'react';
import Loading from '@/components/Loading';
import Dashboard from './_components/Dashboard';

export default async function Page() {
  return (
    <Suspense fallback={(<Loading/>)}>
      {/* @ts-expect-error Async Server Component */}
      <Dashboard />
    </Suspense>
  );
}
