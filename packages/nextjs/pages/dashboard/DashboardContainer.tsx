import useSWR from 'swr';
import {Todo} from 'shared/todo/domain';
import { Provider } from 'shared/todo/components/DashboardContext';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function DashboardContainer({ children }: { children: React.ReactNode }) {
  const { data = [] } = useSWR<Todo[]>('/api/todos', fetcher);
  return (
    <Provider value={{ todos: data }}>
      {children}
    </Provider>
  );
}
