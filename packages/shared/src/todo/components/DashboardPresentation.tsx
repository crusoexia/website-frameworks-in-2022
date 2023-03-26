import React from 'react';
import {Todo} from '../domain';

export default function Dashboard({ todos }: { todos: Todo[] }) {
  return (
    <div id="dashboard">
      <h1>Dashboard</h1>
      <h2>Total: <i>{ todos.length }</i></h2>
      <h2>Finished: <i>{ todos.filter(todo => todo.done).length }</i></h2>
    </div>
  )
}
