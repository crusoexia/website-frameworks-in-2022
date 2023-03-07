import { json, ActionArgs } from '@remix-run/node';
import { getTodos } from 'shared/dist/todo/db';
import { useLoaderData } from '@remix-run/react';
import React from 'react';
import Layout from 'shared/dist/layout/Layout';
import TodoList from 'shared/dist/todo/components/TodoList';
import { reducer } from 'shared/dist/todo/reducer';
import { Provider } from 'shared/dist/todo/components/TodosContext';

export async function loader() {
  const todos = getTodos();
  return json(todos);
}

export async function action({ request }: ActionArgs) {
  const body = await request.formData();
  console.log('recevie submit, formData: ');
  for(const pair of body.entries()) {
    console.log(pair.at(0), pair.at(1));
  }

  return 'ok';
}

export default function List() {
  const todos = useLoaderData<typeof loader>();
  //const submit = useSubmit();
  const [ state, dispatch ] = React.useReducer(reducer, { todos });
  const context = React.useMemo(() => {
    return {
      dispatch,
    }
  }, []);

  //React.useEffect(() => {
    //if (state.todos === todos) {
      //return;
    //}

    //submit(new FormData());
  //}, [ state, todos ]);

  return (
    <Layout>
      <Provider value={context}>
        <main>
          <h1>Tasks</h1>
          <form method="post">
            <TodoList todos={state.todos} />
            <button type="submit">Submit</button>
          </form>
        </main>
      </Provider>
    </Layout>
  );
}
