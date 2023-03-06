import { json } from '@remix-run/node';
import Layout from 'shared/dist/layout/Layout';
import { useLoaderData } from '@remix-run/react';
import { Provider } from 'shared/dist/todo/components/DashboardContext';
import Dashboard from 'shared/dist/todo/components/Dashboard';
import {getTodos} from 'shared/dist/todo/db';

export async function loader() {
  return json(getTodos());
}

export default function DashboardContainer() {
  const todos = useLoaderData();
  return (
    <Layout>
      <main>
        <Provider value={{ todos }}>
          <Dashboard />
        </Provider>
      </main>
    </Layout>
  );
}
