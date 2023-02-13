import React from 'react';
import { Provider } from 'shared/todo/components/DashboardContext';

const DashboardContainer = ({ children }: { children: React.ReactNode }) => {
  const [ todos, setTodos ] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const resp = await fetch('/api/todos');    
      const data = await resp.json();
      setTodos(data);
    })();
  }, []);

  React.useEffect(() => {
    console.log('todos', todos);
  }, [ todos ]);

  return (
    <Provider value={{ todos }}>
      { children }
    </Provider>
  );
}

export default DashboardContainer;
