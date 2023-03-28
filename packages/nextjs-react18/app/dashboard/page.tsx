import { Suspense } from 'react';
//import { cookies } from 'next/headers';
import Loading from '@/components/Loading';
import Dashboard from './_components/Dashboard';

// Dynamic rendering since we use `fetch` without cache to load data, or
// access any runtime-only resources.
export default async function Page() {
  //const cookieStore = cookies();
  //console.log('cookies:', cookieStore.getAll());
  return (
    <Suspense fallback={(<Loading msg="Loading your dashboard..."/>)}>
      {/* @ts-expect-error Async Server Component */}
      <Dashboard />
    </Suspense>
  );
}
