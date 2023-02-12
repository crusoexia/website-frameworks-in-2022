import useSWR from 'swr';
import {Todo} from 'shared/todo/domain';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function Dashboard() {
  const { data } = useSWR<Todo[]>('/api/todos', fetcher);
  return (
    <div id="dashboard">
      <h1>Dashboard</h1>
      {
        data
          ? (
            <>
              <h2>Total: <i>{ data.length }</i></h2>
              <h2>Finished: <i>{ data.filter(todo => todo.done).length }</i></h2>
            </>
          )
          : (
            <div>Loading...</div>
          )
      }
    </div>
  )
}
